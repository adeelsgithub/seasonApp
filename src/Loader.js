import React from "react";

class Loader extends React.Component{
    render(){
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">
                    {this.props.text}
                </div>
            </div>

        );
    }
}

export default Loader;