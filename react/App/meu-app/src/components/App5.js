import React from "react";

class App5 extends React.Component{
    constructor(props){
        super(props)
        this.state = {nome: undefined, txtNome: ''}

    }
    changetxtName =(event)=>{
        this.setState({txtNome: event.target.value})
    }
    componentDidMount = () =>{
        const nome = sessionStorage.getItem('nome')
        if (nome) this.setState({nome})
    }
    persistName = ()=>{
        this.setState({nome : this.state.txtNome})
        sessionStorage.setItem('nome',this.state.txtNome)
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
                
              Olá,  {this.state.nome} App5 em ordem
              <div id="text">{this.props.children}</div>
            </>
          )
    }
    return !this.state.nome ? renderForm() : renderTxt()  
        
      }
    
 
}export default App5;