import { Link } from "react-router-dom";
import PostsCard from "../../components/PostsCard/index";
import "./styles.css";
import { PostsData } from "../../utils/data/postsMock";
import useGetAll from "../../utils/services/hooks/useGetAll";
import useGetToken from "../../utils/services/hooks/useGetToken";

function PostsSection() {
  // const navigate = useNavigate();
  // const { data, error, loading } = useGetAll({ url: `publication/getAll` });

  // console.log("data", data?.data);

  // const { data, loading, error } = useGetToken(
  //   "publication/getAll",
  //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoaWdhbWFyYWRvbmFmZWRlcmljb0BnbWFpbC5jb20iLCJyb2xlcyI6IkFETUlOSVNUUkFET1IiLCJpYXQiOjE3MTE0NTM3ODQsImV4cCI6MTcxMTQ1NzM4NH0.0xDAsJ89x-ZEBf22jpBc5YlbbdZ-xF7fu080R5b1dwNsh9ZeDYJY0f6Sc0zzjuEaB5AduKqK3413HHT-CKV8IQ"
  // );
  // console.log("postdata", data);

  return (
    <section className="posts-section">
      <div className="posts-section-title">
        <h1 className="title">Publicaciones</h1>
        <h2>Impulsando transformaciones</h2>
      </div>
      {PostsData.slice(0, 3).map((post) => (
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
      <Link to={"/posts"}>
        <button className="posts-section-button">Ir a Publicaciones</button>
      </Link>
    </section>
  );
}

export default PostsSection;
