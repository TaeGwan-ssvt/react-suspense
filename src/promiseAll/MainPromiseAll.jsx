import { useState, useEffect } from 'react';
import { UsefetchProfileData } from './promiseApi';
import Posts from './Posts';

const promise = UsefetchProfileData;

export default function MainPromiseAll() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    promise().then((data) => {
      setUser(data.user);
      setPosts(data.posts);
    });
  }, []);

  if (!user) {
    return (
      <div className="container">
        <h1>사용자 정보 로딩중...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{user.name}</h1>
      <Posts posts={posts} />
    </div>
  );
}
