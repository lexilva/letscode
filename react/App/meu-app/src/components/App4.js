import React from "react";

class App4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: undefined, txtNome: ''}

    }
    changetxtName =(event)=>{
        this.setState({txtNome: event.target.value})
    }
    persistName = ()=>{
        this.setState({nome : this.state.txtNome})
    }

    
  render(){

    const renderForm = () =>{
        return(
            <>
                <br/>
                Nome: <input type="text" value={this.state.nome} onChange ={this.changetxtName}></input>
                <button  onClick={this.persistName}>Salvar</button>
                <br/>
            </>        
      )
    }
    const renderTxt = ()  =>{
        return(
            <>
            <br/>
                
              Olá meu camarada,  {this.state.nome}
              <div id="text">{this.props.children}</div>
            </>
          )
    }
    return !this.state.nome ? renderForm() : renderTxt()  
        
      }
    
 
}export default App4;