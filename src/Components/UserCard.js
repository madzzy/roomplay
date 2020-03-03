import React from 'react';



function UserCard(props){
    const style = {
        border: "solid 2px",
        width: "200px",
        height:"200px",
        marginTop: "10px",
        marginLeft: "20px",
        float: "left"
    }
    const myStyle = {
        border: "solid 2px green",
        width: "200px",
        height:"200px",
        marginTop: "10px",
        marginLeft: "20px",
        float: "left"
    }
    return(
        <div style={props.userinfo.nickname === props.user.nickname ? myStyle : style}>
            <div>프로필이미지 : {props.user.profileImg}</div>
            <div>닉네임 : {props.user.nickname}</div>
            <div>점수 : {props.user.score}</div>
            <button>ready</button>
        </div>
    )
}

export default UserCard;