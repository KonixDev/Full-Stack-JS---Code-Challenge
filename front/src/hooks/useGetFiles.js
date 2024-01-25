import React, { useEffect, useState } from "react";
import { API_URL } from "../const/CONSTS";

export const useGetFiles = (searchFileName) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData().then((data) => {
      setLoading(false);
      setData(data);
    });
  }, [searchFileName]);

  const fetchData = async () => {
    try {
      reset();
      
      const URL = getURL(searchFileName);
      const response = await fetch(URL);
      const dataJson = await response.json();

      if (!response.ok) throw new Error(dataJson.message);

      //Will wrap the data in an array
      if (searchFileName) {
        return [dataJson];
      }

      return dataJson;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(true);
    setError(null);
  };

  return { data, loading, error };
};

/**
 * it will get the correct URL based if fileName is provided or not
 * @param {String || Undefined} fileName
 * @returns
 */
const getURL = (searchFileName) => {
  return searchFileName
    ? `${API_URL}/files/data?fileName=${searchFileName}`
    : `${API_URL}/files/data`;
};
