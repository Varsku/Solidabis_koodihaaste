import { useState, useEffect } from "react";
import Config from './config'

function useFetch(url) {
  const token = Config.jwt;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch( proxyUrl + url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };