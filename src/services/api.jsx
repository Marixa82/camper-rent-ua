import axios from "axios";
export const PROJECT_TOKEN = "661fafdb16358961cd9523c1";
export const URL = `https://${PROJECT_TOKEN}.mockapi.io/api/`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

export const fetchAdvert = () => { 
    return axios.get(`${URL}adverts`, options)
.then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching adverts:', error);
            throw error;
        });
};