import React from "react";
import Season from "./Season";
import Loader from "./Loader";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {lat : null , errorMessage:""};
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (success) => {return (
                this.setState({ lat : success.coords.latitude })
            )}
        , (error)=> this.setState({errorMessage : error.message})); 
    }
    componentDidUpdate(){
        console.log("updated");
    }

    render(){
        if(this.state.lat && !this.state.errorMessage){
            return <Season lat={this.state.lat} />
        }
        if(!this.state.lat && this.state.errorMessage){
            return <Loader text={this.state.errorMessage}/>
        }
        return <Loader text="Loading..."/>
    }
}
    

export default App;