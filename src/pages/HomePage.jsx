import React from "react";
import PostList from "../components/PostList";
import PagList from "../components/PagList";
import { usePostContext } from "../contexts/PostContext";

const HomePage = () => {
  return (
    <div>
      <PostList />
      <PagList />
    </div>
  );
};

export default HomePage;
