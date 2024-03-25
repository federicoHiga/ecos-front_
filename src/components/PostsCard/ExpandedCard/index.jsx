import React from "react";
import './styles.css'
import { useState } from "react";
import { CardActions, Collapse, IconButton } from "@mui/material";

export default function ExpandedCard(props) {
  const { shortDescription, longDescription } = props

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardActions disableSpacing className="postsCards-expand-div">
      <p className="shortText" style={{ display: expanded ? 'none' : 'block' }} > 
        {shortDescription}</p>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className="postsCards-expand-div"
      >
        <p className="longText">
         {longDescription}
        </p>
      </Collapse>
      <IconButton
        expand={expanded ? "true" : undefined}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        {expanded ? (
          <p className="see-more">Ver menos</p>
        ) : (
          <p className="see-more">Ver mas</p>
        )}
      </IconButton>
    </CardActions>
  );
}
