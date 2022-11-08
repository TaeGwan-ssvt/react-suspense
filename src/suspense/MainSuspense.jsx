import { Suspense } from 'react';
import User from './User';
import Posts from './Posts';
import fetchData from './suspenseApi';

export default function MainSuspense() {
  return (
    <div className="container">
      <Suspense fallback={<h1>사용자 정보 로딩중...</h1>}>
        <User resource={fetchData('1')} />
        <Suspense fallback={<h1>글 목록 로딩중...</h1>}>
          <Posts resource={fetchData('1')} />
        </Suspense>
      </Suspense>
    </div>
  );
}
