import { Link } from "react-router-dom";
import PostsCard from "../../components/PostsCard/index";
import "./styles.css";
import { PostsData } from "../../utils/data/postsMock";
import useGetToken from "../../utils/services/hooks/useGetToken";

const hardImages = [
  "https://res.cloudinary.com/dxatwbzff/image/upload/v1710415070/Quinto/1c27a72869b176f8ac7bc5f75f460594_fddnpc.jpg",
  "https://res.cloudinary.com/dpbuvii9v/image/upload/v1712264504/c1498999f8addebf3e800720a2445865_uzmafz.jpg",
  "https://res.cloudinary.com/dpbuvii9v/image/upload/v1712264503/ca3817b7e452c7de4602ccf498f7afd1_xfkd2x.png",
];

function PostsSection() {
  const { data, loading, error } = useGetToken(
    "publication"
    // "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoaWdhbWFyYWRvbmFmZWRlcmljb0BnbWFpbC5jb20iLCJyb2xlcyI6IkFETUlOSVNUUkFET1IiLCJpYXQiOjE3MTE0NjU0MzcsImV4cCI6MTcxMTQ2OTAzN30.rG72XsUQ2n3mY4Dh9gWdp3pFuGnsuakj6WFx0chNUR565Ww_KGwh-kL3Xk3MhbVLmWQg4vaN283buozLmalFtA"
  );

  return (
    <section className="posts-section">
      <div className="posts-section-title">
        <h1 className="title">Publicaciones</h1>
        <h2>Impulsando transformaciones</h2>
      </div>
      {data.slice(0, 3).map((post) => (
        <PostsCard key={post.id} post={post} images={hardImages} />
      ))}
      <Link to={"/posts"}>
        <button className="posts-section-button">Ir a Publicaciones</button>
      </Link>
    </section>
  );
}

export default PostsSection;
