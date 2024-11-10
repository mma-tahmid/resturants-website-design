

import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import FullLandingPage from './Pages/FullLandingPage'

function App() {


  return (
    <>

      <BrowserRouter>


        <NavBar />
        <FullLandingPage />

      </BrowserRouter>

      {/* <BrowserRouter>

        <NavBar />

        <HeroSection />
        <SubHeading />
        <Routes>

          <Route path="/" element={<NavBar />}/> 


          <Route path="/about" element={<AboutPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

        </Routes>

      </BrowserRouter> */}

    </>
  )
}

export default App
