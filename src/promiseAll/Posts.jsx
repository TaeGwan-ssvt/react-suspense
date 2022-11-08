export default function Posts({ posts }) {
  if (posts === null) {
    return <h1>글 목록 로딩중...</h1>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
