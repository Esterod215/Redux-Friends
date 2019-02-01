import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendsForm extends React.Component {
    state ={
        name:'',
        age:'',
        email:''
    }

    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    addFriend =(e)=>{
        e.preventDefault();
        this.props.addFriend(this.state.name,this.state.age,this.state.email);
    }

   
    render() {
        
    return (
      <form onSubmit={this.addFriend}>
        <input 
        type="text"
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={this.handleChanges}
        
        />

        <input
         
          value={this.state.age}
          name="age"
          type="number"
          placeholder="Age"
          onChange={this.handleChanges}
        />
        <input
          
          value={this.state.email}
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.handleChanges}
          />
        
        <button type='submit'>Add New Friend</button>
      </form>
    )
  }
}

export default connect(null,{addFriend})(FriendsForm);