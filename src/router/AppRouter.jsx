import { Routes, Route } from 'react-router-dom'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

export const AppRouter = () => {
  return (
    <Routes>

      {/* Login y Registro */}
      <Route path="/auth/*" element={ <AuthRoutes />} />

      {/* AdminApp */}
      <Route path="/*" element={ <AdminRoutes />} />

    </Routes>
  )
}
