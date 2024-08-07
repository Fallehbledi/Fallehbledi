'use server'
async function getData(postId:string) {
    'use server'
  const url = `http://127.0.0.1:5000/api/post/getonepost/${postId}`;
  const res = await fetch(url, { next: { revalidate: 1 } });
  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }
  return res.json();
}
export default getData