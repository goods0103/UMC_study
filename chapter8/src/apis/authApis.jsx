import axios from "axios";
const signUp = async (userData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/auth/register",
      userData
    );

    return data;
  } catch (error) {
    throw error;
  }
};

const userLogin = async (userData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/auth/login",
      userData
    );
    return { res: data, formData: userData };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const setUser = async (idKey) => {
  try {
    const Authheader = `Bearer ${
      JSON.parse(localStorage.getItem(idKey)).accessToken
    }`;
    console.log("auth: ", Authheader);
    const { data } = await axios.get("http://localhost:3000/user/me", {
      headers: {
        Authorization: Authheader,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export { signUp, userLogin, setUser };
