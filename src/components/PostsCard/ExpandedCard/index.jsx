import React from "react";
import "./styles.css";
import { useState } from "react";
import { CardActions, Collapse, Button } from "@mui/material";
import axios from "axios";
import useUser from "../../../utils/services/hooks/useUser";
import useGetAll from "../../../utils/services/hooks/useGetAll";


export default function ExpandedCard({post, style, setStyle}) {
  // const { token, user } = useUser();
  const [expanded, setExpanded] = useState(-1);

  const handleExpandClick = (id) => {
    
    setExpanded(expanded === id ? -1 : id);
    setStyle(!style)
  };
  
  function shortText (description, words){
    const word = description.split(' ');
    return word.slice(0, words).join(' ') + '...';
  }

  const shortDescription = shortText(post?.description, 30);

  return (
    <CardActions disableSpacing className="postsCards-expand-div">
      <p className="shortText" style={{ display: (expanded === post?.id) ? "none" : "block" }}>
        {shortDescription}
      </p>
      <Collapse
        in={expanded === post?.id}
        out={expanded === post?.id}
        timeout={"auto"}
        unmountOnExit
        className="postsCards-expand-div"
      >
        <p className="longText">{post?.description}</p>
      </Collapse>
      <Button
        sx={{ textTransform: "none" }}
        variant="text"
        expand={expanded ? "true" : undefined}
        onClick={()=> handleExpandClick(post?.id)}
        aria-expanded={expanded === post?.id}
        aria-label="show more"
      >
        {(expanded === post?.id) ? (
          <p className="see-more">Ver menos</p>
        ) : (
          <p className="see-more">Ver mas</p>
        )}
      </Button>
    </CardActions>
  );
}
