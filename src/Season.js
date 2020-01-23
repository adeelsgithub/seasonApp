import React from "react";
import Classes from "./CSS/season.module.css";

class Season extends React.Component{

    seasonConfig = {
        summer : {
            text:"let's hit the beach",
            iconName:"snowflake"
        },
        winter:{
            text:"burr its chilly",
            iconName:"sun"
        }
    }

    getSeason=(lat , month)=>{
        if(month > 2 && month < 9){
            return lat > 0 ? "summer" : "winter";
        }
        else{
            return lat > 0 ? "winter" : "summer";
        }
    }
    render(){
        
        let season = this.getSeason(this.props.lat, (new Date).getMonth());
        let {text , iconName} = this.seasonConfig[season];
        return (<div className={Classes[season] +" "+ Classes.app}>
                    <i className={Classes.iconLeft +" icon massive "+ iconName} ></i>
                    <h1>{text}</h1>
                    <i className={ Classes.iconRight +" icon massive "+ iconName} ></i>
                </div>);
    }
}

export default Season;