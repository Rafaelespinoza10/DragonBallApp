import { Routes,Route, Navigate } from 'react-router-dom';
import { GuerrerosPage } from '../pages/GuerrerosPage';
import { VillainsPage } from '../pages/VillainsPage';
import { Others } from '../pages/Others';
import { FighterPage } from '../pages/FighterPage';

export const MainRoute = () => {
  return (
    <>

      <Routes>
          <Route path="fighters" element = {<GuerrerosPage />} />
          <Route path='villain' element = {<VillainsPage />} />
          <Route path='others' element={<Others />} />
          <Route path='fighter/:id' element={<FighterPage />} />
          <Route path='/' element={<Navigate to='/fighters' />} />
      </Routes>      
    
    </>
  )
}
