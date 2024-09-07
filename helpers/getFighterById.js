export const getFighterById = (fighter, id)=>{
        return fighter.find( fighter => fighter.id === id);
        
}