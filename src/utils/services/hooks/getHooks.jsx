import { useEffect, useState } from "react";
import instanceAxios from "../axiosConfig";
import { SuppliersData } from "../../data/suppliersMock";

export default function useGetByNameHook(props) {
  const { url, name } = props;
  const [data, setData] = useState(null);
  const [error, setError] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filterForData = () =>{
      if(!name ) {
        setData(null)
        setLoading(true)
        return}
        const newData = SuppliersData.filter((s)=>s.name === name)
        console.log(newData)
      setData(newData)
      setLoading(false)
    }

     filterForData()
    const get = async () => {
      try {
        if(!name ) {
          setData(null)
          return}
        const response = await instanceAxios.get(url, { params: {name:name} });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError({ status: true, message: "No se pudo traer la informacion" });
        setData(null)
      }
    };
    // get();
  }, [url,name]);

  return { data, loading, error };
}
