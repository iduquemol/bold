import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { Breadcrumb } from '../ui';
import { PersonajesRoutes } from '../personajes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {
  return (
   <>
        <Routes>
            <Route path="/auth/*" element={ <AuthRoutes /> }></Route> 
            <Route path="/*" element={ <PersonajesRoutes /> }></Route>            
        </Routes>
   </>
  )
}
