import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'boxicons';

import HomePage from "./pages/HomePage"

function App() {

  return (
    <div className="booking-ticket">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
