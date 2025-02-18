import './index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Signup from './pages/signup/Signup.jsx';
import Login from './pages/login/Login.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
  const{ authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center h-screen p-4'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/signup' element={authUser ? <Navigate to="/"/> : <Signup />} />
        <Route path='/login' element={authUser ? <Navigate to="/"/> : <Login />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;