import PostsCard from "../../../components/PostsCard";
import useGetAll from "../../../utils/services/hooks/useGetAll";
import "./adminPublications.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const hardImages = [
  "https://res.cloudinary.com/dxatwbzff/image/upload/v1710415070/Quinto/1c27a72869b176f8ac7bc5f75f460594_fddnpc.jpg",
  "https://res.cloudinary.com/dpbuvii9v/image/upload/v1712264504/c1498999f8addebf3e800720a2445865_uzmafz.jpg",
  "https://res.cloudinary.com/dpbuvii9v/image/upload/v1712264503/ca3817b7e452c7de4602ccf498f7afd1_xfkd2x.png",
];
export default function AdminPublications() {
  const { data, error, loading } = useGetAll({ url: "publication" });
  const navigate = useNavigate()
  
  return (
    <div className="postsContainer">
      <Typography variant="titulos">Publicaciones</Typography>
      <button className="buttonCrearPublicacion" onClick={()=>navigate('/admin/publications/newPublication')}>Crear publicación</button>

        <div className="postsView-container">
        <Typography variant="subtitulos">Publicaciones cargadas</Typography>

          {data?.data?.map((post) => (
            <PostsCard key={post.id} post={post} images={hardImages} />
          ))}

        </div>
    </div>
  );
}
