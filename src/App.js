import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div className="App">
      <Router>
      
      <Switch>
      <Route  exact path="/"  component={Home}/>
      <Route  exact path="/addProduct"  component={AddProduct}/>
      <Route  exact path="/editProduct/:id"  component={EditProduct}/>



<Route>404 Not Found</Route>
</Switch>
      </Router>
    </div>
  );
}

export default App;
