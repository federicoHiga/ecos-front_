/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import "./styles.css"
import Carrousel from "./Carrousel"
import ExpandedCard from "./ExpandedCard"
import { useLocation } from "react-router-dom"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import useUser from "../../utils/services/hooks/useUser"
import useDelete from "../../utils/services/hooks/deleteHook"
import AlertSuccesErrorModal from "../modals/alertErrorSucces/alertErrorSuccesModal"

export default function PostsCard({ post,refreshFunction }) {
  const {
    title,
    fechaCreacion,
    description,
    imagePublicDtoList,
    id,
    user,
    cantVisualizations
     
  } = post
  const location = useLocation()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [openModel, setOpenModel] = useState(false)
  const [parrafo, setParrafo] = useState("")
  const [typeModal, setTypeModal] = useState(null)
  const { token } = useUser()
  // console.log("DATA post", id)

  const handleCloseModal = () => {
    refreshFunction()
    setOpenModel(false)
    setParrafo("")
    setTypeModal("")

  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOcultar = async (id, event) => {
    try {
      await useDelete({ url: `publication/delete/${id}`, token })
      setOpenModel(true)
      setParrafo("Se elimino la publicacion de forma correcta")
      setTypeModal("succes")
    } catch (error) {
      console.log(error)
    }
  }

  const isAdminRoute = () => {
    return location.pathname.startsWith("/admin/publications")
  }
  // console.log("post desde postcard",imagePublicDtoList )
  return (
    <>
      <section className="postsCards-section">
        <div className="buttonTitleSection">
          <h1>{title}</h1>
          {isAdminRoute() ? (
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: "15ch",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>Editar</MenuItem>
                <MenuItem onClick={(event) => handleOcultar(id, event)}>
                  Ocultar
                </MenuItem>
              </Menu>
            </div>
          ) : null}
        </div>
        <Carrousel images={imagePublicDtoList} />
        <h2>{fechaCreacion}</h2>
        <ExpandedCard post={post} />
        <AlertSuccesErrorModal
          boolOpen={openModel}
          parrafo={parrafo}
          closeFuncion={handleCloseModal}
          type={typeModal}
        />
      </section>
    </>
  )
}
