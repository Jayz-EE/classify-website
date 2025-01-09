import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import axios from "axios"; // Import axios for CAPTCHA verification

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow all origins (use this only for development)
app.use(express.json());
app.use(cookieParser()); // Enable cookie parsing

// Function to verify CAPTCHA response
const verifyCaptcha = async (captchaResponse) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Load secret key from environment variables

  try {
    console.log("Captcha response received:", captchaResponse);
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null, // POST request with no body
      {
        params: {
          secret: secretKey,
          response: captchaResponse, 
        },
      }
    );

    // Return whether the CAPTCHA verification was successful
    return response.data.success;
  } catch (error) {
    console.error("Error verifying CAPTCHA:", error);
    return false;
  }
};

// POST Route for Sending Emails
app.post("/send-email", async (req, res) => {
  const { customer_name, customer_email, customer_number, customer_message, captcha_response } = req.body;

  // Verify CAPTCHA response
  const captchaVerified = await verifyCaptcha(captcha_response);

  if (!captchaVerified) {
    return res.status(400).json({ message: "CAPTCHA verification failed" });
  }

  // Set a first-party cookie upon CAPTCHA success
  res.cookie("user_authenticated", true, {
    httpOnly: true, // Cookie is only accessible via HTTP(S), not JavaScript
    maxAge: 3600000, // 1-hour expiration time
    secure: process.env.NODE_ENV === "production", // Only set the cookie over HTTPS in production
    sameSite: "Strict", // Prevent cross-site request forgery
  });

  // Validate if required fields are provided
  if (!customer_name || !customer_email || !customer_number || !customer_message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Classify Customer Support" <classifycustomer@outlook.com>`,
    to: "jayzher@classify.com.ph",
    subject: `New message from ${customer_name}`,
    html: `
      <p><strong>Customer Name:</strong> ${customer_name}</p>
      <p><strong>Customer Email:</strong> ${customer_email}</p>
      <p><strong>Customer Number:</strong> ${customer_number}</p>
      <p><strong>Customer Message:</strong></p>
      <p>${customer_message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!", status: "success" });
  } catch (error) {
    console.error("Error in sending email:", error);
    return res.status(500).json({ message: "Failed to process request", error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
