
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'

function App() {


  return (
    <>
      <BrowserRouter>

        <NavBar />

    <HeroSection/>
        <Routes>

          {/* <Route path="/" element={<NavBar />} /> */}


          {/* <Route path="/about" element={<AboutPage />} />
<Route path="/sign-in" element={<SignInPage />} />
<Route path="/sign-up" element={<SignUpPage />} /> */}

          {/* <Route element={<PrivateRoute />}>
<Route path="/profile" element={<ProfilePage />} />
</Route> */}

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
