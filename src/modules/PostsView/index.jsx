import React, { useEffect } from "react";
import "./styles.css";
import PostsCard from "../../components/PostsCard";
import SearchByChildren from "../../components/SearchFlexible";
import { useLocation } from "react-router-dom";
import { PostsData } from "../../utils/data/postsMock";
import useGetToken from "../../utils/services/hooks/useGetToken";

export default function PostsView() {
  const { pathname } = useLocation();

  const { data, loading, error } = useGetToken(
    "publication/getAll",
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoaWdhbWFyYWRvbmFmZWRlcmljb0BnbWFpbC5jb20iLCJyb2xlcyI6IkFETUlOSVNUUkFET1IiLCJpYXQiOjE3MTE0NjU0MzcsImV4cCI6MTcxMTQ2OTAzN30.rG72XsUQ2n3mY4Dh9gWdp3pFuGnsuakj6WFx0chNUR565Ww_KGwh-kL3Xk3MhbVLmWQg4vaN283buozLmalFtA"
  );

  console.log("postdata", data);

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
              description={post.description}
            />
          ))}
        </div>
      </div>
    </SearchByChildren>
  );
}
