import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home';
import { HomeUser } from './Pages/HomeUser';
import { Routines } from './Pages/Routines';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<HomeUser/>}/>
    <Route path='/routines' element={<Routines/>}/>
  </Routes>
  );
}

export default App;
