import React from "react";
import "./styles.css";
import { useState } from "react";
import { CardActions, Collapse, Button } from "@mui/material";
import axios from "axios";
import useUser from "../../../utils/services/hooks/useUser";
import useGetAll from "../../../utils/services/hooks/useGetAll";


export default function ExpandedCard({post}) {
  // const { token, user } = useUser();
  const [expanded, setExpanded] = useState(false);
  


  const handleClick = async () => {
    if (expanded) handleExpandClick();
    if (!expanded) {
      try {
        handleExpandClick();
      } catch (error) {
        console.error("error:", error);
      }
    }
  };

  const handleExpandClick = () => {
    console.log(post)
    setExpanded(!expanded);
  };

  return (
    <CardActions disableSpacing className="postsCards-expand-div">
      <p className="shortText" style={{ display: expanded ? "none" : "block" }}>
        {post?.description}
      </p>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className="postsCards-expand-div"
      >
        <p className="longText">{post?.description}</p>
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
