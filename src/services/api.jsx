// import axios from "axios";
// export const PROJECT_TOKEN = "661fafdb16358961cd9523c1";
// export const URL = `https://${PROJECT_TOKEN}.mockapi.io/api/`;

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json'
//   }
// };

// export const fetchAdvert = async () => { 
//     try {
//         const responce = await axios.get(`${URL}adverts`, options)
//         console.log(responce.data);
//         // return responce.data.results;
//     }
//     // .then(response => response.data.results)
//         catch (error) {
//     console.error('Error fetching adverts:', error);
//             throw error;
//         };
// };

import axios from "axios";
axios.defaults.baseURL = 'https://661fafdb16358961cd9523c1.mockapi.io/api';
// const params = {
//     page : 1,
//     limit : 4,
//     completed: false
//   };
export const fetchAdverts = async (params) => {
  const response = await axios.get('/adverts', {params});
  return response.data;
};

// export const fetchAdverts = async (page = 1, limit = 4, completed = false) => {
//   const url = `https://661fafdb16358961cd9523c1.mockapi.io/api/adverts`;
//   const params = {
//     page,
//     limit,
//     completed
//   };

//   try {
//     const response = await axios.get(url, { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching adverts:', error);
//     throw error;
//   }
// };

