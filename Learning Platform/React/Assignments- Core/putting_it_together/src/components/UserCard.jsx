import React, { Component } from 'react';
    
    
class UserCard extends Component {
    constructor(props){
        super(props);
        this.state={age:this.props.age}
        if(this.props.age == undefined)
            this.state = {age:0};
    }

    render() {
        const bday = () => {    
            console.log(`This is the new age: ${this.state.age}`)
            this.setState({age: this.state.age + 1})
        }
        return (
            <>
            {/* The use of the ternary operator (? and :) below is an example of conditional rendering. */}
            <h1>{this.props.lastname ? this.props.lastname : "last"}, {this.props.firstname ? this.props.firstname : "first"}</h1>
            <h2>Age: {this.state.age}</h2>
            <h2>Hair Color: {this.props.haircolor ? this.props.haircolor : "rainbow"}</h2>
            <button onClick={bday}>Birthday Button for {this.props.firstname} {this.props.lastname}</button>
            </>
        );
    }
}

export default UserCard;
