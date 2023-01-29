import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import Heading from "../../components/Heading/Heading";
import PostCard from "../../components/PostCard/PostCard";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/home/articles");

        if (res.data) {
          setLoading(false);
          setPosts(res.data.articles);
        }
      } catch (err) {}
    };

    getPosts();
  }, []);

  console.log(posts);

  return (
    <div className="home">
      <Heading>Unusual blog</Heading>

      <div className="home_box">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
          />
        ))}
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default Home;
