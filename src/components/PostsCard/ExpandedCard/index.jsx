import React from "react";
import "./styles.css";
import { useState } from "react";
import { CardActions, Collapse, Button } from "@mui/material";
import axios from "axios";
import useUser from "../../../utils/services/hooks/useUser";
import useGetAll from "../../../utils/services/hooks/useGetAll";


export default function ExpandedCard(props) {
  const { description, id } = props;
  const { user } = useUser();
  const [expanded, setExpanded] = useState(false);
  console.log("props expand", props);

  // const shortDescription =
  //   description.slice(0, 150) + (description.length > 100 ? "..." : "");

  const { data } = useGetAll({
    url: `publication/getById/${id}/${user.id}`,
    needsAuth: true,
    token: user.token
  })

  const handleClick = async () => {
    if (expanded) handleExpandClick();
    if (!expanded) {
      try {
        handleExpandClick();
        console.log("Views + :", data);
      } catch (error) {
        console.error("error:", error);
      }
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardActions disableSpacing className="postsCards-expand-div">
      <p className="shortText" style={{ display: expanded ? "none" : "block" }}>
        {description}
      </p>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className="postsCards-expand-div"
      >
        <p className="longText">{description}</p>
      </Collapse>
      <Button
        sx={{ textTransform: "none" }}
        variant="text"
        expand={expanded ? "true" : undefined}
        onClick={handleClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        {expanded ? (
          <p className="see-more">Ver menos</p>
        ) : (
          <p className="see-more">Ver mas</p>
        )}
      </Button>
    </CardActions>
  );
}
