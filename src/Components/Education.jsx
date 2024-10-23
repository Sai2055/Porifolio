import React from "react";

const Education = () => {
  return (
    <div className="portfolio-container">
      {/* Education Section */}
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

export default Education;
