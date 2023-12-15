import {Component } from "react";

class UserClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name: "Dummy",
                avatar_url: "dummy.png"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mandhares827");

        const json = await data.json();
        console.log("json", json);
        this.setState({
            userInfo:json,
        });
        
      
    }
    render() {

        return <div className="user-card">
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Image: <img src={this.state.userInfo.avatar_url} /></h3>
    </div>
    }
}

export default UserClass;