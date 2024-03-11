import PostsCard from '../../components/PostsCard/index';
import './styles.css';

function PostsSection() {

    return (
        <section className="posts-section">
            <div className="posts-section-title">
                <h1 className='title' >Publicaciones</h1>
                <h2 >Impulsando transformaciones</h2>
            </div>
            <PostsCard />
            <PostsCard />
            <button className='posts-section-button'>Ir a Publicaciones</button>
        </section>
    )
}

export default PostsSection;