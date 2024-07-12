// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { navLinks } from '../../constants';
// import { Menu } from 'lucide-react';
// import { github, linkedin } from '../assets/icons/index';

// function Header() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <header className='sticky padding-x py-8 z-10 w-full' id='header'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href="/">
//           <p className='font-bold text-[36px] text-transparent bg-clip-text bg-gradient-1 font-title-big'>
//             Niharika
//           </p>
//         </a>

//         <div className='hidden lg:flex flex-1 justify-center lg:items-center lg:gap-16'>
//           <ul className='flex flex-1 justify-center items-center gap-16'>
//             {navLinks.map((item) => (
//               <li key={item.label}>
//                 <NavLink
//                   to={item.to}
//                   className={
//                     ({ isActive }) => `font-body-1 leading-normal text-[20px] text-white-1 transition duration-300 ease-in-out 
//                     ${isActive ? 'active' : ''} hover:text-white-48`
//                   }
//                 >
//                   {item.label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className='flex lg:hidden items-center'>
//           <Menu
//             size={32}
//             color='#fff'
//             onClick={() => setShowMenu(!showMenu)}
//             className='cursor-pointer transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'
//           />
//           <div
//             className={`absolute top-16 right-4 w-40 bg-black-1 py-4 px-6 rounded transition duration-300 ease-in-out ${
//               showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
//             }`}
//           >
//             {showMenu && (
//               <>
//                 <ul>
//                   {navLinks.map((item) => (
//                     <li key={item.label}>
//                       <NavLink
//                         to={item.to}
//                         className={({ isActive }) =>
//                           `font-body-1 leading-normal text-[20px] text-white-1 transition duration-300 ease-in-out ${
//                             isActive ? 'active' : ''
//                           } hover:text-white-48 block py-2`
//                         }
//                       >
//                         {item.label}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className='flex items-center gap-2 mt-4'>
//                   <NavLink to="https://github.com/niharika1102/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
//                   <img 
//                     src={github} 
//                     alt="Github"
//                     width={32}
//                     height={32}
//                   />
//                   </NavLink>
//                   <NavLink to="https://www.linkedin.com/in/niharika-gupta/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
//                   <img 
//                     src={linkedin} 
//                     alt="Linkedin"
//                     width={32}
//                     height={32}
//                   />
//                   </NavLink>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         <div className='hidden lg:flex justify-end items-center gap-5'>
//           <NavLink to="https://github.com/niharika1102/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
//             <img 
//               src={github} 
//               alt="Github"
//               width={32}
//               height={32}
//             />
//           </NavLink>

//           <NavLink to="https://www.linkedin.com/in/niharika-gupta-/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
//             <img 
//               src={linkedin} 
//               alt="Linkedin"
//               width={32}
//               height={32}
//             />
//           </NavLink>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;





/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu } from 'lucide-react';
import { github, linkedin } from '../assets/icons/index';
import { navLinks } from '../../constants';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='sticky padding-x py-8 z-10 w-full' id='header'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <p className='font-bold text-[36px] text-transparent bg-clip-text bg-gradient-1 font-title-big'>
            Niharika
          </p>
        </a>

        <div className='hidden lg:flex flex-1 justify-center lg:items-center lg:gap-16'>
          <ul className='flex flex-1 justify-center items-center gap-16'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className='font-body-1 leading-normal text-[20px] text-white-1 transition duration-300 ease-in-out hover:text-white-48 cursor-pointer'
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex lg:hidden items-center'>
          <Menu
            size={32}
            color='#fff'
            onClick={() => setShowMenu(!showMenu)}
            className='cursor-pointer transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'
          />
          <div
            className={`absolute top-16 right-4 w-40 bg-black-1 py-4 px-6 rounded transition duration-300 ease-in-out ${
              showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {showMenu && (
              <>
                <ul>
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className='font-body-1 leading-normal text-[20px] text-white-1 transition duration-300 ease-in-out hover:text-white-48 block py-2 cursor-pointer'
                        onClick={() => setShowMenu(false)}
                      >
                        {item.label}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>

                <div className='flex items-center gap-2 mt-4'>
                  <a href="https://github.com/niharika1102/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
                    <img 
                      src={github} 
                      alt="Github"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/niharika-gupta/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
                    <img 
                      src={linkedin} 
                      alt="Linkedin"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        <div className='hidden lg:flex justify-end items-center gap-5'>
          <a href="https://github.com/niharika1102/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
            <img 
              src={github} 
              alt="Github"
              width={32}
              height={32}
            />
          </a>

          <a href="https://www.linkedin.com/in/niharika-gupta-/" className='transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1'>
            <img 
              src={linkedin} 
              alt="Linkedin"
              width={32}
              height={32}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
