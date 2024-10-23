import React from "react";

const Profile = () => {
  return (
    <div className="portfolio-container">
      {/* Current Role */}
      <section className="section">
        <h2>Current Role</h2>
        <p>
          <strong>
            Software Engineer – Maveric Systems Limited (2024 - Present)
          </strong>
        </p>
        <ul>
          <li>
            <span className="highlight">Joined in 2024</span> as a Software
            Engineer, focusing on frontend development for cutting-edge web
            applications.
          </li>
          <li>
            Building{" "}
            <span className="highlight">
              responsive and interactive user interfaces
            </span>{" "}
            for enhanced web experiences.
          </li>
          <li>
            Collaborating with cross-functional teams to deliver
            high-performance web solutions using{" "}
            <span className="highlight">React</span> and other frontend
            technologies.
          </li>
        </ul>
      </section>

      {/* Previous Experience */}
      <section className="section">
        <h2>Previous Experience</h2>
        <p>
          <strong>Software Engineer – HCL Tech (2022 - 2024)</strong>
        </p>
        <ul>
          <li>
            Worked as a <span className="highlight">Frontend Developer</span> on
            the <span className="highlight">Ikano project</span>, a Sweden-based
            revenue prediction tool for client purposes.
          </li>
          <li>
            Contributed to the{" "}
            <span className="highlight">promotional calendar feature</span>,
            enabling clients to generate marketing schedules for their in-house
            products.
          </li>
          <li>
            Developed responsive and intuitive UI using{" "}
            <span className="highlight">React</span>, enhancing the user
            experience and delivering a polished interface.
          </li>
          <li>
            Collaborated with backend teams to integrate data and improve
            revenue forecasting accuracy.
          </li>
          <li>
            <span className="highlight">Led UI/UX design efforts</span> to make
            the application both functional and visually appealing.
          </li>
          <li>
            Engaged in client meetings, gathering feedback to optimize the
            tool’s functionality based on client requirements.
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>
        <p>
          <strong>Bachelor of Technology (B.Tech) in Computer Science</strong>
          <br />
          Visvodaya Engineering College, Kavali, AP (Graduated in 2022) –{" "}
          <strong>72%</strong>
        </p>
        <ul>
          <li>
            <span className="highlight">
              Solid foundation in full-stack development
            </span>
            , with a passion for frontend technologies.
          </li>
          <li>
            Actively participated in coding challenges, hackathons, and
            project-based learning.
          </li>
        </ul>

        <p>
          <strong>Intermediate</strong>
          <br />
          SBN Junior College, AP (2018) – <strong>93.1%</strong>
        </p>

        <p>
          <strong>10th Grade</strong>
          <br />
          AP Model School, AP (2016) – <strong>92%</strong>
        </p>
      </section>
    </div>
  );
};

export default Profile;
