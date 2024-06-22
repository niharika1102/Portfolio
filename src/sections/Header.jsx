// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { navLinks } from '../../constants'
// import { Github, Linkedin, Menu } from 'lucide-react'

// function Header() {
//   const [showMenu, setShowMenu] = useState(false)

//   return (
//     <header className='padding-x py-8 absolute z-10 w-full bg-black-1'>
//       <nav className='flex justify-between items-center max-container'>
//         <NavLink to="/">
//           <p className='font-bold text-[36px] text-white-1 font-title-big'>Niharika</p>
//         </NavLink>

//         <div className='flex-1 flex justify-center'>
//           <div className='hidden lg:flex lg:flex-1 lg:justify-center lg:items-center lg:gap-16'>
//             <ul className='flex flex-1 justify-center items-center gap-16'>
//               {navLinks.map((item) => (
//                 <li key={item.label}>
//                   <NavLink
//                     to={item.to}
//                     className='font-body-1 leading-normal text-[20px] text-white-1'
//                   >
//                     {item.label}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className='lg:hidden'>
//             <Menu size={32} color='#fff' onClick={() => setShowMenu(!showMenu)} />
//             {showMenu && (
//               <div className='absolute top-16 right-0 w-40 bg-black-1 py-4 px-6 rounded'>
//                 <ul>
//                   {navLinks.map((item) => (
//                     <li key={item.label}>
//                       <NavLink
//                         to={item.to}
//                         className='font-body-1 leading-normal text-[20px] text-white-1 block py-2 hover:underline'
//                       >
//                         {item.label}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>

//                 <ul className='flex flex-col gap-2'>
//                     <NavLink 
//                         to="https://github.com/niharika1102/" 
//                     >
//                     <Github size={32} color='#fff' />
//                   </NavLink>

//                   <NavLink to="https://www.linkedin.com/in/niharika-gupta-">
//                     <Linkedin size={32} color='#fff' />
//                   </NavLink>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className='flex justify-end items-center gap-5'>
//           <NavLink to="https://github.com/niharika1102/">
//             <Github size={32} color='#fff' />
//           </NavLink>

//           <NavLink to="https://www.linkedin.com/in/niharika-gupta-">
//             <Linkedin size={32} color='#fff' />
//           </NavLink>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Header




import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navIcons, navLinks } from '../../constants'
import { Github, Linkedin, Menu } from 'lucide-react'

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-black-1'>
      <nav className='flex justify-between items-center max-container'>
        <NavLink to="/">
          <p className='font-bold text-[36px] text-white-1 font-title-big'>Niharika</p>
        </NavLink>

        <div className='flex-1 flex justify-center'>
          <div className='hidden lg:flex lg:flex-1 lg:justify-center lg:items-center lg:gap-16'>
            <ul className='flex flex-1 justify-center items-center gap-16'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `font-body-1 leading-normal text-[20px] text-white-1 transition duration-300 ease-in-out ${isActive ? 'active' : ''} hover:text-white-2 hover:underline`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='lg:hidden'>
            <Menu size={32} color='#fff' onClick={() => setShowMenu(!showMenu)} />
            {showMenu && (
              <div className='absolute top-16 right-0 w-40 bg-black-1 py-4 px-6 rounded'>
                <ul>
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) => `font-body-1 leading-normal text-[20px] text-white-1 transition duration-300 ease-in-out ${isActive ? 'active' : ''} hover:text-white-2 hover:underline block py-2`}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <ul className='flex flex-col gap-2'>
                  <NavLink to="https://github.com/niharika1102/">
                    <Github size={32} color='#fff' />
                  </NavLink>

                  <NavLink to="https://www.linkedin.com/in/niharika-gupta-">
                    <Linkedin size={32} color='#fff' />
                  </NavLink>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className='flex justify-end items-center gap-5'>
          <NavLink to="https://github.com/niharika1102/">
            <Github size={32} color='#fff' />
          </NavLink>

          <NavLink to="https://www.linkedin.com/in/niharika-gupta-">
            <Linkedin size={32} color='#fff' />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header