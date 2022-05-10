import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="container">
                <div className="photoURL">
                    <img src = {this.props.photoURL}/>
                </div>
               <div className="description" >
               <h2 >{this.props.name}</h2>
                    <p >{this.props.children}</p>
               </div>
            </div>
        )
    }

}export default Profile