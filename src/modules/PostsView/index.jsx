import React, { useEffect } from "react";
import "./styles.css";
import PostsCard from "../../components/PostsCard";
import SearchByChildren from "../../components/SearchFlexible";
import { useLocation } from "react-router-dom";
import useGetToken from "../../utils/services/hooks/useGetToken";

export default function PostsView() {
  const { pathname } = useLocation();

  const { data, loading, error } = useGetToken(
    "publication"
    // "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoaWdhbWFyYWRvbmFmZWRlcmljb0BnbWFpbC5jb20iLCJyb2xlcyI6IkFETUlOSVNUUkFET1IiLCJpYXQiOjE3MTE0NjU0MzcsImV4cCI6MTcxMTQ2OTAzN30.rG72XsUQ2n3mY4Dh9gWdp3pFuGnsuakj6WFx0chNUR565Ww_KGwh-kL3Xk3MhbVLmWQg4vaN283buozLmalFtA"
  );

  // const getImagePaths = (postData) => {
  //   return postData.imagePublicDtoList.map((imageObject) => imageObject.path);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SearchByChildren>
      <div className="postsView-section">
        <div className="postsView-container">
          {data?.map((post) => (
            <PostsCard key={post.id} post={post} />
          ))};
        </div>
      </div>
    </SearchByChildren>
  );
}
