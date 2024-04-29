/* eslint-disable react/prop-types */
import React from "react";
import './styles.css'
import { useState } from "react";
import { Collapse, Button } from "@mui/material";

export default function ExpandedCard({ post, style, setStyle }) {
  const [expanded, setExpanded] = useState(-1);

  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? -1 : id);
    setStyle(!style)
  };

  return (
    <>
      <section className="posts-cards-inner-wrapper">
        <div className="posts-card-text-container">
          <p className="shortText" style={{ height: (expanded === post?.id) ? "auto" : "96px" }}>
            {post?.description}
          </p>
          <Collapse
            sx={{ margin: '0px', padding: '0px' }}
            className="postsCards-collapse-div"
            in={expanded === post?.id}
            out={expanded === post?.id}
            timeout={"auto"}
            unmountOnExit
          >
          </Collapse>
        </div>
        <div className="posts-card-button-container">
          <Button
            className='posts-cards-button'
            sx={{ textTransform: "none" }}
            variant="text"
            expand={expanded ? "true" : undefined}
            onClick={() => handleExpandClick(post?.id)}
            aria-expanded={expanded === post?.id}
            aria-label="show more"
          >
            {(expanded === post?.id) ? (
              <p className="see-more">Ver menos</p>
            ) : (
              <p className="see-more">Ver mas</p>
            )}
          </Button>
        </div>
      </section>
    </>
  );
}
