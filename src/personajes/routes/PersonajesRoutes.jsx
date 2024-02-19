import { Navigate, Route, Routes } from 'react-router-dom';
import { ButtonGr } from "../../ui"
import { StarkPage } from "../pages/StarkPage"
import { LannisterPage } from "../pages/LannisterPage"
import { AddCharacterPage } from '../pages/AddCharacterPage';
import { TargaryenPage } from '../pages/TargaryenPage';

export const PersonajesRoutes = () => {
  return (
   <>
        <ButtonGr />
        <Routes>
            <Route path="stark" element={<StarkPage />}></Route>
            <Route path="lannister" element={<LannisterPage />}></Route>
            <Route path="targaryen" element={<TargaryenPage />}></Route>
            <Route path="add" element={<AddCharacterPage />}></Route>
            <Route path="/" element={<Navigate to="/stark" />}></Route>
        </Routes>
   </>
  )
}
