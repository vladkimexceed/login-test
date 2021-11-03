export const BASE_URL = "https://auth.somesite.com";

// function that checks if the response is ok

// const getResponseData = (res) => {
//   if (!res.ok) {
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
//   return res;
// };

export const authorize = (password, email) => {
  // fetching some data

  //   return fetch(`${BASE_URL}/signin`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ password, email }),
  //   }).then((response) => getResponseData(response));

  return Promise.resolve(`You've logged in!`);
};
