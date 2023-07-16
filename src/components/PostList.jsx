import React, { useEffect, useState } from "react";
import { usePostContext } from "../contexts/PostContext";
import PostItem from "./PostItem";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormControl, FormLabel } from "@mui/material";

const PostList = () => {
  const { posts, getPosts } = usePostContext();
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    setTimeout(() => {
      getPosts();
    }, 500);
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <Box>
        <input
          className="inp-search"
          type="search"
          label="Search"
          placeholder="Search"
          onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
        />
      </Box>

      <FormControl sx={{ mb: 3, mt: 5 }}>
        <FormLabel id="demo-radio-buttons-group-label">Authors</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="All"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="All"
            control={<Radio />}
            label="All"
            onChange={(e) => setSearchVal("")}
          />

          <FormControlLabel
            value="Thomas Edison"
            control={<Radio />}
            label="Thomas Edison"
            onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
          />
          <FormControlLabel
            value="Charles Dickens"
            control={<Radio />}
            label="Charles Dickens"
            onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
          />
          <FormControlLabel
            value="Albert Einstein"
            control={<Radio />}
            label="Albert Einstein"
            onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
          />
        </RadioGroup>
      </FormControl>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          rowGap: "20px",
        }}
      >
        {posts.length > 0 ? (
          posts
            .filter((item) => {
              return searchVal.toLowerCase() === ""
                ? item
                : item.author.toLowerCase().includes(searchVal);
            })
            .map((item) => <PostItem item={item} key={item.id} />)
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </div>
  );
};

export default PostList;
