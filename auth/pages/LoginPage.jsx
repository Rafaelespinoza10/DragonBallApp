import { useContext,  useState } from "react"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {
 const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');



  const onLogin = (event) =>{
    event.preventDefault();
    localStorage.setItem('nombre', name);
    localStorage.setItem('password', password);


    const lastPath = localStorage.getItem('/');

    login( name, password);
      navigate(lastPath, {
        replace: true, 
      })
  }

  return (


      <>
      
      
      <div className="bg-[url('/img/dbzfondo6.jpg')] bg-cover bg-no-repeat bg-bottom bg-opacity-50 z-0 text-white border-gray-500 min-h-screen flex justify-center items-center">
    <div className="align align-top">
          <h1 className="font-saiyan font-light text-center text-white text-8xl mb-2"> Welcome!</h1>
          <p className="font-saiyan font-thin text-center text-white text-4xl mb-10">Dragon Ball App</p>
      <div className="bg-black bg-opacity-50 py-12 px-16 shadow-lg rounded-md mx-auto w-max">
          <p className="font-saiyan text-6xl text-center "> Login </p>
            <form className="space-y-8">
                <div className="space-y-4" >
                  <label className="block text-sm uppercase text-gray- mb-4 font-bold" 
                    htmlFor="name" /> User Name:
                  <input 
                      type="text" 
                      className="w-full px-2 py-2 border border-gray-300 text-black rounded-lg placeholder-gray-400" 
                      placeholder="Your userName" 
                      name="name"
                      value= {name}
                      onChange={ (event) => setname(event.target.value)}
                      />
                </div>

                <div className="space-y-4" >
                  <label className="block text-sm uppercase text-gray- mb-4 font-bold" htmlFor="password" /> Password:
                  <input 
                      type="password" 
                      className="w-full  px-2 py-2 border border-gray-300 text-black rounded-lg placeholder-gray-400" 
                      placeholder="Tu password" 
                      name="password" 
                      value= {password}
                      onChange={(event) => setpassword(event.target.value)}
                      />
                </div>


                <input 
                    type="submit" 
                    className="w-full rounded-lg bg-orange-600 text-white uppercase font-bold hover:bg-orange-700 py-3 cursor-pointer "
                    value="Login" 
                    onClick={ onLogin }
                    />
            </form>
          
        </div>
          
          </div>
        </div>
      </>
  )
}
