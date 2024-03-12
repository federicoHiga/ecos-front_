import { useEffect, useState } from "react";
import instanceAxios from "../axiosConfig";

export default function useGetByNameHook(props) {
  const { url, name } = props;

  const [data, setData] = useState(null);
  const [error, setError] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        const response = await instanceAxios.get(url, { params: {name:name} });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError({ status: true, message: "No se pudo traer la informacion" });
        setData(null)
      }
    };
    get();
  }, [url,name]);

  return { data, loading, error };
}
