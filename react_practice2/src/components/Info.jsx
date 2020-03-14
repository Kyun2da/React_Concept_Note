import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log(name, nickName);
  }, [name]); //여기에 []를 넣으면 마운트될떄만 실행되고 랜더링될때는 실행 x,
  // []에 특정 변수를 넣으면 특정변수가 랜더링 될때만 실행
  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickName = e => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickName}
      </div>
    </div>
  );
};

export default Info;
