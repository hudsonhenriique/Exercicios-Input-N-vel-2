async function getPosts() {
  try {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await promise.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const posts = await getPosts();
  const user01 = posts.filter((post) => post.userId === 1);
  console.log(user01);
}

main();
