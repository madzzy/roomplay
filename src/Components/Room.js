import React from 'react';
import UserBox from './UserBox';
import socketio from 'socket.io-client';
import axios from 'axios';
import ChatBox from './ChatBox';

// 소켓 여는 함수?
const socket = socketio.connect('http://localhost:4000/room');
(()=>{
    // 서버에서 정보를 가져와서 로그인에 넣어줘야 할 것 같음
    axios.get('http://localhost:4000/user').then(user=>{
        console.log(user)
        socket.emit('login', {
            nickname: user.data.nickname,
            profileImg: user.data.profileImg,
            score: user.data.score
        })
    })

})()

class Room extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            logs: [],
        }
    }


    componentDidMount(){
        socket.on('login', data=>{
            this.setState({
                users: data
            })
        })

        socket.on('logout', data=>{
            this.setState({
                users: data
            })
        })

        socket.on('chat message', (newMsg)=>{
            const newLogs = this.state.logs
            newLogs.push(newMsg)
            this.setState({
                logs: newLogs
            })
        })
    }

    render(){
        return(
            <div>
                <UserBox userinfo={this.props.userinfo} users={this.state.users}/>
                <br></br>
                <ChatBox userinfo={this.props.userinfo} socket={socket} logs={this.state.logs}></ChatBox>
            </div>
        )
    }
}

export default Room