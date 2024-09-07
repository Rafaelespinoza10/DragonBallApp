import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useCharacters } from "../customHooks/api/useCharacter";
import { getFighterById } from "../helpers/getFighterById";
import { useMemo } from "react";
import { useGradiant } from "../customHooks/api/useGradiant";

export const FighterPage = () => {
    const { id }= useParams();
    const navigate = useNavigate();
    const {characters, loading, error} = useCharacters();
    const ArrayCharacters = Object.values(characters);
    const fighterId = useMemo( () => getFighterById(ArrayCharacters, parseInt(id)) ,[ ArrayCharacters, parseInt(id)]);
    const randomGradient = useGradiant();

    const onNavigateBack = () =>{
        navigate( -1 );
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
  
    <>

    
<div className="bg-[url('/img/dbzfondo4.jpg')] bg-cover bg-no-repeat bg-center bg-opacity-60 z-0 text-white border-gray-500 min-h-screen">
    <button onClick={onNavigateBack} className="py-4 px-8 uppercase bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow font-saiyan text-4xl m-8">Back</button>

    {fighterId ? (
        <div className="max-w-6xl mx-auto p-10 transition duration-300 hover:translate-x-8">
        <div className="bg-black bg-opacity-70 rounded-lg shadow-lg overflow-hidden flex">
            {/* Imagen */}
            <div className={`${randomGradient} w-1/2 flex justify-center items-center rounded-md relative cursor-pointer transform  `}>
            <img 
                src={fighterId.image} 
                alt={fighterId.name} 
                className="w-full h-full object-cover"
                style={{ height: '80rem' }}
            />
            </div>
            
            {/* Contenido */}
            <div className="w-1/2 p-6 align align-top">
            <h1 className=" font-saiyan text-9xl text-center  mb-2">{fighterId.name}</h1>
            
            <p className=" mt-20 mb-2 text-4xl font-saiyan font-bold">Ki:<span className=" font-saiyan font-normal text-4xl"> {fighterId.ki}</span></p>
            <p className=" mt-5 text-4xl font-saiyan "> Max Ki:<span className=" font-saiyan font-normal text-4xl"> {fighterId.maxKi}</span></p>
            <p className=" mt-5 text-4xl font-saiyan "> Race:<span className=" font-saiyan font-normal text-4xl"> {fighterId.race}</span></p>
            <p className=" mt-5 text-4xl font-saiyan "> Gender:<span className=" font-saiyan font-normal text-4xl"> {fighterId.gender}</span></p>
            <p className=" mt-5 text-4xl font-saiyan "> Description:<span className=" font-saiyan font-normal text-4xl"> {fighterId.description}</span></p>
          
            </div>
        </div>
        </div>
    ) : (
        <p className="text-center text-xl">Fighter not found</p>
    )}
    </div>

    </>
  )
}
