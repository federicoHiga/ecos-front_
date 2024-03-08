import PostsCard from '../../components/PostsCard/index';
import './styles.css';

function PostsSection() {

    return (
        <section className="publicaciones-section">
            <div className="publicaciones-title">
                <h1 className='titulo' >Publicaciones</h1>
                <h2 >Impulsando transformaciones</h2>
            </div>
            <PostsCard />
        </section>
    )
}

export default PostsSection;