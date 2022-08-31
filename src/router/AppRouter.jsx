import { onAuthStateChanged } from '@firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { AdminRoutes } from '../admin/routes/AdminRoutes'
import { login, logout } from '../auth'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FirebaseAuth } from '../firebase/config'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user) => {
      if(!user) return dispatch(logout());
      const { displayName, email, uid } = user;
      dispatch(login(displayName, email, uid));
    });
  });

  return (
    <Routes>
      {
          (status === 'authenticated') 
          ?<Route path="/auth/*" element={ <AuthRoutes />} />
          :<Route path="/*" element={ <AdminRoutes />} />
      }
      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={ <AuthRoutes />} /> */}

      {/* AdminApp */}
      {/* <Route path="/*" element={ <AdminRoutes />} /> */}

    </Routes>
  )
}
