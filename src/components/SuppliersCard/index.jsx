/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandedCard from "./ExpandedCard";
import "./styles.css";

export default function SuppliersCard({ supplier }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <Card
      className="card"
      onClick={handleOpen}
      sx={{
        maxWidth: 250,
        width: "152px",
        height: "248px",
        position: "relative",
        margin: 1.5,
        borderRadius: 2,
        overflow: "visible",
        zIndex: 1,
        boxShadow: "none",
      }}
    >
      <CardContent sx={{ padding: "10px" }}>
        <Box
          sx={{
            color: "#4E169D",
            minWidth: "96px",
            position: "absolute",
            top: "-4px",
            right: "0",
            border: 1,
            borderColor: "#00A364",
            borderRadius: 0.5,
            backgroundColor: "white",
            boxShadow: 5,
            textAlign: "center",
            padding: "3px 6px",
          }}
        >
          <h4 style={{ fontFamily: theme.typography.fontFamily, fontSize: "13px" }}>
            {supplier?.category?.category}
          </h4>
        </Box>
        <CardMedia
          sx={{ borderRadius: 1, width: "136px", height: "136px" }}
          component="img"
          // height="128"
          // width='304'
          image={supplier?.image}
          alt="Producto"
        />
        <Container className="text-container">
          <Box
            sx={{
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            <h4
              style={{
                fontFamily: theme.typography.fontFamily,
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {supplier?.name}
            </h4>
          </Box>
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <h5
              style={{
                fontFamily: theme.typography.fontFamily,
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              {supplier?.shortDescription}
            </h5>
          </Box>
          <div
            style={{
              display: "flex",
              marginTop: "15px",
              alignItems: "center",
            }}
          >
            <LocationOnOutlinedIcon
              sx={{
                color: "#4E169D",
                fontSize: "22px",
              }}
            />
            <Box>
              <h4
                style={{
                  fontFamily: theme.typography.fontFamily,
                  fontSize: "13px",
                  fontWeight: 400,
                }}
              >
                {supplier?.city}
              </h4>
            </Box>
          </div>
        </Container>
      </CardContent>
      {open && <ExpandedCard handleClose={handleClose} open={open} supplier={supplier} />}
    </Card>
  );
}
