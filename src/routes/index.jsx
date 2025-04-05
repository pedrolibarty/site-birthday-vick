import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Error from '../pages/Error'

export default function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/guest/:id_guest" element={<Main />} />
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}
