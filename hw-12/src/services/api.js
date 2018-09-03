import axios from 'axios';
const API_KEY = '5b5acec53381f4ba3dcec447cb39460a176c95534f3ac';

export const fetchUrl = ({link}) => {
  const url = `https://api.linkpreview.net/?key=${API_KEY}&q=${link}`;

  return axios
    .get(url)
    .then(res => console.log(res.data.hits))
    .catch(err => console.log('axios err : ', err));
};