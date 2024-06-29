import { aws, bootstrap, chitkaraGroceryStore, css, docker, express, figma, git, github, html, java, js, mongodb, movieland, mysql, nike, node, postman, react, tailwind, ubuntu, yelpCamp } from "../src/assets/images";

export const navLinks = [
    {to: "", label: "Home"},
    { to: "projects", label: "Projects" },
    { to: "tools-and-technologies", label: "Tools and Technologies" },
    { to: "about-me", label: "About Me" },
];

export const projects = [
    {
      title: 'YelpCamp',
      description: 'YelpCamp is a website where users can create and review campgrounds. This project was created using MERN stack and Bootstrap. Passport.js was used to handle authentication.',
      githubLink: 'https://github.com/niharika1102/YelpCamp',
      demoLink: 'https://yelpcamp-oldf.onrender.com/',
      projectImage: yelpCamp,
      skills: ['MERN Stack', 'MongoDB', 'Express', 'Node.js', 'Bootstrap', 'Passport.js', 'Cloudinary', 'Mapbox API']
    },
    {
      title: 'Nike Landing Page',
      description: 'Discover stylish Nike arrivals quality comfort and innovation for your active life. It has been created using React.js and Tailwind CSS.',
      githubLink: 'https://github.com/niharika1102/nike', // Replace with actual link
      demoLink: 'https://6661c75ff5a46808fb56baa6--nike-v1-react.netlify.app/',
      projectImage: nike,
      skills: ['React', 'Tailwind CSS']
    },
    {
      title: 'Chitkara Grocery Store',
      description: 'A website for grocery shopping made using HTML, CSS and JavaScript. It has uniform font families and color palette throughout.',
      githubLink: 'https://github.com/niharika1102/Chitkara-Grocery-Store', // Replace with actual link
      projectImage: chitkaraGroceryStore,
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'MovieLand',
      description: 'MovieLand is a website that helps a user to get information about a web series or a movie like its poster and its release year simply by searching with the title of the movie or the web series. It has been created using React.js and Tailwind CSS and OMDb API.',
      githubLink: 'https://github.com/niharika1102/movie-app', // Replace with actual link
      demoLink: 'https://main--golden-salmiakki-131c76.netlify.app/',
      projectImage: movieland,
      skills: ['React', 'Tailwind CSS', 'OMDb API']
    }
  ];

export const tools = [
    { src: mongodb, alt: "MongoDB" },
    { src: express, alt: "Express.js" },
    { src: react, alt: "React.js" },
    { src: node, alt: "Node.js" },
    { src: postman, alt: "Postman" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: java, alt: "Java" },
    { src: git, alt: "Git" },
    { src: github, alt: "Github" },
    { src: aws, alt: "AWS" },
    { src: docker, alt: "Docker" },
    { src: mysql, alt: "MySQL" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: js, alt: "JavaScript" },
    { src: figma, alt: "Figma" },
    { src: ubuntu, alt: "Ubuntu" },
];