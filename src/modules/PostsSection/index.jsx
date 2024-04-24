import { Link } from "react-router-dom";
import PostsCard from "../../components/PostsCard/index";
import "./styles.css";
import useGetToken from "../../utils/services/hooks/useGetToken";
import { useEffect, useState } from "react";
import useGetAll from "../../utils/services/hooks/useGetAll";

function PostsSection() {
  // const { data, loading, error } = useGetToken(
  //   "publication"
  //   // "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoaWdhbWFyYWRvbmFmZWRlcmljb0BnbWFpbC5jb20iLCJyb2xlcyI6IkFETUlOSVNUUkFET1IiLCJpYXQiOjE3MTE0NjU0MzcsImV4cCI6MTcxMTQ2OTAzN30.rG72XsUQ2n3mY4Dh9gWdp3pFuGnsuakj6WFx0chNUR565Ww_KGwh-kL3Xk3MhbVLmWQg4vaN283buozLmalFtA"
  // );
  // console.log("dataPost", data);

const [posts, setPosts ]= useState([])

const {data, loading, error} = useGetAll({
  url:"publication",
  needsAuth: false,
})

useEffect(()=>{
  if(data?.data?.length >=0 ){
    // console.log("PostSection: ", data);
    setPosts(data?.data)
  }
  
},[data])

  return (
    <section className="posts-section">
      <div className="posts-section-title">
        <h1 className="title">Publicaciones</h1>
        <h2>Impulsando transformaciones</h2>
      </div>
      <div className="posts-section-cards">
        {posts?.slice(0, 3)?.map((post) => (
        <PostsCard key={post.id} post={post} />
      ))}
      </div>
      <Link to={"/posts"}>
        <button className="posts-section-button">Ir a Publicaciones</button>
      </Link>
    </section>
  );
}

export default PostsSection;