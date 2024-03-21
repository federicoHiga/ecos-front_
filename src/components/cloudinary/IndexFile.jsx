import { useState } from "react"




export default function IndexFile(){
    const [file, setFile ] = useState()

    const HandlerLoadFile = (event) =>{
    setFile(event.target.files[0])
    }
    console.log(file)
    return(
        <input type="file" onChange={HandlerLoadFile} />
    )
}