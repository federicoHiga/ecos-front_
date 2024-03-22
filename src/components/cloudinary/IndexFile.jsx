import { useState } from "react";
import convertFileToBase64 from "../../utils/convert/convertFileToBase64";

export default function IndexFile({ functionLoad }) {
  const [file, setFile] = useState();

  const HandlerLoadFile = async (event) => {
    const loadedFile = event.target.files[0];
    const fileBase64 = await convertFileToBase64(loadedFile);
    //funcion para recuperar el string base64
    functionLoad(fileBase64);
    setFile(fileBase64);
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <input type="file" onChange={HandlerLoadFile} />
    </div>
  );
}
