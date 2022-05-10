import { render } from "@testing-library/react";
import React, { Component } from "react";

class Interruptor extends React.Component{
    constructor(props){
        super(props)
        this.state = { botao : false}
    }
    handleClick = (event)=>{
        this.setState({botao: event.target.value})
    }

    render(){
        if (!this.state.botao){
            return(
                <div id="lig" >
                    
                        Clique para ligar:
                     
                  <button className="ligado" onClick={this.handleClick}></button>
                        
                </div>
            )
        }
        else{
             return (  
                <div className="container">
                    <h2 onClick={this.handleClick}> botão Desligado</h2>
                    <button className="desligado" onClick={this.handleClick}></button>
                </div>
             )   
        }
           
        
    }
}export default Interruptor


