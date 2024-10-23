import React from "react";

const Projects = () => {
  return (
    <div className="portfolio-container">
      {/* Ikano Project */}
      <section className="section">
        <h2>Ikano Project</h2>
        <p>
          <strong>Frontend Developer – HCL Tech (2022 - 2024)</strong>
        </p>
        <ul>
          <li>
            Worked on the <span className="highlight">Ikano project</span>, a
            Sweden-based tool designed to predict revenue for specific products,
            aimed at internal client purposes.
          </li>
          <li>
            Developed the{" "}
            <span className="highlight">promotional calendar feature</span>,
            allowing clients to generate marketing schedules for their own
            products.
          </li>
          <li>
            Built a responsive and intuitive UI using{" "}
            <span className="highlight">React</span>, significantly improving
            the user experience.
          </li>
          <li>
            Collaborated closely with backend teams to ensure smooth data
            integration for accurate revenue forecasting.
          </li>
          <li>
            Played a key role in <span className="highlight">UI/UX design</span>{" "}
            to enhance the application’s visual appeal and functionality.
          </li>
        </ul>
      </section>

      {/* Citi Nam Project */}
      <section className="section">
        <h2>Citi Nam Project</h2>
        <p>
          <strong>Frontend Developer – Maveric Systems (2023)</strong>
        </p>
        <ul>
          <li>
            Worked on the <span className="highlight">Citi Nam project</span>, a
            North America-based application for Citi Bank, focusing on account
            creation.
          </li>
          <li>
            Developed a streamlined and responsive account creation interface,
            enhancing user experience for Citi’s clients.
          </li>
          <li>
            Utilized <span className="highlight">React</span> to create dynamic
            components and improve the application’s performance and
            scalability.
          </li>
          <li>
            Worked closely with design and backend teams to ensure the seamless
            integration of APIs and a polished frontend.
          </li>
          <li>
            Prioritized <span className="highlight">accessibility</span> and{" "}
            <span className="highlight">cross-browser compatibility</span> to
            deliver a consistent experience across different platforms.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
