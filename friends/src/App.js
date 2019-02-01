import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

class App extends Component {
  
  componentDidMount(){
this.props.getFriends();
  }
  
  render() {
    return (
      <div className="App">
        <FriendsList />
        <FriendsForm />
      </div>
    );
  }
}

export default connect(null,{getFriends})(App);
