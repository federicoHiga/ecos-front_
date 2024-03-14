import React, { useEffect } from "react";
import "./styles.css";
import PostsCard from "../../components/PostsCard";
import SearchByChildren from "../../components/SearchFlexible";
import { useLocation } from "react-router-dom";

export default function PostsView() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SearchByChildren>
      <div className="postsView-section">
        <div className="postsView-container">
          <PostsCard />
          <PostsCard />
          <PostsCard />
          <PostsCard />
          <PostsCard />
        </div>
      </div>
    </SearchByChildren>
  );
}
