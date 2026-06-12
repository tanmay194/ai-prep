import axios from "axios";

export async function register({ username, email, password }) {
    const response = await axios.post(
        "https://ai-prep-delta.vercel.app/api/auth/register",
        { username, email, password },
        { withCredentials: true }
    );
    return response.data;
}

export async function login({ email, password }) {
  try {
    const response = await axios.post(
      "https://ai-prep-delta.vercel.app/api/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function logout() {
  // try {
  //   const response = await axios.get("http://localhost:3000/api/auth/logout", {
  //     withCredentials: true,
  //   });

  //   return response.data;
  // } catch (err) {
  //   console.log(err);
  // }
   const response = await axios.get("https://ai-prep-delta.vercel.app/api/auth/logout", {
        withCredentials: true,
    });
    return response.data;
}

export async function getMe() {
  // try {
  //   const response = await axios.get("http://localhost:3000/api/auth/get-me", {
  //     withCredentials: true,
  //   });

  //   return response.data;
  // } catch (err) {
  //   console.log(err);
  // }
  const response = await axios.get("https://ai-prep-delta.vercel.app/api/auth/get-me", {
        withCredentials: true,
    });
    return response.data;
}
