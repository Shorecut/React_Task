import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

const postContext = createContext();

export const usePostContext = () => useContext(postContext);
const PostContext = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const [onePost, setOnePost] = useState({});
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function getPosts() {
    const { data } = await axios.get(API);
    setPosts(data);
  }

  async function getOnePost(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOnePost(data);
  }
  async function getPagination(page) {
    const response = await axios.get(API, {
      params: {
        _limit: 6,
        _page: page,
      },
    });

    const { data, headers } = response;
    const totalCount = headers["x-total-count"];

    setPosts(data);
    setTotalPages(Math.ceil(totalCount / 6));
    setCurrentPage(page);
  }

  const value = {
    posts,
    getPosts,
    onePost,
    getOnePost,
    getPagination,
    totalPages,
    currentPage,
  };
  return <postContext.Provider value={value}>{children}</postContext.Provider>;
};

export default PostContext;
