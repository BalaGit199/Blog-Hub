const base_URL = "http://localhost:3000/api/posts"

export default async function getPost(id) {
  const res = await fetch(`${base_URL}`);
  const posts = await res.json();

  if(id){
    return posts.find(values => values.id == id)
  }
  
  return posts
}
