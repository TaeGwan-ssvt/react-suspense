import { useState, useEffect } from 'react';
import Posts from './Posts';

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (!loading) return;
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((user) => {
        setTimeout(() => {
          setUser(user);
          setLoading(false);
        }, 2000);
      });
  });

  if (loading) return <h1>사용자 정보 로딩중...</h1>;
  return (
    <>
      <h1>{user.name}</h1>
      <Posts />
    </>
  );
}

export default User;

// 전통적인 방식
// useEffect로 처리하며 이 방식은 waterfall을 일으킨다.
// waterfall이란 ui가 한번에 렌더돼지 않고 폭포처럼 위에서 아래로 순차적으로 ui가 그려지는 현상이다.
// 위 코드에서는 User컴포넌트가 먼저 호출돼서 렌더되기 시작하는데
// 1.'사용자 정보 로딩중'렌더
// 2. useEffect가 실행돼서 상태값들이 바뀌므로 User컴포넌트 다시 호출
// 3. 서버에서 받아온 데이터를 통해서 다시 렌더링
// 4. Posts컴포넌트 호출
// 5. Posts컴포넌트에서 1 ~ 3 과정 다시 반복
