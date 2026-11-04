import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import EventList from './components/EventList/EventList'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import RegistrationRoute from './components/Registration/RegistrationRoute'
import EventDetails from './components/EventDetails/EventDetails'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/favorites" element={<EventList favoritesOnly />} />
          <Route path="/registration" element={<RegistrationRoute />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App