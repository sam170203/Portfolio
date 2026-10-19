export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  contribution: string;
  outcome: string;
  stack: string[];
  repository?: string;
  live?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const profile = {
  name: "Saksham Mudgal Sharma",
  shortName: "Saksham",
  role: "Software Engineer building data platforms and applied AI systems.",
  intro:
    "I turn complex data and AI workflows into reliable software—across metadata automation, backend services, and product-facing developer tools.",
  email: "mudgalksaksham@gmail.com",
  location: "New Delhi, India",
};

export const projects: Project[] = [
  {
    name: "CodeArena",
    eyebrow: "Real-time competitive programming platform",
    description:
      "A collaborative competitive-programming environment with live matchmaking, ratings, quests, replays, and Codeforces verdict synchronization.",
    contribution:
      "In a three-member team, I built FastAPI services, PostgreSQL schemas, and real-time workflows across matchmaking, ratings, and state management.",
    outcome: "25+ REST APIs and 3 WebSocket channels, serving 2,000+ users.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "TypeScript", "WebSockets"],
    live: "https://code-arena-2026-test.vercel.app/",
  },
  {
    name: "GenAI Nexus",
    eyebrow: "Multi-persona RAG assistant",
    description:
      "A full-stack assistant that makes uploaded documents searchable through semantic retrieval and specialized AI personas.",
    contribution:
      "Designed the React and FastAPI workflow for document upload, chunking, embedding generation, and vector similarity search.",
    outcome: "Four specialized personas and a document-grounded workflow serving 1,200+ users.",
    stack: ["React", "FastAPI", "OpenAI API", "RAG", "Python"],
    repository: "https://github.com/sam170203/genai-chatbot",
  },
  {
    name: "Transformer From Scratch",
    eyebrow: "Decoder-only language model implementation",
    description:
      "A from-first-principles exploration of the components that make autoregressive text generation work.",
    contribution:
      "Implemented tokenization, embeddings, masked multi-head attention, feed-forward layers, normalization, training, checkpointing, and temperature-sampled inference.",
    outcome: "A modular learning project demonstrating modern LLM fundamentals beyond API integration.",
    stack: ["PyTorch", "NumPy", "Python", "Transformers"],
    repository: "https://github.com/sam170203/Implementing-Transformer-from-scratch",
  },
];

export const experience: Experience[] = [
  {
    company: "NCR Atleos",
    role: "Software Engineer, Data Platform Engineering",
    period: "March 2026 — Present",
    location: "Gurugram, India",
    summary:
      "Building automation that makes enterprise data systems easier to understand and migrate across platforms.",
    highlights: [
      "Engineered AI-assisted metadata automation for DataLake-360, generating documentation across 616 views and 34,000+ Azure Data Lake tables.",
      "Designed and deployed a SQL transpilation workflow from Microsoft Fabric T-SQL to Databricks SQL using preprocessing, transpilation, and postprocessing stages.",
    ],
    technologies: ["Azure Data Lake", "Microsoft Fabric", "Databricks", "SQL", "Metadata automation"],
  },
  {
    company: "TCS Research",
    role: "AI Developer",
    period: "May 2025 — July 2025",
    location: "Gurugram, India",
    summary:
      "Worked on retrieval-augmented AI workflows for technical knowledge discovery and structured assistant experiences.",
    highlights: [
      "Built a FastAPI document-retrieval chatbot over HPC documentation using OpenAI embeddings, vector retrieval, and prompt-engineered answers.",
      "Developed GenAI Nexus, a multi-persona assistant with a React frontend and FastAPI backend.",
    ],
    technologies: ["FastAPI", "OpenAI embeddings", "RAG", "React", "Python"],
  },
];

export const skills = [
  {
    title: "Data platforms",
    detail: "Metadata automation, SQL transpilation, Azure Data Lake, Microsoft Fabric, Databricks",
  },
  {
    title: "Backend systems",
    detail: "Python, FastAPI, REST APIs, WebSockets, PostgreSQL, SQLAlchemy",
  },
  {
    title: "Applied AI",
    detail: "RAG, embeddings, OpenAI API, PyTorch, Transformers, vector retrieval",
  },
  {
    title: "Product engineering",
    detail: "React, Next.js, TypeScript, Tailwind CSS, Docker, Git",
  },
];

export const externalLinks = {
  github: "https://github.com/sam170203",
  linkedin: "https://www.linkedin.com/in/saksham-mudgal-0670ab296/",
  codeforces: "https://codeforces.com/profile/mudgalsaksham",
  leetcode: "https://leetcode.com/u/sakshammudgal17/",
};
