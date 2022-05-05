import React, { Component } from 'react';
    
    
class UserCard extends Component {
    constructor(props){
        super(props);
        this.state={age:this.props.age}
    }

    render() {
        const bday = () => {    
            console.log(`This is the new age: ${this.state.age}`)
            this.setState({age: this.state.age + 1})
        }
        return (
            <>
            <h1>{this.props.lastname}, {this.props.firstname}</h1>
            <h2>Age: {this.state.age}</h2>
            <h2>Hair Color: {this.props.haircolor}</h2>
            <button onClick={bday}>Birthday Button for {this.props.firstname} {this.props.lastname}</button>
            </>
        );
    }
}

export default UserCard;
