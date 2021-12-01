import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import styled from "styled-components";

const BlogShowPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const blogInfo = blogs.find((p) => p.id === id);
    setBlog(blogInfo);
  }, []);
  return (
    <>
      {blog ? (
        <div style={{ width: "500px", height: "500px" }}>
          <div style={{ width: "80%", height: "100%" }}>
            <h1>{blog.name}</h1>
            <h2>{blog.story}</h2>
            <img src={blog.pic} alt="" />
          </div>
        </div>
      ) : (
        <div>
          <h1>Undefined Route</h1>
        </div>
      )}
    </>
  );
};

export default BlogShowPage;
