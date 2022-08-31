import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminRoutes } from '../admin/routes/AdminRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

  const status = useCheckAuth();
  console.log({status});

  return (
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <AdminRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

    </Routes>
  )
}