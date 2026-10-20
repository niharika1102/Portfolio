import {
  aws,
  bootstrap,
  chitkaraGroceryStore,
  // css,
  docker,
  express,
  figma,
  git,
  github,
  // html,
  java,
  js,
  kubernetes,
  mongodb,
  movieland,
  mysql,
  node,
  // postman,
  react,
  tailwind,
  ubuntu,
  yelpCamp,
  // dart,
  jobify,
  python,
  gcloud,
  typescript,
  // New imports
  fastapi,
  gemini,
  claude,
  openai,
  springboot,
  azure,
  keycloak,
  postgres,
  chromadb,
  firebase,
} from "../src/assets/images";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "projects", label: "Projects" },
  { to: "toolsAndTechnologies", label: "Tools and Technologies" },
  { to: "about-me", label: "About Me" },
];

export const projects = [
  {
    title: "Document Chatter",
    description: "A RAG application that lets you upload PDFs and ask questions about them. Documents are extracted, chunked, embedded, and stored in ChromaDB, then Gemini answers using only the most relevant retrieved context.",
    githubLink: "https://github.com/niharika1102/document-chat",
    // No preview image
    skills: [
      "Python",
      "FastAPI",
      "RAG",
      "ChromaDB",
      "Gemini",
      "Sentence Transformers",
    ],
  },
  {
    title: "AI Support Agent",
    description: "A customer-support agent that dynamically chooses between calculator and FAQ tools. Implemented first with the Gemini SDK, then with LangChain, to show how tool calling and agent loops actually work.",
    githubLink: "https://github.com/niharika1102/ai-support-agent",
    // No preview image
    skills: [
      "Python",
      "LangChain",
      "Gemini",
      "Tool Calling",
      "Agents",
    ],
  },
  {
    title: "Text Classifier",
    description: "Classifies customer support messages using few-shot prompting, structured Gemini output, and self-consistency with majority vote. Built with FastAPI, LangChain, and Pydantic.",
    githubLink: "https://github.com/niharika1102/text-classifier",
    // No preview image
    skills: [
      "Python",
      "FastAPI",
      "LangChain",
      "Gemini",
      "Few-shot Prompting",
      "Pydantic",
    ],
  },
];

export const tools = [
  { src: react, alt: "React" },
  { src: typescript, alt: "Typescript" },
  { src: python, alt: "Python" },
  { src: git, alt: "Git" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: gcloud, alt: "Google Cloud" },
  { src: aws, alt: "AWS" },
  { src: docker, alt: "Docker" },
  { src: figma, alt: "Figma" },
  { src: mongodb, alt: "MongoDB" },
  { src: express, alt: "Express.js" },
  { src: node, alt: "Node.js" },
  // { src: postman, alt: "Postman" },
  { src: java, alt: "Java" },
  { src: github, alt: "Github" },
  { src: kubernetes, alt: "Kubernetes" },
  { src: mysql, alt: "MySQL" },
  // { src: html, alt: "HTML" },
  // { src: css, alt: "CSS" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: js, alt: "JavaScript" },
  { src: ubuntu, alt: "Ubuntu" },
  // New tools
  { src: fastapi, alt: "FastAPI" },
  { src: gemini, alt: "Gemini" },
  { src: claude, alt: "Claude" },
  { src: openai, alt: "OpenAI" },
  { src: springboot, alt: "SpringBoot" },
  { src: azure, alt: "Azure" },
  { src: keycloak, alt: "Keycloak" },
  { src: postgres, alt: "Postgres SQL" },
  { src: chromadb, alt: "Chroma DB" },
  { src: firebase, alt: "Firebase" },
];

export const timelineEvents = [
  {
    date: "2025 - Present",
    description: "Software Developer at Cognida.ai",
  },
  {
    date: "2021 - 2025",
    description: "Completed BE CSE from Chitkara University, Rajpura. (CGPA: 9.23)",
  },
  {
    date: "2021",
    description:
      "Completed 12th std. from MRA Sr. Sec. Model School, Chandigarh with a score of 96%.",
  },
  {
    date: "2019",
    description:
      "Completed 10th std. from Sacred Heart Convent Sr. Sec. School, Chandigarh with a 93.8%.",
  },
];