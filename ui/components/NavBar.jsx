// import { LinkBar } from "../helpers/LinkBar"
import { useContext } from 'react';
import { LinkBar } from '../helpers/LinkBar';
import {useNavigate} from 'react-router-dom';
import { LinkBarWithImage } from '../helpers/LinkBarWithImage';
import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () =>{
        logout();
        navigate('/login'),{
            replace:true, 
        };
    }

  return (
    <>
    
    <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-black-200 dark:border-black py-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
               <div className='font-saiyan text-cennter'>
                        <LinkBarWithImage 
                        path='' 
                        src='https://i.pinimg.com/736x/6a/36/4e/6a364e4ffb17a5e70269136829e8049b.jpg' 
                        title=' Dragon Ball App' 
                        />
        
               </div>


            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-center items-center gap-6">
                
                <span
                    className='text-orange-500 font-bold '
                > Hi, { user?.name}
                </span>   
                <button 
                    type="button" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={onLogout}
                >
                    
                    Logout
                </button>

            </div>


            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-black">
                <li>
                        <LinkBar namePath=''  title='Home' />
                </li>
                <li>
                        <LinkBar namePath='fighters' title='Z Fighter' />
                </li>
                <li>
                        <LinkBar namePath='villain' title='Villains' />
                </li>
                <li>
                        <LinkBar namePath='others' title='Others' />
                </li>
                </ul>
            </div>
        </div>
</nav>



   
    </>


  )
}
