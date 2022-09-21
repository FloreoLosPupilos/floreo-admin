import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, CarrouselPage, ServicePage, CategoryPage, MemberPage } from '../pages';
import { NavBar } from '../ui/Navbar';

export const AdminRoutes = () => {
    
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/carrousel" element={<CarrouselPage />} />
                <Route path="/servicios" element={<ServicePage />} />
                <Route path="/categoria" element={<CategoryPage />} />
                <Route path="/integrantes" element={<MemberPage />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}
