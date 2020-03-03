import React from 'react';

class ChatBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg: ''
        }
        this.handleInputValue = this.handleInputValue.bind(this)
        this.hendlesubmit = this.hendlesubmit.bind(this)
    }
    handleInputValue(e) {
        this.setState({ msg: e.target.value });
    };

    hendlesubmit(){
        this.props.socket.emit('chat message', {
            nickname: this.props.userinfo.nickname,
            msg: this.state.msg
        })
    }

    // 컴포넌트가 마운트 됐을 때
    componentDidMount(){
        // 서버로부터 메세지가 오는 것을 실시간으로 받음
        /* 메세지는 쓴 사람하고 내용이 있는 객체
        let newMsg = {
            nickname: "닉네임",
            massage: "안녕하세요"           
        }*/
        // this.state.logs는 받은 메세지들,,

    }

    render(){
        const boxStyle = {
            border: "solid 2px blue",
            margin: "20px",
        }

        let messages = this.props.logs.map(msg=>(
            <li>
                <div>{msg.nickname} : {msg.message}</div>
            </li>
        ))
        return(
            <div style={boxStyle}>
                채팅박스
                <ul>
                    {messages}
                </ul>
                <form>
                    <input placeholder="채팅내용적기" value={this.state.msg} onChange={this.handleInputValue}></input>
                    <button onClick={this.hendlesubmit}>입력</button>
                </form>

            </div>
        )
    }
}

export default ChatBox