import { Link } from "react-router-dom";
import PostsCard from "../../components/PostsCard/index";
import "./styles.css";
import { PostsData } from "../../utils/data/postsMock";
import useGetAll from "../../utils/services/hooks/useGetAll";

function PostsSection() {
  // const navigate = useNavigate();
  const { data, error, loading } = useGetAll({ url: `publication` });

  console.log("data", data?.data);

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
