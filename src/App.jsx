import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
          <Route path='/' element= {<Home></Home>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/favs' element= {<Favs></Favs>}/>
          {/* Retail Route, se pone el path con ese formato, obviamente el /detail se puede cambiar de palabra,
          pero el /:id es el que se usa generalmente. */}
          <Route path='/dentist/:id' element= {<Detail></Detail>} />

          {/* cada vez que el usuario ingresa a un path que no es alguno 
          de los que estan en alguna etiqueta Route, devuelve eso */}
          <Route path='*' element={<h1>Error</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
