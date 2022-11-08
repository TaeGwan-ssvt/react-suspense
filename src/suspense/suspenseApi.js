function fetchUser() {
  let user = null;
  // console.log('User data start');
  const suspender = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        user = data;
        console.log('User data done');
      }, 2000);
    });

  return {
    read() {
      if (user === null) {
        throw suspender;
      }
      return user;
    },
  };
}

function fetchPosts() {
  let posts = null;
  // console.log('Posts data start');
  const suspender = fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        posts = data;
        console.log('Posts data done');
      }, 2000);
    });

  return {
    read() {
      if (posts === null) {
        throw suspender;
      }
      return posts;
    },
  };
}

function fetchData() {
  return {
    user: fetchUser(),
    posts: fetchPosts(),
  };
}

export default fetchData;
