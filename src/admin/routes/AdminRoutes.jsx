import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, CarrouselPage, ServicePage, CategoryPage, MemberPage, OrderPage } from '../pages';
import { SubscribersPage } from '../pages/SubscribersPage';
import { NavBar } from '../ui/Navbar';

export const AdminRoutes = () => {
    
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<CarrouselPage />} />
                <Route path="/nosotros" element={<AboutPage />} />
                <Route path="/carrusel" element={<CarrouselPage />} />
                <Route path="/servicios" element={<ServicePage />} />
                <Route path="/categoria" element={<CategoryPage />} />
                <Route path="/integrantes" element={<MemberPage />} />
                <Route path="/subscriptores" element={<SubscribersPage />} />
                <Route path="/pedidos" element={<OrderPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}
