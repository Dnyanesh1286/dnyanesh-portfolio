import Link from "next/link";
import { notFound } from "next/navigation";

type Project = {
  title: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  technologies: string[];
  outcome: string;
};

const projects: Record<string, Project> = {
  "sharepoint-dms": {
    title: "SharePoint Document Management System",
    category: "Power Platform • SharePoint",
    description:
      "Enterprise document management solution with folder-level permissions, role-based access and automated workflows.",
    overview:
      "A SharePoint-based Document Management System designed to manage enterprise documents securely while providing controlled access based on organizational roles and folder-level permissions.",
    problem:
      "Different business units required controlled access to documents while maintaining a consistent permission structure and reducing manual permission management.",
    solution:
      "The solution uses SharePoint Online as the document repository, Power Apps for the application interface and Power Automate for workflow and automation. Permission mappings are managed based on the defined access matrix.",
    features: [
      "Folder-wise permission management",
      "Role-based access control",
      "Dynamic unit administrator selection",
      "Document management",
      "Approval and notification workflows",
      "Permission automation",
      "Audit-oriented access management",
    ],
    role:
      "Power Platform Developer responsible for application development, permission automation and workflow implementation.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint Online",
      "Microsoft 365",
    ],
    outcome:
      "Improved document security and reduced manual effort involved in managing folder-level permissions.",
  },

  "oams": {
    title: "Office Asset Management System",
    category: ".NET • React • SQL Server",
    description:
      "Enterprise asset lifecycle management system covering assignment, transfer, return, maintenance, audit and disposal.",
    overview:
      "OAMS is an enterprise asset management solution designed to manage the complete lifecycle of office assets.",
    problem:
      "Organizations need a structured way to track assets, assignments, transfers, maintenance activities, returns and historical changes.",
    solution:
      "The system provides an API-driven architecture with a .NET backend, React frontend and SQL Server database. Asset lifecycle operations are validated and recorded through asset history.",
    features: [
      "Asset registration and management",
      "Asset assignment",
      "Asset transfer",
      "Asset return",
      "Maintenance tracking",
      "Asset audit and audit details",
      "Asset history",
      "Asset documents",
      "Disposal management",
      "Search, filtering, sorting and paging",
      "Soft delete",
      "Lifecycle status validation",
    ],
    role:
      "Full Stack Developer working across the domain, application, API and frontend layers.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "React",
      "SQL Server",
      "REST API",
    ],
    outcome:
      "Provides a structured platform for managing assets throughout their lifecycle with traceable history and controlled status transitions.",
  },

  "petty-cash-management": {
    title: "Petty Cash Management",
    category: "Power Platform • Microsoft 365",
    description:
      "Business application for managing petty cash advances, reimbursements, approvals and notifications.",
    overview:
      "A Microsoft 365 based Petty Cash Management solution designed to digitize petty cash processes.",
    problem:
      "Manual petty cash processes can make tracking advances, reimbursements, approvals and employee information difficult.",
    solution:
      "The application uses a Power Apps Canvas App as the frontend, SharePoint Online as the application data backend and Power Automate for workflows, approvals, notifications and business logic.",
    features: [
      "Employee Master",
      "Department Master",
      "Expense Advance management",
      "Expense Reimbursement management",
      "Approval workflows",
      "Notifications",
      "Application dashboard",
      "Business process tracking",
    ],
    role:
      "Power Platform Developer responsible for application design, SharePoint data structure, Power Apps development and Power Automate workflows.",
    technologies: [
      "Power Apps Canvas",
      "Power Automate",
      "SharePoint Online",
      "Microsoft 365",
    ],
    outcome:
      "Digitizes the petty cash process and provides centralized tracking of advances, reimbursements and approvals.",
  },

  "conference-room-booking": {
    title: "Conference Room Booking Application",
    category: "Power Platform",
    description:
      "Room booking solution with availability tracking, automated notifications and workflow-based booking management.",
    overview:
      "A scalable conference room booking application designed to simplify room and resource reservations.",
    problem:
      "Users need a reliable way to check room availability and make reservations without conflicts.",
    solution:
      "The application manages rooms and resources through Power Apps and automates notifications and reminders using Power Automate.",
    features: [
      "Room availability tracking",
      "Room booking",
      "Resource management",
      "Booking details",
      "Role-based reservation handling",
      "Automated notifications",
      "Reminder workflows",
    ],
    role:
      "Power Apps Developer responsible for application development and automation workflows.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "WhatsApp API",
    ],
    outcome:
      "Provides a centralized booking experience and automates communication around reservations.",
  },

  "ai-chatbot": {
    title: "AI Chatbot Application",
    category: "Azure • AI • .NET",
    description:
      "Azure-based AI chatbot application designed for conversational interaction and automated support.",
    overview:
      "An Azure-based chatbot application focused on providing an intuitive conversational interface for users.",
    problem:
      "Users need a simple interface to interact with an automated support system and receive responses to their queries.",
    solution:
      "The application combines a web-based chat interface with conversational AI capabilities and Azure services.",
    features: [
      "Conversational chat interface",
      "Real-time user interaction",
      "Query handling",
      "Automated support experience",
      "Responsive web interface",
      "Azure-based deployment",
    ],
    role:
      "Developer involved in application development and implementation of the chatbot experience.",
    technologies: [
      "Azure",
      "Azure Static Web Apps",
      ".NET",
      "AI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    outcome:
      "Provides users with an interactive conversational interface for automated support.",
  },

  "ticketing-portal": {
    title: "IT Ticketing Portal",
    category: "Power Platform",
    description:
      "IT support ticketing solution for managing support requests, assignments and status updates.",
    overview:
      "A business application designed to centralize IT support requests and improve ticket tracking.",
    problem:
      "Support requests need structured assignment, status tracking and communication.",
    solution:
      "The portal provides a centralized interface for submitting and managing tickets while automating ticket assignment and status-related processes.",
    features: [
      "Ticket creation",
      "Ticket assignment",
      "Ticket status tracking",
      "Automated status updates",
      "Centralized support request management",
    ],
    role:
      "Power Platform Developer responsible for application and workflow implementation.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
    outcome:
      "Centralized IT support requests and improved visibility into ticket status.",
  },

  "sales-lead-management": {
    title: "Sales Enquiry & Lead Management System",
    category: "Power Platform",
    description:
      "Lead capture and assignment solution with automated email workflows and tracking.",
    overview:
      "A business application designed to capture sales enquiries and manage leads through assignment and follow-up processes.",
    problem:
      "Sales enquiries require structured capture, assignment and communication to avoid manual tracking.",
    solution:
      "The application provides lead capture, assignment logic and automated email workflows.",
    features: [
      "Lead capture",
      "Lead assignment",
      "Lead tracking",
      "Automated email notifications",
      "Follow-up workflow",
    ],
    role:
      "Power Platform Developer responsible for application development and workflow automation.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
    outcome:
      "Provides centralized lead tracking with automated assignment and communication.",
  },

  "asset-tracking-maintenance": {
    title: "Asset Tracking & Maintenance System",
    category: "Power Platform",
    description:
      "Asset tracking solution with QR-based identification, maintenance alerts and lifecycle tracking.",
    overview:
      "A business application designed to improve visibility into physical assets and their maintenance lifecycle.",
    problem:
      "Manual asset tracking can result in tracking errors and limited visibility into asset maintenance history.",
    solution:
      "The application uses QR-based asset tracking and automated maintenance alerts to support asset lifecycle management.",
    features: [
      "QR-based asset tracking",
      "Asset registration",
      "Asset lifecycle tracking",
      "Maintenance alerts",
      "Maintenance tracking",
    ],
    role:
      "Power Platform Developer involved in application and automation development.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "QR Codes",
    ],
    outcome:
      "Improved asset visibility and reduced manual tracking errors.",
  },

  "travel-expense-management": {
    title: "Travel & Expense Management System",
    category: "Power Platform",
    description:
      "Travel request and expense claim solution with multi-level approvals and reimbursement workflows.",
    overview:
      "A Power Platform application designed to manage employee travel requests and expense claims.",
    problem:
      "Travel and expense processes require multiple approvals and structured reimbursement tracking.",
    solution:
      "The application manages travel requests and expense claims while Power Automate handles multi-level approvals and reimbursement workflows.",
    features: [
      "Travel requests",
      "Expense claims",
      "Multi-level approvals",
      "Reimbursement workflow",
      "Automated notifications",
      "Expense tracking",
    ],
    role:
      "Power Platform Developer responsible for application and workflow development.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
    outcome:
      "Streamlined travel and expense processing with reported processing reduction of approximately 35%.",
  },

  "hr-onboarding": {
    title: "HR Onboarding & Employee Portal",
    category: "Power Platform • HR",
    description:
      "Employee portal for onboarding documents, policy acknowledgement and task tracking.",
    overview:
      "An employee-facing HR solution designed to centralize onboarding activities and employee information.",
    problem:
      "New employee onboarding involves multiple documents, policies and tasks that need to be tracked.",
    solution:
      "The portal provides document submission, policy acknowledgement and onboarding task tracking using SharePoint and Power Automate.",
    features: [
      "Employee onboarding",
      "Document submission",
      "Policy acknowledgement",
      "Task tracking",
      "Automated notifications",
      "Centralized employee portal",
    ],
    role:
      "Power Platform Developer responsible for application and workflow development.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
    outcome:
      "Centralized onboarding activities and improved visibility into employee onboarding tasks.",
  },

  "document-approval": {
    title: "Document Approval Workflow System",
    category: "Power Platform • SharePoint",
    description:
      "Document approval solution with version control, audit tracking and automated notifications.",
    overview:
      "A workflow-driven document approval system designed to automate document review and approval processes.",
    problem:
      "Document approvals require controlled review, status visibility and auditability.",
    solution:
      "The solution automates approval workflows and notifications while maintaining document versions and audit information.",
    features: [
      "Document submission",
      "Approval workflow",
      "Version control",
      "Approval status tracking",
      "Audit tracking",
      "Automated notifications",
    ],
    role:
      "Power Platform Developer responsible for workflow and application implementation.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
    outcome:
      "Provides a structured and traceable document approval process.",
  },

  "cpt-tracker": {
    title: "CPT Tracker",
    category: "Power Platform",
    description:
      "Business tracking application developed using the Microsoft Power Platform.",
    overview:
      "A Power Platform business application developed to support CPT-related tracking and process management.",
    problem:
      "Business tracking activities require a centralized application instead of manual process management.",
    solution:
      "The solution provides a Power Apps interface backed by business data and automation workflows.",
    features: [
      "Centralized tracking",
      "Business process management",
      "User-friendly Power Apps interface",
      "Workflow automation",
      "Status tracking",
    ],
    role:
      "Power Platform Developer responsible for application development and automation.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
    outcome:
      "Provides a centralized digital interface for CPT tracking activities.",
  },

  "rieco-sales-funnel": {
    title: "Rieco Sales Funnel / Lead Generation",
    category: "Power Platform",
    description:
      "Sales funnel and lead generation application for managing enquiries and sales processes.",
    overview:
      "A business application developed to support sales funnel and lead generation activities.",
    problem:
      "Sales teams need structured lead capture and visibility across the sales funnel.",
    solution:
      "The application provides a centralized interface for managing leads and sales funnel activities.",
    features: [
      "Lead generation",
      "Lead tracking",
      "Sales funnel management",
      "Lead assignment",
      "Process visibility",
    ],
    role:
      "Power Platform Developer responsible for application development.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
    outcome:
      "Centralized sales funnel and lead management experience.",
  },

  "license-renewal": {
    title: "License Renewal Reminder",
    category: "Power Platform • Automation",
    description:
      "Automated license renewal reminder solution for tracking renewal dates and sending notifications.",
    overview:
      "An automation solution designed to track license renewal dates and notify relevant users before expiry.",
    problem:
      "License expiry dates need to be monitored consistently to avoid missed renewal activities.",
    solution:
      "Power Automate workflows are used to evaluate renewal dates and send reminder notifications.",
    features: [
      "License renewal tracking",
      "Expiry date monitoring",
      "Automated reminders",
      "Notification workflow",
      "Renewal follow-up",
    ],
    role:
      "Power Platform Developer responsible for workflow automation.",
    technologies: [
      "Power Automate",
      "SharePoint",
      "Microsoft 365",
    ],
    outcome:
      "Automated renewal reminders and reduced dependency on manual follow-up.",
  },

  "admin-dashboard": {
    title: "Admin Panel & Dashboard",
    category: "Power Platform",
    description:
      "Administrative dashboard for managing application data, users, access and business information.",
    overview:
      "An administrative interface developed to provide centralized management and visibility for business applications.",
    problem:
      "Administrators require a centralized interface for managing records and monitoring application information.",
    solution:
      "The solution provides Power Apps screens for administration, management and dashboard-style visibility.",
    features: [
      "Administrative management",
      "Dashboard views",
      "Record management",
      "Role-based access",
      "Search and filtering",
      "Business data visibility",
    ],
    role:
      "Power Platform Developer responsible for application development and administration features.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
    outcome:
      "Provides administrators with a centralized interface for application management.",
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <Link href="/" className="logo">
            DP<span>.</span>
          </Link>

          <Link href="/#projects" className="back-link">
            ← Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="project-hero">
        <div className="container">
          <p className="section-label">{project.category}</p>

          <h1>{project.title}</h1>

          <p className="project-hero-description">
            {project.description}
          </p>

          <div className="project-tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container project-content-grid">
          <div>
            <p className="section-label">OVERVIEW</p>
            <h2 className="section-title">About the Project</h2>
          </div>

          <div>
            <p className="project-text">{project.overview}</p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section dark-section">
        <div className="container">
          <div className="project-two-column">
            <div className="project-info-card">
              <p className="section-label">THE CHALLENGE</p>
              <h2>The Problem</h2>
              <p>{project.problem}</p>
            </div>

            <div className="project-info-card">
              <p className="section-label">THE APPROACH</p>
              <h2>The Solution</h2>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <p className="section-label">KEY FEATURES</p>
          <h2 className="section-title">What the solution includes</h2>

          <div className="feature-grid">
            {project.features.map((feature, index) => (
              <div className="feature-card" key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role & Technology */}
      <section className="section dark-section">
        <div className="container project-two-column">
          <div>
            <p className="section-label">MY ROLE</p>
            <h2 className="section-title">What I worked on</h2>
            <p className="project-text">{project.role}</p>
          </div>

          <div>
            <p className="section-label">TECH STACK</p>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="section">
        <div className="container outcome-section">
          <p className="section-label">OUTCOME</p>
          <h2 className="section-title">Project Impact</h2>
          <p className="project-text">{project.outcome}</p>
        </div>
      </section>

      {/* Back */}
      <section className="project-footer">
        <div className="container">
          <Link href="/#projects" className="btn primary">
            ← Back to All Projects
          </Link>
        </div>
      </section>

      <footer>
        © 2026 Dnyanesh Patil. All rights reserved.
      </footer>
    </main>
  );
}