import IndexFile from "../../cloudinary/IndexFile";
import IndexFileEdit from "../../cloudinary/indexFileEdit";
import "./imagesPublication.css";

export default function ImagesPublicationList({
  listImages,
  handlerDeleteImage,
  handleEditImage
}) {

    const deleteImage = (event)=>{
        handlerDeleteImage(Number(event.target.id))
        console.log(event.target.id)
    }
    const editImage = (text,name, newName) =>{
        console.log(name)
        handleEditImage(text, name,newName)
    }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {listImages?.map((image,index) => {
        return (
          <div
            style={
              {
              backgroundImage:`url(${image.isBase64?("data:image/png;base64,"+image?.path):(image?.path)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "150px",
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "start",
              gap: "5px",
            }}
          >
            <button
              className="buttonStyle"
              id={`${index}`}
              onClick={deleteImage}
            >
              {" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 12 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.42857 5.5V13.8333H2.57143V5.5H9.42857ZM8.14286 0.5H3.85714L3 1.33333H0V3H12V1.33333H9L8.14286 0.5ZM11.1429 3.83333H0.857143V13.8333C0.857143 14.75 1.62857 15.5 2.57143 15.5H9.42857C10.3714 15.5 11.1429 14.75 11.1429 13.8333V3.83333Z"
                  fill="#FAFAFA"
                />
              </svg>
            </button>
            <IndexFileEdit name={image?.name} functionLoad={editImage}/>
          </div>
        );
      })}
    </div>
  );
}
