import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { Breadcrumb } from '../ui';
import { PersonajesRoutes } from '../personajes';

export const AppRouter = () => {
  return (
   <>
        <Routes>
            <Route path="login" element={<LoginPage />}></Route> 
            <Route path="/*" element={<PersonajesRoutes />}></Route>            
        </Routes>
   </>
  )
}
