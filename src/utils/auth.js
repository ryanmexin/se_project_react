import { checkResponse } from "./Api";

const baseUrl = "http://localhost:3001";


// check token
export const checkToken = (token) => {
    return fetch(`${baseUrl}/local`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       authorization: `Bearer ${token}`,
     }
   });
   };

   export const getUserDetail = (token) => {
    const url = `${baseUrl}/users/me`;
    console.log("URL:", url);
    console.log("Token:", token);
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(checkResponse);
  };


// signup
export const signUp = ({ name, avatar, email, password }, token) => {
  fetch(`${baseUrl}/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }, token ),
  });
};

// signin
export const signIn = ({ email, password }, token) => {
  fetch(`${baseUrl}/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }, token),
  });
};

// register
export const register = (email, password, name, avatar, token) => {
  console.log(email)
  console.log(password)
  console.log(name)
  console.log(avatar)
  return fetch(`${baseUrl}/signUp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }, token),
  }).then((response) => {
    try {
      if (response.status === 200) {
        return response.json();
      }
    } catch (e) {
      console.error(e);
      return e;
    }
  });
};