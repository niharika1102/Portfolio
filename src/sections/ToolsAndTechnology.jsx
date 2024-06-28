// import React from 'react';

// // Import your images here
// // import htmlIcon from '../assets/icons/html5.svg';
// // import cssIcon from '../assets/icons/css3.svg';
// // import jsIcon from '../assets/icons/javascript.svg';
// // import bootstrapIcon from '../assets/icons/bootstrap.svg';
// // import githubIcon from '../assets/icons/github.svg';
// // import gitIcon from '../assets/icons/git.svg';
// // import javaIcon from '../assets/icons/java.svg';
// // import canvaIcon from '../assets/icons/canva.svg';
// // import figmaIcon from '../assets/icons/figma.svg';
// // import vscodeIcon from '../assets/icons/vscode.svg';
// import { profile } from "../assets/images";

// const ToolsAndTechnologies = () => {
//   const tools = [
//     // { src: htmlIcon, alt: 'HTML5' },
//     // { src: cssIcon, alt: 'CSS3' },
//     // { src: jsIcon, alt: 'JavaScript' },
//     // { src: bootstrapIcon, alt: 'Bootstrap' },
//     // { src: githubIcon, alt: 'GitHub' },
//     // { src: gitIcon, alt: 'Git' },
//     // { src: javaIcon, alt: 'Java' },
//     // { src: canvaIcon, alt: 'Canva' },
//     // { src: figmaIcon, alt: 'Figma' },
//     // { src: vscodeIcon, alt: 'VSCode' },
//     { src: profile, alt: "Profile" },
//     { src: profile, alt: "Profile" },
//     { src: profile, alt: "Profile" },
//     { src: profile, alt: "Profile" },
//     { src: profile, alt: "Profile" },
//     { src: profile, alt: "Profile" },
//     { src: profile, alt: "Profile" },
//   ];

//   return (
//     <section className="py-12 px-4 md:px-10">
//       <h2 className="text-xl font-bold text-lGreen mb-8">Tools & Technologies</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//         {tools.map((tool, index) => (
//           <div key={index} className="flex justify-center items-center rounded-full bg-transparent border border-green-500 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto">
//             <img src={tool.src} alt={tool.alt} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ToolsAndTechnologies;



import React from 'react';

// Import your images here
// import htmlIcon from '../assets/icons/html5.svg';
// import cssIcon from '../assets/icons/css3.svg';
// import jsIcon from '../assets/icons/javascript.svg';
// import bootstrapIcon from '../assets/icons/bootstrap.svg';
// import githubIcon from '../assets/icons/github.svg';
// import gitIcon from '../assets/icons/git.svg';
// import javaIcon from '../assets/icons/java.svg';
// import canvaIcon from '../assets/icons/canva.svg';
// import figmaIcon from '../assets/icons/figma.svg';
// import vscodeIcon from '../assets/icons/vscode.svg';
import { profile } from "../assets/images";

const ToolsAndTechnologies = () => {
  const tools = [
    // { src: htmlIcon, alt: 'HTML5' },
    // { src: cssIcon, alt: 'CSS3' },
    // { src: jsIcon, alt: 'JavaScript' },
    // { src: bootstrapIcon, alt: 'Bootstrap' },
    // { src: githubIcon, alt: 'GitHub' },
    // { src: gitIcon, alt: 'Git' },
    // { src: javaIcon, alt: 'Java' },
    // { src: canvaIcon, alt: 'Canva' },
    // { src: figmaIcon, alt: 'Figma' },
    // { src: vscodeIcon, alt: 'VSCode' },
    { src: profile, alt: "Profile" },
    { src: profile, alt: "Profile" },
    { src: profile, alt: "Profile" },
    { src: profile, alt: "Profile" },
    { src: profile, alt: "Profile" },
    { src: profile, alt: "Profile" },
    { src: profile, alt: "Profile" },
  ];

  return (
    <section className="py-12 px-4 md:px-10">
      <h2 className="text-xl font-bold text-lGreen mb-8">Tools & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex justify-center items-center rounded-full bg-transparent border border-green-500 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto">
            <img src={tool.src} alt={tool.alt} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsAndTechnologies;
