import React from 'react';
import NavBar from './componentes/NavBar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro/Cadastro';
import Produto from './componentes/Produto/Produto';
const App = () => {
  return(
    <div className="App">
     <Router>
       <NavBar />
       <Route exact path="/" component={Home}/>
       <Route path="/cadastro" component={Cadastro}/>
       <Route path="/produto" component={Produto}/>
     </Router>
    </div>
  );
}
export default App;