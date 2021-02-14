import { useState, useEffect } from 'react';

const FunctionalPage = () => {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
      //console.log('함수형 componentDidMount 실행');
    }, 1000);

    return () => {
      clearInterval(timerID);
      //console.log('함수형 componentWillUnmount 실행');
    };
  }, []);

  useEffect(() => {
    console.log('카운트 증가');
  }, [count]);

  const countPlus = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>함수형 페이지 입니다.</h1>
      <div>
        <button onClick={countPlus}>{count}</button>
      </div>
      <button>{date.toLocaleTimeString()}</button>
    </div>
  );
};

export default FunctionalPage;
