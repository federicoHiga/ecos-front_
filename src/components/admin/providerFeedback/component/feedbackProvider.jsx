import { TextField, Button } from "@mui/material";
import "./feedbackProvider.css";
import { Margin } from "@mui/icons-material";
import { useEffect, useState } from "react";
import usePost from "../../../../utils/services/hooks/usePost";
import useUpdate from "../../../../utils/services/hooks/useUpdate";
import useUser from "../../../../utils/services/hooks/useUser";
export default function FeedbackProvider({
  handlerChangeEdit,
  editBool,
  feedback,
  handleBlur,
  status,
  id
}) {
    const {token} = useUser()
  const [feedbackText, setFeedbackText] = useState(feedback);
  useEffect(() => {
    setFeedbackText(feedback);
  }, [feedback]);
  const handlerEdit = () => {
    handlerChangeEdit();
  };
  const handleSubmit = async () => {
    try {
       await useUpdate({url:`supplier/changeStatus/${id}`,token,body:{status,feedback:feedbackText}})
    } catch (error) {
        console.log(error)
    }

  };
  const handlerChange = (event) => {
    setFeedbackText(event.target.value);
  };

  if (!editBool) {
    return (
      <div className="container-feedback">
        <div className="container-title">
          <h1 className="editar-text">Devolución del proveedor</h1>
          <button onClick={handlerEdit}>
            <span className="editar-text">Editar</span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
            >
              <path
                d="M7.70496 6L1.70496 0L0.294955 1.41L4.87496 6L0.294955 10.59L1.70496 12L7.70496 6Z"
                fill="#FAFAFA"
              />
            </svg>
          </button>
        </div>
        <div>
          <p>{feedbackText}</p>
        </div>
      </div>
    );
  }
  if (editBool) {
    return (
      <div style={{ width: "80%", marginBottom:"50px" }}>
        <div
          style={{
            backgroundColor: "#EAEAEA",
            borderTopRightRadius: "4px",
            borderTopLeftRadius: "4px",
            padding: "8px",
            borderBottom: "1px solid black",
            display:"flex",
            flexDirection:"column"

          }}
        >
          <span className="text-edit">Edición de devolución al Proveedor</span>
          <TextField
            multiline
            rows={7}
            required
            name="email"
            onChange={handlerChange}
            value={feedbackText}
            onBlur={handleBlur}
            variant="standard"
            sx={{
              paddingBottom: "100px",
              border: "none",
              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none", // Eliminar la línea inferior cuando se pasa el mouse (hover)
              },
            }}
          />
        </div>
        <div style={{display:"flex", flexDirection:"row", paddingLeft:"16px", paddingRight:"16px", justifyContent:"space-between",marginTop:"4px"}}>
          <span >Máximo 300 caracteres </span>
          <span>{feedbackText.length}/300 </span>
        </div>

        <button
          onClick={handleSubmit}
          style={{ width: "100%", marginTop: "16px" }}
        >
          <span style={{ width: "100%", textAlign: "center" }}>
            {" "}
            Guardar cambios
          </span>
        </button>
      </div>
    );
  }
}
