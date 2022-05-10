import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import Lista from './components/Lista';
import Lista2 from './components/Lista2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App>

    </App>
    <App2 title="Título Props do App2" text="Conteúdo Props App2" >

    </App2>
    <App3>
        <h3>No App3 além de props, temos o conceito de mudança de estado</h3>
    </App3>
    <App4>
      <h2>
        App4: Formatação condicional Ok!
      </h2>
    </App4>
    
    <App5>
      
    </App5>
    <Lista></Lista>*/}
    <Lista2></Lista2>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
