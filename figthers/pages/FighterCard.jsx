import { Link } from "react-router-dom";
import { useGradiant } from "../../customHooks/api/useGradiant";

export const FighterCard = ({ id, name, ki, maxki, race, gender, image, affiliation }) => {
  
    const randomGradient = useGradiant();
    
    return (
<div className={` rounded-md overflow-hidden  max-w-screen-sm bg-transparent px-10 flex flex-col  relative cursor-pointer transform   transition duration-300transition duration-300 hover:scale-105`} style={{ height: '25rem' } }>
  <div className="flex flex-grow">
    <div className={`${randomGradient} w-1/2 flex justify-center items-center rounded-md`}>
      <div className="w-full h-full flex justify-center items-center overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          style={{ maxHeight: '100%', maxWidth: '60%' }}
        />
      </div>
    </div>
    
    <div className="w-1/2 p-2  mt-2 bg-black bg-opacity-60 rounded-md">   
      <h5 className="font-saiyan text-5xl text-center m-0 leading-tight text-white">{name}</h5>
        <div className=" text-xl grid grid-cols-1 grid-rows-1 mt-4 font-semibold">
          <p className="font-extrabold  leading-tight">Ki:<span className="font-normal"> {ki} </span></p>
          <p className="font-bold  leading-tight">Max Ki: <span className="font-normal"> {maxki} </span></p>
          <p className="font-bold  leading-tight">Race: <span className="font-normal"> {race} </span> </p>
          <p className="font-bold  leading-tight"> Gender: <span className="font-normal"> {gender} </span> </p>
          <p className="font-bold  leading-tight"> Affiliation: <span className="font-normal"> {affiliation} </span> </p>
        
          <div className="rounded-md px-10 py-3 mt-10 uppercase bg-orange-400 font-bold hover:bg-orange-500 text-white">
              <Link
                to= {`/fighter/${id}`}
              >
                View More...
              </Link>
          </div>
        
        </div>
    </div>
  </div>
</div>
    
    )
  };
  