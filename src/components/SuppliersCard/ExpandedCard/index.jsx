import React from "react";
import { Dialog, useTheme, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./styles.css";

// eslint-disable-next-line react/prop-types
const ExpandedCard = ({ open, handleClose }) => {
  const theme = useTheme();

  return (
    <Dialog onClose={handleClose} open={open} className="expanded-card-dialog">
      <header className="expanded-card-header">
        <IconButton
          aria-label="close-card"
          onClick={handleClose}
          className="expanded-card-close-button"
        >
          <CloseIcon />
        </IconButton>
      </header>

      <section className="expanded-card-inner-wrapper">
        <div className="category-img-wrapper">
          <div className="expanded-card-category-container">
            <Typography
              className="expanded-card-category"
              sx={{ fontFamily: theme.typography.fontFamily }}
            >
              Categoría
            </Typography>
          </div>
          <img
            className="expanded-card-img"
            src="https://s3-alpha-sig.figma.com/img/1d2e/ea59/1c27a72869b176f8ac7bc5f75f460594?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oYjO3J7M9kSb-5cSRgDaIamiKJJwgMy6m3vC7ElW6UnS28UyfU1Da5tCgyJfrsXD-qh6FffOJl~Bvy~HiwBHRWekqzsX8KwjsyXg-t6avJbImm5JtRd3~jkEcVdCR~Ig2i7WjAsZbdtdeiHij2~vOcBqXTToiWVXYeFxOAVlwhJ5JHr2FLaF-snJsXOOBm0jT-byexy2LVloD7xwGSQQe1X90DYzETH9k8hm~2Q~hX1-fP4H6IsUo7nJFphQZTLgnkCU2NYD0vaR-iIVRRqVj~QyZ-gAtstlNY0Z7sbf9pw15ObfHwmXa-v-PzlFqI06NnYI0k2YK6ZG9wDBb3GxuQ__"
            alt="Producto"
          />
        </div>

        <div className="expanded-card-data-container">
          <Typography
            variant="subtitle1"
            className="expanded-card-title"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "18px",
              fontWeight: theme.typography.subtitulos.fontWeight,
              lineHeight: "24px",
            }}
          >
            Proveedor
          </Typography>
          <Typography
            variant="subtitle"
            className="expanded-card-subtitle"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "13px",
              fontWeight: theme.typography.parrafos.fontWeight,
              lineHeight: "18px",
            }}
          >
            Breve descripcion
          </Typography>
          <section className="expanded-card-location-container">
            <div className="location-icon-container">
              <LocationOnOutlinedIcon
                sx={{ color: "#4e169d", width: "20px", height: "20px" }}
              />
            </div>
            <Typography variant="body1" className="expanded-card-location">
              Godoy Cruz, Mendoza, Argentina
            </Typography>
          </section>
        </div>
      </section>

      <section className="expanded-card-desc-container">
        <div className="expanded-card-description">
          <Typography
            variant="body1"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "16px",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "20px",
              padding: 0,
            }}
          >
            Lavanda es un proyecto familiar. Perseguimos una cosmética efectiva, magistral y
            con personalidad. Nuestro objetivo es hacer productos que enamoren, que cuiden al
            planeta, con principios activos que dejen el pelo sano y la piel bella.
          </Typography>
        </div>
        <div className="expanded-card-contact-container">
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "16px",
              fontWeight: theme.typography.subtitulos.fontWeight,
              lineHeight: "25px",
              padding: 0,
            }}
          >
            Contactanos
          </Typography>
          <div className="social-media-icons-container">
            <figure className="social-media">
              <a
                href="https://stackoverflow.com//"
                target="_blank"
                rel="noreferrer"
                className="social-media-icon-container"
              >
                <WhatsAppIcon className="social-media-icon" />
              </a>
              <figcaption className="social-media-title">Whatsapp</figcaption>
            </figure>
            <figure className="social-media">
              <a
                href="https://stackoverflow.com//"
                target="_blank"
                rel="noreferrer"
                className="social-media-icon-container"
              >
                <InstagramIcon className="social-media-icon" />
              </a>
              <figcaption className="social-media-title">Instagram</figcaption>
            </figure>
            <figure className="social-media">
              <a
                href="https://stackoverflow.com//"
                target="_blank"
                rel="noreferrer"
                className="social-media-icon-container"
              >
                <FacebookIcon className="social-media-icon" />
              </a>
              <figcaption className="social-media-title">Facebook</figcaption>
            </figure>
            <figure className="social-media">
              <a
                href="https://stackoverflow.com//"
                target="_blank"
                rel="noreferrer"
                className="social-media-icon-container"
              >
                <EmailOutlinedIcon className="social-media-icon" />
              </a>
              <figcaption className="social-media-title">Mail</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </Dialog>
  );
};

export default ExpandedCard;
