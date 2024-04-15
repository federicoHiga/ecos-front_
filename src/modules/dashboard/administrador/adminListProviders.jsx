import { Typography } from "@mui/material";
import styles from "./adminListProviders.module.css";
import { useEffect, useState } from "react";
import useGetAll from "../../../utils/services/hooks/useGetAll";
import dataButtonsAdmin from "../../../utils/data/dataButtonsAdmin";
import useUser from "../../../utils/services/hooks/useUser";

export default function AdminListProviders() {
  const [buttonSelected, setButtonSelected] = useState(dataButtonsAdmin[0]);
  const [buttonsShow, setButtonsShow] = useState(dataButtonsAdmin.slice(0,3))
  const {token} = useUser()
  const { data, error, loading } = useGetAll({url:buttonSelected?.url,token});


  const handlerFindeProviders = (event) => {
    if(event.target.id<1)setButtonsShow(dataButtonsAdmin.slice(0,3))
    if(event.target.id>dataButtonsAdmin.length-3)setButtonsShow(dataButtonsAdmin.slice(dataButtonsAdmin.length-3,dataButtonsAdmin.length))
    
    setButtonSelected(dataButtonsAdmin.find((a)=>a.name === event.target.name))
  };

  return (
    <div className={styles.container}>
      <Typography variant="titulos">Proveedores</Typography>
      <div className={styles.ContainerlistButtons}>
        {
          buttonsShow.map((butt,index)=>{
            return(
              <button
              type="button"
              className={`${styles.buttonTypeStatus} ${buttonSelected.name===butt.name? styles.buttonSelected:null}`}
              onClick={handlerFindeProviders}
              name={butt.name}
              id={index}
            >
              {butt.title}
            </button>
            )
          })
        }
       
      </div>
      <div style={{ display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", gap: "8px", width: "100%" }}>
        {data?.data?.map((provider, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.containerName}>
                <h1 className={styles.name}>{provider.name} </h1>
                <div className={styles.line}></div>
                <h2 className={styles.subName}>{provider.shortDescription}</h2>
              </div>
              <button className={styles.buttonCard} id={provider.id}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z"
                    fill="#222222"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
