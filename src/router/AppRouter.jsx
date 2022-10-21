import { Navigate, Route, Routes } from 'react-router-dom';
import { UnsubscribePage } from '../admin/pages';
import { AdminRoutes } from '../admin/routes/AdminRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

  const status = useCheckAuth();

  return (
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <AdminRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />
        <Route path="/unsubscribe/:email" element={<UnsubscribePage />} />

    </Routes>
  )
}