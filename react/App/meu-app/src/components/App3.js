import React from "react";

class App3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: ''}

    }
    changeName =(event)=>{
        this.setState({nome: event.target.value})
    }

  render(){
    return(
      <>
      <br/>
        Nome: <input type="text" value={this.state.nome
        } onChange ={this.changeName}></input>
        <br/>
        Olá,  {this.state.nome}
        <div id="text">{this.props.children}</div>
      </>
    )
  }
}export default App3;