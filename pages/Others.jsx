import { FightersList } from "../figthers/pages/FigthersList"
import { NavBar } from "../ui/components/NavBar"

export const Others = () => {
    return (
        <>
        
        <div className="bg-[url('/img/dbzfondo4.jpg')] bg-cover bg-no-repeat bg-center text-white border-gray-500">

            <NavBar />

            <hr />
            <div className="mt-32">
            <h1 className="text-center text-8xl font-saiyan m-5 "> Other Figthers </h1>
                <FightersList affiliation={ [ "Other", "Assistant of Beerus", "Pride Troopers", "Assistant of Vermoud", ]} />      
            </div>

        </div>
        </>
  
    )
}
