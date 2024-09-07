import { NavLink } from "react-router-dom"

export const LinkBar = ( {
    namePath = '',
    title = '', 
    }) => {
  return (

    <NavLink
    className={ ({ isActive }) => `px-4 py-2 text-white ${isActive ? 'text-orange-500'  : 'text-white'}` }
        to={`/${ namePath }`}
  
    >   
        { title }
    </NavLink>

  )
}
