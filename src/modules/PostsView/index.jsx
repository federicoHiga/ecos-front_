import React, { useEffect } from "react";
import "./styles.css";
import PostsCard from "../../components/PostsCard";
import SearchByChildren from "../../components/SearchFlexible";
import { useLocation } from "react-router-dom";
import { PostsData } from "../../utils/data/postsMock";

export default function PostsView() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SearchByChildren>
      <div className="postsView-section">
        <div className="postsView-container">
        {PostsData.slice(0, 8).map((post) => (
        <PostsCard
          key={post.id}
          title={post.title}
          img1={post.img1}
          img2={post.img2}
          img3={post.img3}
          date={post.date}
          shortDescription={post.shortDescription}
          longDescription={post.longDescription}
        />
        ))}
        </div>
      </div>
    </SearchByChildren>
  );
}
