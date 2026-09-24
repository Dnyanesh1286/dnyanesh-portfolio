"use client";


import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Enterprise Solutions" },
  { value: 200, suffix: "+", label: "Users Supported" },
  { value: 30, suffix: "%", label: "Manual Effort Reduced" },
];

const skills = [
  {
    title: "Power Platform",
    items: ["Power Apps", "Power Automate", "Dataverse", "Power Fx"],
  },
  {
    title: "Microsoft 365",
    items: ["SharePoint", "Teams", "Microsoft 365", "Azure AD"],
  },
  {
    title: ".NET & Backend",
    items: ["C#", "ASP.NET MVC", "ASP.NET Core", "ADO.NET"],
  },
  {
    title: "Database & Web",
    items: ["SQL Server", "HTML", "CSS", "JavaScript", "jQuery"],
  },
];

const projects = [
  {
    number: "01",
    title: "SharePoint Document Management System",
    description:
      "Enterprise DMS with folder-level permissions, role-based access, document management and automated workflows.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "sharepoint-dms",
  },
  {
    number: "02",
    title: "Office Asset Management System",
    description:
      "Full-stack asset lifecycle management covering assignment, transfer, return, maintenance, audit history and disposal.",
    tags: [".NET", "React", "SQL Server"],
    slug: "oams",
  },
  {
    number: "03",
    title: "Petty Cash Management",
    description:
      "Microsoft 365 solution for petty cash advances, reimbursements, approvals, notifications and process tracking.",
    tags: ["Power Apps", "SharePoint", "Power Automate"],
    slug: "petty-cash-management",
  },
  {
    number: "04",
    title: "Conference Room Booking",
    description:
      "Room and resource booking application with availability tracking, reservations, reminders and notifications.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "conference-room-booking",
  },
  {
    number: "05",
    title: "AI Chatbot Application",
    description:
      "Azure-based conversational AI application designed for real-time interaction and automated support.",
    tags: ["Azure", "AI", ".NET"],
    slug: "ai-chatbot",
  },
  {
    number: "06",
    title: "IT Ticketing Portal",
    description:
      "IT support portal for ticket creation, assignment, status tracking and automated updates.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "ticketing-portal",
  },
  {
    number: "07",
    title: "Sales Enquiry & Lead Management",
    description:
      "Lead capture and assignment solution with automated email workflows and sales tracking.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "sales-lead-management",
  },
  {
    number: "08",
    title: "Asset Tracking & Maintenance",
    description:
      "QR-based asset tracking solution with maintenance alerts and lifecycle management.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "asset-tracking-maintenance",
  },
  {
    number: "09",
    title: "Travel & Expense Management",
    description:
      "Travel request and expense claim application with multi-level approvals and reimbursement workflows.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "travel-expense-management",
  },
  {
    number: "10",
    title: "HR Onboarding & Employee Portal",
    description:
      "Employee portal for onboarding documents, policy acknowledgement and task tracking.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "hr-onboarding",
  },
  {
    number: "11",
    title: "Document Approval Workflow",
    description:
      "Document approval system with version control, audit tracking and automated notifications.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "document-approval",
  },
  {
    number: "12",
    title: "CPT Tracker",
    description:
      "Power Platform business application for centralized CPT tracking and process management.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "cpt-tracker",
  },
  {
    number: "13",
    title: "Rieco Sales Funnel",
    description:
      "Sales funnel and lead generation application for managing enquiries, leads and sales activities.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "rieco-sales-funnel",
  },
  {
    number: "14",
    title: "License Renewal Reminder",
    description:
      "Automated renewal tracking and notification solution for managing license expiry dates.",
    tags: ["Power Automate", "SharePoint", "Microsoft 365"],
    slug: "license-renewal",
  },
  {
    number: "15",
    title: "Admin Panel & Dashboard",
    description:
      "Administrative interface for application management, record handling, access control and business visibility.",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    slug: "admin-dashboard",
  },
];

export default function Home() {
  const [visibleStats, setVisibleStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const duration = 900;
      const steps = 30;
      const increment = stat.value / steps;

      return window.setInterval(() => {
        setVisibleStats((current) => {
          const next = [...current];

          next[index] = Math.min(
            stat.value,
            next[index] + increment
          );

          return next;
        });
      }, duration / steps);
    });

    return () => {
      intervals.forEach((interval) =>
        window.clearInterval(interval)
      );
    };
  }, []);

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-content">
          <Link href="/" className="logo">
            Dnyanesh<span>.</span>
          </Link>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-label">
                POWER PLATFORM DEVELOPER
              </p>

              <h1>
                Hi, I&apos;m <span>Dnyanesh Patil</span>
              </h1>

              <h2>
                Power Platform Developer &amp; .NET Developer
              </h2>

              <p className="hero-description">
                I build scalable business applications,
                automate workflows and develop enterprise
                solutions using Microsoft Power Platform,
                SharePoint and .NET.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn primary">
                  View Projects
                </a>

                <a href="#contact" className="btn secondary">
                  Let&apos;s Connect
                </a>
              </div>

              <div className="hero-tech">
                <span>Power Apps</span>
                <span>Power Automate</span>
                <span>SharePoint</span>
                <span>Dataverse</span>
                <span>C#</span>
                <span>ASP.NET</span>
              </div>
            </div>

            {/* PHOTO */}
            <div className="profile-wrapper">
              <div className="profile-frame">
                <img
                     src="/profile.jpg"
                     alt="Dnyanesh Patil"
                     className="profile-image"
                    />
              </div>

              <div className="profile-caption">
                <strong>PL-400 Certified</strong>
                <span>Power Platform Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={stat.label}>
                <strong>
                  {Math.round(visibleStats[index])}
                  {stat.suffix}
                </strong>

                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Building business solutions that solve real problems.
          </h2>

          <p className="section-text">
            I am a Power Platform Developer and Full Stack
            .NET Developer with 4+ years of professional
            experience. My work focuses on building business
            applications, automating operational processes
            and developing scalable enterprise solutions.
          </p>

          <p className="section-text">
            I work primarily with Power Apps, Power Automate,
            SharePoint, Dataverse, C#, ASP.NET and SQL Server.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section dark-section">
        <div className="container">
          <p className="section-label">SKILLS</p>

          <h2 className="section-title">
            Technologies I work with
          </h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>

                <div className="tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">PROJECTS</p>

          <h2 className="section-title">
            Selected projects
          </h2>

          <p className="section-text">
            Enterprise applications, automation solutions
            and full-stack systems I have worked on.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.slug}
              >
                <span>{project.number}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="project-link"
                >
                  View Details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="section dark-section"
      >
        <div className="container">
          <p className="section-label">EXPERIENCE</p>

          <h2 className="section-title">
            Professional experience
          </h2>

          <div className="experience-card">
            <h3>Associate Software Developer</h3>

            <p className="company">
              Genie Infotech Pvt. Ltd.
            </p>

            <p className="date">
              Feb 2024 – Present
            </p>

            <p className="section-text">
              Developing enterprise Power Platform solutions,
              Power Apps applications, Power Automate workflows,
              SharePoint solutions, dashboards and integrations.
            </p>
          </div>

          <div className="experience-card">
            <h3>Full Stack Developer</h3>

            <p className="company">
              Stark Technology and Staffing Solution
            </p>

            <p className="date">
              Jan 2022 – Jan 2024
            </p>

            <p className="section-text">
              Worked on ASP.NET MVC applications, C#, SQL Server,
              HTML, CSS and JavaScript with focus on backend
              development, database operations and application
              maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="section">
        <div className="container">
          <p className="section-label">CERTIFICATION</p>

          <h2 className="section-title">
            Microsoft Certified
          </h2>

          <div className="experience-card">
            <h3>
              Microsoft Certified: Power Platform Developer
              Associate
            </h3>

            <p className="company">PL-400</p>

            <p className="section-text">
              Microsoft certification focused on developing
              solutions using Power Platform technologies.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="section dark-section"
      >
        <div className="container">
          <p className="section-label">EDUCATION</p>

          <h2 className="section-title">
            Academic background
          </h2>

          <div className="education-card">
            <div>
              <span className="education-year">
                2018 – 2021
              </span>

              <h3>Bachelor of Computer Applications</h3>

              <p>
                Adarsh College, Vita
              </p>
            </div>

            <div className="education-mark">
              BCA
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="section contact-section"
      >
        <div className="container">
          <p className="section-label">CONTACT</p>

          <h2 className="section-title">
            Let&apos;s build something useful.
          </h2>

          <p className="section-text">
            Open to discussing Power Platform, application
            development and software engineering opportunities.
          </p>

          <a
            href="mailto:dnyaneshpatil1414@gmail.com"
            className="btn primary"
          >
            Email Me
          </a>

          <div className="social-links">
            <a
              href="https://github.com/Dnyanesh1286"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/dnyaneshbabasopatil"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:dnyaneshpatil1414@gmail.com">
              Email
            </a>
            <div className="contact-item">
           
           <a href="tel:+919370533703">
            +91 93705 33703
          </a>
          </div>
          </div>
        </div>
      </section>

      <footer>
        © 2026 Dnyanesh Patil. All rights reserved.
      </footer>
    </main>
  );
}