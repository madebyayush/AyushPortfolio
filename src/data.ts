import phishguardImg from './assets/PhishGuard.jpg';
import agentOpsImg from './assets/AgentOps.jpg';
import chatzyImg from './assets/Chatzy.png';

export const CV_DATA = {
  personal: {
    name: "Ayush Anand",
    role: "AI/ML Engineer Intern | Agentic AI & Cloud Orchestration",
    email: "anandayush1205@gmail.com",
    phone: "+91 8105061205",
    linkedin: "linkedin.com/in/ayushanand-1264032b2",
    github: "github.com/madebyayush"
  },
  skills: {
    "AI/ML & Agentic Systems": ["LLMs", "Agentic AI (Planning, Reflection, ReAct)", "Multi-Agent Systems (MAS)", "RAG", "VectorDB (Pinecone)", "Generative AI"],
    "Infrastructure & DevOps": ["AWS (EC2, S3, Lambda, Elastic Beanstalk, ECR, API Gateway)", "Azure", "GCP", "Docker", "Kubernetes", "OpenShift", "CI/CD"],
    "Big Data & Security": ["Apache Spark", "Hadoop", "Kafka (basics)", "Network Security", "Cybersecurity", "IAM"],
    "Full-Stack Development": ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C++", "SQL", "HTML/CSS", "React.js", "Node.js", "Express.js", "FastAPI", "REST APIs"],
    "Databases & Blockchain": ["MongoDB", "MongoDB Atlas", "DBMS", "Solidity", "Ethereum", "Smart Contracts"],
    "Core CS": ["Data Structures & Algorithms (DSA)", "Object Oriented Programming (OOPS)", "Operating Systems (OS)"]
  },
  experience: [
    {
      company: "IDBI Bank",
      title: "Software Development Intern",
      period: "Dec 2023 – Feb 2024",
      points: [
        "Architected an AI-powered chatbot using NLP and Machine Learning to automate intent recognition and text preprocessing for secure banking domain data.",
        "Engineered an end-to-end AI pipeline with deterministic workflows, ensuring high-accuracy tokenization and real-time user interaction.",
        "Optimized banking operations by training ML models on domain-specific datasets, implementing data governance and security guardrails."
      ]
    }
  ],
  projects: [
    {
      id: "agentops",
      title: "AgentOps",
      subtitle: "Agentic AI for Autonomous Operations",
      description: "Developing an AI orchestration layer utilizing Multi-Agent Systems (MAS) and ReAct patterns to automate enterprise operations autonomously. Implemented core agentic patterns including planning, reflection, and long-term memory management using Vector Databases (Pinecone). Integrated Tool Use and Function Calling capabilities, enabling agents to execute scripts with Human-in-the-Loop (HITL) checkpoints.",
      link: "https://www.github.com/madebyayush/AgentOps",
      image: agentOpsImg // Abstract AI tech visual
    },
    {
      id: "chatzy",
      title: "Chatzy",
      subtitle: "Real-Time Chat Application",
      description: "Built a full-stack real-time messaging platform featuring WebSocket-based live chat, JWT authentication, and a secure admin control panel. Managed database operations using MongoDB Atlas to handle persistent messaging and user data with high availability.",
      link: "github.com/madebyayush/Chatzy",
      image: chatzyImg // Network/connection visual
    },
    {
      id: "phishguard",
      title: "PhishGuard",
      subtitle: "Real-Time URL Detection System",
      description: "Built a production-oriented phishing detection system achieving 96.65% classification accuracy with sub-150ms inference latency using Random Forest models and serverless AWS infrastructure. Improved phishing detection reliability with 98.13% recall. Architected scalable event-driven threat reporting pipelines using FastAPI, AWS Lambda, S3 and SES.",
      link: "github.com/madebyayush/PhishGuard",
      image: phishguardImg // Security/Cyber visual
    },
    {
      id: "uniportal",
      title: "University Portal",
      subtitle: "Role-Based Academic Tool",
      description: "Secure MERN Architecture: Built a role-based portal with passwordless OTP logins and encrypted admin operations. Academic Management: Featured dynamic batch-year enrollment and mass attendance tools with a minimalist aesthetic.",
      link: "github.com/madebyayush/University-Portal",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" // Code/Portal visual
    },
    {
      id: "airpodsmax",
      title: "Airpods Max",
      subtitle: "Interactive Smooth Frontend",
      description: "Premium Frontend: Developed an Apple-inspired product showcase using HTML, CSS, and TypeScript. Immersive UX: Implemented smooth animations and responsive layouts with a clean, minimalist aesthetic.",
      link: "https://airpods-max-ecru.vercel.app/",
      image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2000&auto=format&fit=crop" // Headphones visual
    }
  ],
  education: {
    institution: "RV University, Bangalore",
    degree: "B.Tech – Computer Science (Hons.)",
    period: "2023 – 2027"
  },
  certifications: [
    "Cybersecurity and Networking Fundamentals (Apr 2024)",
    "Enterprise Security: Artificial Intelligence, Generative AI, & Cybersecurity (Jul 2024)",
    "Infosys Certified Cybersecurity and Networking Fundamentals (Jul 2024)",
    "Infosys Certified Enterprise Security: Artificial Intelligence, Generative AI, & Cybersecurity (Jul 2024)",
    "Generative AI in Action (Jul 2024)",
    "Spark Fundamentals I (Jan 2025)",
    "Big Data Foundations - Level 1 (Feb 2025)",
    "Hadoop 101 (Feb 2025)",
    "Big Data 101 (Feb 2025)",
    "IBM: Introduction to Containers, Kubernetes, and OpenShift V2 (Mar 2025)",
    "ELITE Top 5%: NPTEL Affective Computing (IIT Madras) – Score: 94/100 (2026)",
    "AWS Solutions Architecture (2026)",
    "Cisco Introduction to Data Science (Feb 2026)",
    "Cisco Exploring Networking with Cisco Packet Tracer (Feb 2026)",
    "IBM Network Security (ALM-COURSE_4058892) (Feb 2026)",
    "AWS Cloud Practitioner Essentials (Feb 2026)",
    "Cisco Data Analytics Essentials (Feb 2026)"
  ],
  trainingSimulations: [
    {
      title: "AWS - Solutions Architecture Job Simulation",
      period: "2026",
      description: "Designed a scalable AWS Elastic Beanstalk architecture for a high-growth client dealing with slow response times then translated the technical proposal into plain language so the client could understand the setup and cost structure without needing a cloud background."
    },
    {
      title: "BCG - GenAI Job Simulation",
      period: "2026",
      description: "BCGx Chatbot\n\nBuilt an AI-powered financial chatbot for a simulated BCG consulting project — extracted 10-K data for Microsoft, Apple & Tesla, analyzed 3-year trends using Python/pandas, and developed a rule-based NLP chatbot mapping financial queries to real SEC-sourced insights."
    }
  ]
};
