import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroConteudo from './pages/cadastro/conteudo';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroCategorias from './pages/cadastro/categorias';
import NotFound from './pages/NotFound';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/conteudo' component={CadastroConteudo}/>
      <Route path='/cadastro/categorias' component={CadastroCategorias}/>
      <Route component={NotFound}/>   
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

