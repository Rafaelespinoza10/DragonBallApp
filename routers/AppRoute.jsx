import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { MainRoute } from '../routes/MainRoute';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRoute = () => {
  return (
    <Routes>
        <Route path='/login'
               element={
                    <PublicRoute>
                        <LoginPage />
                     </PublicRoute>
               } />
        <Route path='/*'
               element={
                   <PrivateRoute>
                        <MainRoute />
                    </PrivateRoute> 
               } />


    </Routes>
  )
}
