// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// const headers = {
//     Authorization: "bearer " + TMDB_TOKEN,
// };

// export const fetchDataFromApi = async (url, params) => {
//     try {
//         const { data } = await axios.get(BASE_URL + url, {
//             headers,
//             params,
//         });
//         return data;
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
// };




import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDViYzFmM2U4MjM3YzZhMDZlMGUyYzE1Y2YyODQzMiIsInN1YiI6IjY1ODJkYWU2ZTgxMzFkNDE3OGE0YTkyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ks_CweLtTMzFyoDBOYImRvPbnNt0J9Hm8A8Mbazehzc";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

