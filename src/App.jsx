
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Main from './components/Main';



function App() {


  return (
    <div className="App">


      <Routes>
        <Route path='/' element={< Main />} ></Route >
        <Route path='/character'  >
          <Route path=':id' element={<Detail />}> </Route>
        </Route>
      </Routes>


    </div>
  )
}

export default App
