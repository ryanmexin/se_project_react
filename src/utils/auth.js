import { checkResponse } from "./Api";

const baseUrl = "http://localhost:3001";


// check token
// export const checkToken = (token) => {
//     return fetch(`${baseUrl}/user/me`, {
//      method: "GET",
//      headers: {
//        "Content-Type": "application/json",
//        authorization: `Bearer ${token}`,
//       },
//     }).then((response) => {
//       if (response.ok) {
//         return response.json(); // Resolve the promise with JSON data if the response is successful
//       } else {
//         throw new Error(`Token validation failed: ${response.status}`);
//       }
//     });
//   };

   export const checkToken = (token) => {
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


//signup
// export const register = ({ name, avatar, email, password }, token) => {
//   return fetch(`${baseUrl}/signUp`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, avatar, email, password }, token ),
//   });
// };

// signin
export const signIn = ( email, password ) => {
  console.log(email)
  console.log(password)
  
  return fetch(`${baseUrl}/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {email, password}),
  });
};

//register
export const register = (email, password, name, avatar) => {
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
    body: JSON.stringify( {email, password, name, avatar }),
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