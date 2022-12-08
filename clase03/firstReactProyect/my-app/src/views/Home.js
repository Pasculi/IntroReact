import React, { Component } from 'react'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            position:"On",
            user:{
                name:'Carolina',
                age:38,
                address:'Pedro de Valdivia'
            },
            fruits:["Fresas", "Frutillas", "Manzanas"]
        };

    }

    render(){
        console.log(this.props)
        const mensaje = this.props.message
        return(
            <div>
            <h1>Saludos desde el componente de clase</h1>
            <h2>{mensaje}</h2>
            <p>Hola {this.state.user.name} min 48:21</p>
            
            </div>
        )
    }

}
export default Home;