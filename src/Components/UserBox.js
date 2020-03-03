import React from 'react';
import UserCard from './UserCard';

function UserBox({users, userinfo}){
    const style = {
        border: "red solid 2px",
        margin: "20px",
        height: "300px"
    }
    return(
        <div style={style}>
            <h3>이 방에 있는 사람은 누구인가?</h3>
            {
                users.map((user) =>
                    <UserCard
                        key={users.indexOf(user)}
                        user={user}
                        userinfo={userinfo}
                    />
                )
            }
        </div>
    )
}

export default UserBox;