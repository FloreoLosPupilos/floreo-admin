import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, CarrouselPage, PrincipalPage } from '../pages';
import { NavBar } from '../ui/Navbar';

export const AdminRoutes = () => {
    
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<PrincipalPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/carrousel" element={<CarrouselPage />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}
