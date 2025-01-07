import ScrollAnimation from "react-animate-on-scroll";
import React, { useState, useEffect, useRef } from "react";
import Images from "../assets/images/image";
import { BLOG_DATA } from "../data/blog_data";
import BlogCard from "../components/blogCard";
import { Modal, Button } from "react-bootstrap";

import "../styles/blogs.scss";

const BlogsPage = () => {
  const [activeModalId, setActiveModalId] = useState(null);

  const handleClose = () => setActiveModalId(null);
  const handleShow = (id) => setActiveModalId(id);

  return (
    <div id="blog">
      {/** landing */}
      <div id="landingBlog">
        <div className="landingBlog container-fluid">
          <div className="container">
            <ScrollAnimation initiallyVisible animateIn="fadeIn">
              <h1 id="blog-section">ClassifyEd Blog</h1>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      {/** Blog */}
      <div id="blogContent">
        <div className="container">
          <div className="row">
            {BLOG_DATA.map((blog, index) => (
              <BlogCard key={index} blog={blog} handleShow={handleShow} />
            ))}
          </div>
        </div>
      </div>
      <div id="modalBlogs">
        {/* Modal 1 */}
        <Modal className="blog" key={'blog1'} show={activeModalId == "blog1"} onHide={handleClose} size="xl" centered>
          <Modal.Header closeButton>
            <img src={Images.Logo} alt="Classify" className="modal-img"/>
          </Modal.Header>
          <Modal.Body className="container-fluid">
            <h1>
              Santa Cruz Mission School forges ahead with tools and technology as
              classes open amidst COVID-19 pandemic.
            </h1>
            <p>
              October 12, 2020 — Mountainous South Cotabato is not unique in its
              ongoing challenge for better IT infrastructure. It experiences the
              same power and internet connectivity interruptions.
            </p>
            <p>
              Santa Cruz Mission School, previously known as Notre Dame of Lake
              Sebu, remains true to its 59-year mission to provide Catholic
              education to the Indigenous People (IP) towards identity
              upliftment, cultural preservation, and community empowerment.
            </p>
            <figure className="figure">
              <img
                src={Images.blog1Image1}
                alt="Blog"
                className="img-fluid pb-2"
              />
              <img
                src={Images.blog1Image2}
                alt="Blog"
                className="img-fluid"
              />
              <figcaption className="figure-caption">
                Image Sources:{" "}
                <a
                  href="https://www.facebook.com/405756santa-cruz-mission-school-Inc-109831990754657/?ref=page_internal"
                  target="_blank"
                  rel="noreferrer"
                >
                  Santa Cruz Mission School Facebook Page
                </a>
              </figcaption>
            </figure>
            <p>
              Santa Cruz Mission School (SCMSI) recently implemented its
              first ever education technology, ClassifyLMS, in its
              Elementary Department. Academic Director, Reden Ulo, a
              featured guest at a recent webinar expounded on the school’s
              experience in moving in the direction of technological
              advancement amidst the infrastructure challenges. He said,
              “Even if schools go back to classroom settings, we are
              committed to making full use of online learning as an integral
              part of our program… Right now we have students attending our
              classes from as far as Dubai and Korea. This is a powerful
              proof that social distancing protocols will not stop learners
              from learning and teachers from teaching. I am very grateful
              to our school for pushing through with adoption plans and are
              sharing our commitment to making the learning experience as
              thorough as any in-person classroom sessions in the past.”{" "}
            </p>
            <h1>WATCH THE FULL REPLAY :</h1>
            <div className="vid ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Lo9vLL6Tm4A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              Founded in 1961, Santa Cruz now has six (6) Community Centers
              (Elementary Department); two (2) Secondary Level Centers (High
              School Department); and One College Department offering the
              Degree of BS in Community Development and BEED General
              Education in Consortium with Notre Dame of Marbel University
              (NDMU).{" "}
            </p>
            <p>
              Because of its successful implementation of the LMS, the
              school is scheduled to roll out the next phase of its edutech
              adoption for its High School and College departments in the
              next months.
            </p>
            <p>
              Communication infrastructure and uninterrupted connectivity
              are clear barriers to seamless virtual learning experience,
              but the T’boli response to the needs of its cultural
              communities show a tireless dedication towards continuous
              learning and development–truly a critical quality of early
              adopters and thought leaders in a region that largely relies
              on traditional methods of learning.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-secondary text-center"
                style={{width: '150px'}}
                onClick={handleClose}
              >
                Close
              </button>
            </div> 
          </Modal.Body>
        </Modal>
        {/* Modal 1 */}
        <Modal
          key={'blog2'}
          show={activeModalId == "blog2"}
          onHide={handleClose}
          size="xl"
          centered
          className="blog"
        >
          <Modal.Header closeButton>
            <img src={Images.Logo} alt="Classify" className="modal-img"/>
          </Modal.Header>
          <Modal.Body>
            <figure className="figure">
              <img
                src={Images.blog2Image1}
                alt="Blog"
                className="img-fluid"
              />
            </figure>
            <h1>
              How Are our Filipino Teachers Coping with the Migration to
              Virtual/Online or Distance Learning?
            </h1>
            <p>
              The global pandemic disrupted the world’s educational system.
              Parents and students have mixed reactions about this drastic
              shift in the prescribed blended, distance learning methods.
            </p>
            <p>
              At a macro-level, social distancing and sanitation mandates
              are implemented as disaster response and mitigation steps
              until a vaccine is made available to the public.
            </p>
            <p>
              Some of the critical questions we want to answer are about :
            </p>
            <ul>
              <li>Long-term educational system strategy</li>
              <li>
                Addressing the emerging continuous learning and up-skilling
                needs for teachers
              </li>
              <li>Shifting academic institution priorities</li>
              <li>
                Blended, virtual distance learning implementation challenges
              </li>
            </ul>
            <p>
              According to the Department of Education, there are 23 million
              enrolled students in public and private schools for the school
              year 2020-21. With the 23 million students migrating to a new
              normal way of learning, how are our teachers coping?
            </p>
            <h1>
              SURVEY{"\n"}
              (Demographic Profile of Respondents: Age, Gender, Location,
              Profession, # of Years as Educator, Public or Private School,
              Grade Level Taught, etc.)
            </h1>
            <h2>Q1. How Would You Describe Your Access to Technology?</h2>
            <p>
              (Available Hardware/Software Devices and Stable Internet
              Connection)
            </p>
            <ol>
              <li>I am fully-equipped (hardware, software, internet)</li>
              <li>
                I am partially-equipped (have limited access to at least one
                of these)
              </li>
              <li>
                I am not equipped (have very limited access to two or more
                of these)
              </li>
            </ol>
            <h2>
              Q2. Assuming that you have Access to Technology, will you
              consider this to be an alternative educational modality?
            </h2>
            <p>
              [Yes] ___%{"\n"}
              [No] ___%{"\n"}
              [Unsure] ___%
            </p>
            <h2>
              Q3. On a scale of 1-4, 4 being the highest, how would you rate
              your readiness to use online teaching tools, learning
              management systems?
            </h2>
            <p>
              [4] – Good working knowledge of online learning tools and
              teaching techniques{"\n"}
              [3] – Familiar; feels the need for additional training for
              delivery of course material{"\n"}
              [2] – Unfamiliar with tools; taking up independent online
              courses to build familiarity{"\n"}
              [1] – No experience using online learning tools for applying
              teaching techniques
            </p>
            <h2>
              Q4. Which subjects would you consider to be adaptable to a
              virtual learning setting?
            </h2>
            <p>
              Basic Education{"\n"}
              High School Education{"\n"}
              Tertiary Education
            </p>
            <h2>
              Q5. If available, which of these Continuous Professional
              Development Programs would you consider to be helpful in
              helping you become an effective online educator?
            </h2>
            <p>
              Check all that apply.{"\n"}[ ] Planning and Preparation for
              Virtual/Online Learning{"\n"}[ ] Virtual/Online Classroom
              Management{"\n"}[ ] Virtual/Online Instruction Delivery
              Techniques{"\n"}[ ] Virtual/Online Monitoring, Assessment and
              Follow-up
            </p>

            <h1>Adaptability</h1>
            <p>
              As of June 2020, only 300,000 of 800,000 public-school
              teachers were trained for the distance learning set to start
              in August. This is an alarming value considering the pandemic
              broke out last March. It took three months to prepare the 40%
              while the 60% only has 2 months left to train. Granted that
              the training is on-going, it would still fail to compensate
              for the sudden migration. Continuous Professional Development
              programs can help address the need to build teachers’
              technical and online-facilitation skills.
            </p>
            <p>
              The Department of Education (DepEd) has yet to disclose
              information on the level of preparedness of the 40% trained
              professionals. Some veterans of the 40% trained and training
              for the distance learning still have a difficulty fully
              adjusting to new tools in order to facilitate online teaching
              (i.e. Zoom Meetings, Google Suite Apps, Google Meet, etc.).
            </p>

            <h1>Teacher/Parent Support System</h1>
            <p>
              53.85% of the respondents do not struggle with acquiring the
              support of the student’s family. Though far-fetched from being
              perfect, it is a good start for home-based learning. However,
              60% of the teachers do not feel supported by the community in
              the new method of learning. This is an upsetting value for
              without the majority’s support, who will aid these teachers in
              voicing their concerns to the public? Most importantly,
              according to the same survey, 68% of teachers are not
              supported with the needed technology. Apparently, it is the
              responsibility of our teachers to secure their own devices,
              tools, and applications. These teachers need more than
              training and seminars on how to cope with the sudden migration
              to virtual teaching, they, too, need financial support in
              securing all needed technological assets.
            </p>

            <h1>Ensuring Quality Education</h1>
            <p>
              With the academic freeze out of the picture, provide gadgets
              and a stable internet connection to both the teachers and
              students to ensure a stable and quality teaching-learning
              endeavor.
            </p>
            <p>
              There are many moving parts in this virtual learning method.
              Journeys can be as different and unique for every teacher,
              parent and student. Other pressing factors need to be
              considered: geography, economic standing, digital
              infrastructure, resource availability, conducive learning
              spaces among other things. Majority of news outlets cover
              articles about student experiences. Our youth can be
              considered digital natives or digital-first, if not
              digital-only generation.
            </p>
            <p>
              A growing number of teachers are adapting to their mission
              field in the way they know how. The new normal puts learning
              front and center. Not just for learners but for educators as
              well. ClassifyLMS supports teachers by making their day-to-day
              lives easier. Join our upcoming online event :
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-secondary text-center"
                style={{width: '150px'}}
                onClick={handleClose}
              >
                Close
              </button>
            </div> 
          </Modal.Body>
        </Modal>
        {/* Modal 3 */}
        <Modal className="blog" key={'blog3'} show={activeModalId == "blog3"} onHide={handleClose} size="xl" centered>
          <Modal.Header closeButton>
            <img src={Images.Logo} alt="Classify" className="modal-img"/>
          </Modal.Header>
          <Modal.Body className="container-fluid">
            <figure className="figure">
              <img
                src={Images.blog3Image1}
                alt="Blog"
                className="img-fluid"
              />
            </figure>
            <h1>Outlook 2020 : The State of EduTech in the Philippines</h1>
            <p>
              We all have been caught off-guard with the arrival of the
              Covid-19 virus early this year. This pandemic has posed a
              global challenge to all sectors of society and one of these is
              the education sector.
            </p>
            <p>
              An estimated number of{" "}
              <strong>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.manilatimes.net/2020/05/13/business/columnists-business/what-will-schools-look-like-under-the-new-normal/724556/"
                >
                  27 million learners, 1 million teachers, and non-teaching
                  staff
                </a>
              </strong>{" "}
              are affected by this crisis in the Philippines alone.{" "}
            </p>
            <p>
              Quarantine measures make it difficult for schools to hold
              physical classes since simply transporting the students,
              teachers, and staff from their homes to the school premises
              highly poses a risk for them to catch the virus.{" "}
            </p>
            <p>
              The Philippines is behind other Asian countries such as
              Singapore, Japan, and South Korea when it comes to using
              technology in education.{" "}
            </p>
            <p>
              The old adage, “in every crisis, there is an opportunity”
              takes on an optimistic tone to the current challenges
              experienced by parents, school administrators, teachers and
              students.
            </p>
            <p>
              Online learning is not new as most innovative schools have
              long since adopted this. This health crisis is now paving the
              way for educational technology to be more accepted, utilized,
              and enhanced.
            </p>
            <p>
              Philippine schools were supposed to open SY 2020-2021 on
              August 24. There were mixed reactions to this and some of them
              stated that they are not that well-prepared that is why it was
              moved to October 5, 2020.{" "}
            </p>
            <p>
              As public schools make their country-wide preparations,
              private schools requested that they be allowed to open earlier
              since opening by October will be a big blow to their financial
              situation.
            </p>
            <p>
              At least{" "}
              <strong>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://newsinfo.inquirer.net/1322321/deped-private-catholic-schools-can-reopen-any-time-before-oct-5"
                >
                  1,277 private schools, 243 of them in Metro Manila
                </a>
              </strong>
              , had started classes ahead of the scheduled opening on Aug.
              24, according to DepEd. There are 2,195 private schools said
              to have started on August 24 and then another 26 that opened
              before the first week of September. These schools followed the
              provisions of Republic Act No. 7797.
            </p>
            <p>
              Whichever date they prefer to open classes, private schools
              were asked to meet the requirements listed on DepEd Order No.
              13 of 2020, known as the{" "}
              <strong>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.deped.gov.ph/wp-content/uploads/2020/06/DO_s2020_013.pdf"
                >
                  Readiness Assessment Checklist for Learning Delivery
                  Modalities in the Learning Continuity Plan of Private
                  Schools
                </a>
              </strong>
            </p>
            <p>
              Number one in their non-negotiable list is the Platform and
              Support: The school has an educational platform or Learning
              Management System (LMS), either subscription-based or locally
              developed.{" "}
            </p>
            <h1>What is a Learning Management System (LMS)?</h1>
            <p>
              A Learning Management System (LMS) is a software-based or SaaS
              platform that facilitates the management, delivery, and
              measurement of an e-learning program.{" "}
            </p>
            <p>
              Since schools will not be able to conduct teaching and exams
              with a physical presence, this web-based technology will be
              used to implement and assess learning processes.
            </p>
            <p>Two key elements are necessary for LMS: </p>
            <ul>
              <li>a server and </li>
              <li>a user-interface</li>
            </ul>
            <p>
              Virtual classes can then be held through this software where
              teachers can assign, monitor, and grade these activities in
              place of face-to-face classes.{" "}
            </p>
            <p>
              The{" "}
              <strong>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.teacherph.com/parents-guide-deped-commons-online-learning/"
                >
                  DepEd Commons
                </a>
              </strong>{" "}
              is the one mainly used by the Department of Education as its
              LMS. It contains{" "}
              <strong>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.teacherph.com/deped-open-educational-resources-oer/"
                >
                  Open Educational Resources (OERs)
                </a>
              </strong>
              ,{" "}
              <strong>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.teacherph.com/deped-learning-materials/"
                >
                  Electronic Self-Learning Modules (e-SLMs)
                </a>
              </strong>
              , video and audio lecture episodes, and other digital contents
              that will be used by teachers to assign and schedule the
              activities that learners will go through.{" "}
            </p>
            <p>
              With the DepEd collaborating with the Department of
              Information and Communications Commission (NTC), this is
              specially designed to be accessed free of data charges by all
              mobile subscribers of Globe, TM, Smart, Sun, and TNT.{" "}
            </p>
            <p>
              According to the International Institute for Management
              Development, the Philippines’ talent readiness level of 2019
              is 3rd among 5 other SE Asian countries, following Singapore
              and Malaysia.
            </p>
            <figure className="figure">
              <img
                src={Images.blog3Image2}
                alt="Blog"
                className="img-fluid"
              />
            </figure>
            <p>
              Private schools have the option to use the DepEd Commons or
              they can choose from popular off-the-shelf LMS software in the
              market or customize their own learning management system.
            </p>
            <p>
              One of the pioneering EduTech developers, ClassifyLMS,
              implemented by local schools since late 2019. Classify is a
              competitively priced LMS platform that comes with built-in
              features not readily available in the majority of software in
              the market.
            </p>
            <p>
              ClassifyLMS onboarding and live-technical support features
              ensure teachers and students are fully supported in their
              adoption of the new normal in the academe sector.
            </p>
            <p>
              Most initial adopters are from highly urbanized cities. But a
              number of schools in Region 12 and as far as Basilan have
              started their virtual learning initiatives ahead of most
              advanced schools in the country.
            </p>
            <p>
              Infrastructure is an ongoing concern since not all students
              and teachers have the necessary devices and uninterrupted
              internet access that are needed in order to use online
              learning management systems.
            </p>
            <p>
              The state of educational technology in the Philippines has a
              lot of room for growth. In a June 2020 article in The ASEAN
              Post, The Philippines lags behind neighboring countries and is
              4% below the SE Asia average government expenditure on
              education.
            </p>
            <figure className="figure">
              <img
                src={Images.blog3Image3}
                alt="Blog"
                className="img-fluid"
              />
            </figure>
            <p>
              With the school year opening in October, general adoption rate
              and public sentiments will be strong indicators of the overall
              preparedness and agility of schools, telecommunications
              companies and local government units to manage and sustain
              this huge leap in the country’s education system and the
              complete shift to digital learning platforms.{" "}
            </p>
            <p>
              There may not be any substitute for face-to-face learning
              experiences both now and in the future. Advanced developments
              in the educational technology sector gives us hope.{" "}
            </p>
            <strong>
              <i>
                “Resilience must be built into our educational systems”{" "}
              </i>
            </strong>
            <p>—Gloria Tam & Diana El-Azar, Minerva Project</p>
            <h1>The Outlook: Rethinking the Future of Learning</h1>
            <p>
              Within the next decade, we foresee an ongoing national (and
              global) transformation that is influenced by a digital-only
              mindset, driven by digital-first learning methods and tools,
              making learning future-ready.{" "}
            </p>
            <p>
              Learning and innovation thrives even amidst crises and
              uncertainty.
            </p>
            <p>
              Developing stronger collaboration and embracing independent,
              self-paced learning outside classroom walls and traditional
              teaching methods are keys to preparing our learners for this
              digital age.{" "}
            </p>
            <p>
              Government agencies and business sectors are given more
              chances of working together to make online learning available
              for all.{" "}
            </p>
            <p>
              Accessibility of information is at an all-time high.
              Adaptability to changing norms and standards is the price tag
              we must be prepared to pay if learning is to thrive and if the
              youth of today is to be future-ready.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-secondary text-center"
                style={{width: '150px'}}
                onClick={handleClose}
              >
                Close
              </button>
            </div> 
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default BlogsPage;
