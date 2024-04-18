/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./styles.css";
import Carrousel from "./Carrousel";
import ExpandedCard from "./ExpandedCard";
import { useLocation } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function PostsCard({ post }) {
  const { title, fechaCreacion, description, imagePublicDtoList, id, user, cantVisualizations } = post;
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isAdminRoute = () => {
    return location.pathname.startsWith("/admin/publications");
  };
// console.log("post desde postcard",imagePublicDtoList )

  console.log('cantVisualizations', cantVisualizations)
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
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
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
                  width: '15ch',
                },
              }}
            >
                <MenuItem   onClick={handleClose}>
                  Editar
                </MenuItem>
                <MenuItem   onClick={handleClose}>
                  Ocultar
                </MenuItem>
            </Menu>
          </div>
          ) : null}
        </div>
        <Carrousel images={imagePublicDtoList} />
        <h2>{fechaCreacion}</h2>
        <ExpandedCard description={description} id={id} user={user.id} />
      </section>
    </>
  )
}
