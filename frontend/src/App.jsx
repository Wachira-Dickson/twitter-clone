import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/home/HomePage.jsx'
import Login from './pages/auth/login/LoginPage.jsx'
import Register from './pages/auth/register/RegisterPage.jsx'
import SignUp from './pages/auth/signUp/SignUp.jsx'
import NotificationPage from './pages/notification/NotificationPage.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx'

import Sidebar from './components/common/Sidebar.jsx'
import RightPanel from './components/common/RightPanel.jsx'

function App() {
  return (
    <div className='flex max-w-6xl mx-auto'>
      <Sidebar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path= '/signUp' element = {<SignUp />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
      </Routes>
      <RightPanel />
    </div>
  )
}

export default App
