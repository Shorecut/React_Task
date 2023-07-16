import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePostContext } from "../contexts/PostContext";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);
const Details = () => {
  const { onePost, getOnePost } = usePostContext();
  const params = useParams();
  useEffect(() => {
    getOnePost(params.id);
  }, []);
  return (
    <Card
      sx={{
        maxWidth: 475,

        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Comment
        </Typography>
        <Typography variant="h5" component="div">
          {onePost.author}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {onePost.dateAdded}
        </Typography>
        <Typography variant="body2">{onePost.content}</Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
          <Button color="success" variant="contained" size="small">
            Back
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Details;
