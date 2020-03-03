import React from 'react';
import Room from './Components/Room'

let userinfo =       {
  id: 2,
  nickname: "두번째 사람",
  profileImg: "이미지122",
  score: 123412
}

function App() {
  return (
    <div className="App">
     <Room userinfo={userinfo}></Room>
    </div>
  );
}

export default App;
