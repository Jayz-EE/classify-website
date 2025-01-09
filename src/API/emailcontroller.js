const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { customer_name, customer_email, customer_number, customer_message } = req.body;

  const nodemailer = require("nodemailer");

    const sendEmail = async (req, res) => {
        const { customer_name, customer_email, customer_number, customer_message } = req.body;

        // Configure transporter for SSL
        const transporter = nodemailer.createTransport({
            host: "mail.classify.com.ph",  // SMTP server for your domain
            port: 465,  // SSL port
            secure: true,  // Use SSL (true for SSL)
            auth: {
            user: "jayzher@classify.com.ph",  // Your full email address
            pass: "YNNHCU9b8DOKNia",  // Your email password (or app-specific password if using 2FA)
            },
        });

        const mailOptions = {
            from: `"Classify Customer Support" <classifycustomer@outlook.com>`,  // Sender address
            to: "jayzher@classify.com.ph",  // Recipient email
            subject: `New message from ${customer_name}`,  // Email subject
            html: `
            <p><strong>Customer Name:</strong> ${customer_name}</p>
            <p><strong>Customer Email:</strong> ${customer_email}</p>
            <p><strong>Customer Number:</strong> ${customer_number}</p>
            <p><strong>Customer Message:</strong></p>
            <p>${customer_message}</p>
            `,
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Email sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Failed to send email", error });
        }
    }
};

module.exports = { sendEmail };
