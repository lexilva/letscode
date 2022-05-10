import React from "react";


class App2 extends React.Component{
    constructor(props){
        super(props)
    }
  render(){
    return (
    <div clasName="box" >
        <h1>
            Este é o App2 com mensagens passadas via props
        </h1>
        <div id="title">{this.props.title}</div>
        <div id="title">{this.props.text}</div>
      </div>
    );
  }
}

export default App2;