import {
  aws,
  bootstrap,
  chitkaraGroceryStore,
  css,
  docker,
  express,
  figma,
  git,
  github,
  html,
  java,
  js,
  kubernetes,
  mongodb,
  movieland,
  mysql,
  node,
  postman,
  react,
  tailwind,
  ubuntu,
  yelpCamp,
  dart,
  jobify,
} from "../src/assets/images";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "projects", label: "Projects" },
  { to: "toolsAndTechnologies", label: "Tools and Technologies" },
  { to: "about-me", label: "About Me" },
];

export const projects = [
  {
    title: "Jobify",
    description:
      "Land your dream job with ease using Jobify! Track applications, stay organized, and manage your profile—all in one sleek, hassle-free platform designed for job seekers.",
    githubLink: "https://github.com/niharika1102/Jobify",
    demoLink: "https://jobify-k86w.onrender.com/",
    projectImage: jobify,
    skills: [
      "MERN Stack",
      "React Query",
      "React Router",
      "Bcryptjs",
      "Cloudinary",
      "Mobile Responsive",
    ],
  },
  {
    title: "YelpCamp",
    description:
      "YelpCamp is a website where users can create and review campgrounds. This project was created using MERN stack and Bootstrap. Passport.js was used to handle authentication.",
    githubLink: "https://github.com/niharika1102/YelpCamp",
    demoLink: "https://yelpcamp-oldf.onrender.com/",
    projectImage: yelpCamp,
    skills: [
      "MERN Stack",
      "MongoDB",
      "Express",
      "Node.js",
      "Bootstrap",
      "Passport.js",
      "Cloudinary",
      "Mapbox API",
      "Mobile Responsive",
    ],
  },
  {
    title: "Chitkara Grocery Store",
    description:
      "A website for grocery shopping made using HTML, CSS and JavaScript. It has uniform font families and color palette throughout.",
    githubLink: "https://github.com/niharika1102/Chitkara-Grocery-Store", // Replace with actual link
    projectImage: chitkaraGroceryStore,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "MovieLand",
    description:
      "MovieLand is a website that helps a user to get information about a web series or a movie like its poster and its release year simply by searching with the title of the movie or the web series. It has been created using React.js and Tailwind CSS and OMDb API.",
    githubLink: "https://github.com/niharika1102/movie-app", // Replace with actual link
    demoLink: "https://main--golden-salmiakki-131c76.netlify.app/",
    projectImage: movieland,
    skills: ["React", "Tailwind CSS", "OMDb API", "Mobile Responsive"],
  },
];

export const tools = [
  { src: mongodb, alt: "MongoDB" },
  { src: express, alt: "Express.js" },
  { src: react, alt: "React.js" },
  { src: node, alt: "Node.js" },
  { src: java, alt: "Java" },
  { src: git, alt: "Git" },
  { src: github, alt: "Github" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: dart, alt: "Dart" },
  { src: aws, alt: "AWS" },
  { src: docker, alt: "Docker" },
  { src: kubernetes, alt: "Kubernetes" },
  { src: postman, alt: "Postman" },
  { src: mysql, alt: "MySQL" },
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: js, alt: "JavaScript" },
  { src: figma, alt: "Figma" },
  { src: ubuntu, alt: "Ubuntu" },
];

export const timelineEvents = [
  {
    date: "2021 - Present",
    description: "Pursuing BE CSE from Chitkara University, Rajpura.",
  },
  {
    date: "2021",
    description:
      "Completed 12th std. from MRA Sr. Sec. Model School, Chandigarh with a score of 96%.",
  },
  {
    date: "2019",
    description:
      "Completed 10th std. from Sacred Heart Convent Sr. Sec. School, Chandigarh with a score of 93.8%.",
  },
];
