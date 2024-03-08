import PostsCard from '../../components/PostsCard/index';
import './styles.css';

function PostsSection() {

    return (
        <section className="Publicaciones-section">
            <div className="Publicaciones-title">
                <h1 >Publicaciones</h1>
                <h2 >Impulsando transformaciones</h2>
            </div>
            <PostsCard />
        </section>
    )
}

export default PostsSection;