import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8800/api/portfolio');
        setPosts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return posts;
};

export default useFetch;
