// eslint-disable-next-line no-promise-executor-return
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function UsefetchProfileData() {
  return Promise.all([
    fetchUser(),
    fetchPosts(),
  ])
    .then(([user, posts]) => ({ user, posts }));
}

async function fetchUser() {
  const data = await delay(2000)
    .then(() => {
      const data = fetch('https://jsonplaceholder.typicode.com/users/1');
      console.log('User data done');
      return data;
    });

  return data.json();

  // const data = await fetch('https://jsonplaceholder.typicode.com/users/1')
  //   .then((res) => {
  //     console.log('User data done');
  //     return res;
  //   });

  // return data.json();

  // const data = await delay(fetch('https://jsonplaceholder.typicode.com/users/1'), 3000);
  // return data.json();
}

async function fetchPosts() {
  const data = await delay(2000)
    .then(() => {
      const data = fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
      console.log('Posts data done');
      return data;
    });

  return data.json();
}
