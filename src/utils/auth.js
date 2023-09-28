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


// signup
export const signUp = ({ name, avatar, email, password }, token) => {
  fetch(`${baseUrl}/signup`, {
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