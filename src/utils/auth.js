import { checkResponse } from "./Api";

const baseUrl = process.env.NODE_ENV === 'production' 
? 'https://api.wtwr.serverpit.com'
: 'http://localhost:3001'


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



// signin
export const signIn = ( email, password ) => {
  console.log(email)
  console.log(password)
  
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {email, password}),
  })
  .then(checkResponse);
};

//register
export const register = ({email, password, name, avatar}) => {
  console.log(email);
  console.log(password);
  console.log(name);
  console.log(avatar);
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  })
  .then(checkResponse); // Add this line at the end to check the response
};


