'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const GetUser = async (formData: FormData) => {
  try {
    const user = Object.fromEntries(formData.entries());
    const getUser = await fetch('http://127.0.0.1:5000/api/farmer/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    console.log(getUser);

    if (getUser.ok) {
      const json = await getUser.json();
      cookies().set('Authorization', json.token);

      redirect('/');
    }
  } catch (error) {
    console.log(error);
  }
};

export default GetUser;
