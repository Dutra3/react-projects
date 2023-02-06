import { useEffect, useState } from 'react';
import { blogFetch } from '../axios/config';
import './Home.css';
import { Link } from 'react-router-dom';

interface PostProps {
    id: number;
    title: string;
    body: string;
};

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            const response = await blogFetch.get(`/posts`);
            const data = response.data;

            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='home'>
            <h1>Ultimos posts</h1>
            {posts.length === 0 ? 
            (
                <p>Carregando...</p>
            ) : (
                posts.map((post: PostProps)  => (
                    <div className='post' key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
                    </div>
                ))
            )}
        </div>
    );
};

export { Home };