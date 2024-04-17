import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';


export const router = createBrowserRouter([
    { path: '/login', element: <Login/> },
    { path: '/register', element: <Register/> },
    { path: '/forgotPassword', element: <ForgotPassword/> },
    { path: '/', element: <App/> },
])