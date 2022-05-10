import React from "react";


class App extends React.Component{
  render(){
    return (
      <>
        <p>
          Meu primeiro parágrafo (através da tag P)
        </p>
        <p>
          Meu segundo parágrafo (através da Tag P)
        </p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </>
    );
  }
}

export default App;
