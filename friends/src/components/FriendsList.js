import React from 'react';
import { connect } from 'react-redux';

class FriendsList extends React.Component{
    render(){
       console.log(this.props);
        return(
            <div>
              {this.props.friends.map(friend=>(
                 <h1 key={friend.id}>{friend.name}</h1>
              ))}
            </div>
        )
    };
}

const mapStateToProps =state =>{
    return{
        friends: state.friendsReducer.friends
    }
}

export default connect(mapStateToProps, {})(FriendsList)