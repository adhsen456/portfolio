import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [posts, setPosts] = useState([]);
  const BASE_URL = 'https://portfolio-api-nine-iota.vercel.app/api/v1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${BASE_URL}/portfolio`);
        const { data } = result.data;
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return posts;
};

// const useFetch = async () => {
//   const BASE_URL = 'https://portfolio-api-nine-iota.vercel.app/api/v1';
//   const res = await axios.get(`${BASE_URL}/portfolio`);
//   console.log(res.data.data);
//   return res.data.data;
// };

export default useFetch;
