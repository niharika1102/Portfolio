import { chitkaraGroceryStore, movieland, nike, yelpCamp } from "../src/assets/images";

export const navLinks = [
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
    },
    {
        title: 'Chitkara Grocery Store',
        description: 'Discover stylish Nike arrivals quality comfort and innovation for your active life. It has been created using React.js and Tailwind CSS.',
        githubLink: 'https://github.com/niharika1102/nike', // Replace with actual link
        demoLink: 'https://6661c75ff5a46808fb56baa6--nike-v1-react.netlify.app/',
        projectImage: nike,
    },
    {
      title: 'Chitkara Grocery Store',
      description: 'A website for grocery shopping made using HTML, CSS and JavaScript. It has uniform font families and color pallete throughout.',
      githubLink: 'https://github.com/niharika1102/Chitkara-Grocery-Store', // Replace with actual link
      projectImage: chitkaraGroceryStore,
    },
    {
        title: 'MovieLand',
        description: 'MovieLand is a website that helps a user to get information about a web series or a movie like its poster and its release year simply by searching with the title of the movie or the web series. It has been created using React.js and Tailwind CSS and OMDb API.',
        githubLink: 'https://github.com/niharika1102/movie-app', // Replace with actual link
        demoLink: 'https://main--golden-salmiakki-131c76.netlify.app/',
        projectImage: movieland,
    },
  ];