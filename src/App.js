import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddProduct from './AddProduct.js';
import UpdateProduct from './UpdateProduct.js';
import ListProduct from './ListProduct.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Protected from './Protected.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<Protected Component={AddProduct}/>}></Route>
        <Route path='/update'element={<Protected Component={UpdateProduct}/>}></Route>
        <Route path='/list'element={<Protected Component={ListProduct}/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/register'element={<Signup/>}></Route>
        <Route path='/*'element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
