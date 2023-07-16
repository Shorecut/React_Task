import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CommentModal from "./CommentModal";
const PostItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        onClick={() => navigate(`/details/${item.id}`)}
        component="img"
        alt="userImage"
        height="300"
        image="https://avatars.mds.yandex.net/i?id=8b7fff1350576163bb8729ff86d5f8ebf77f01f9-9229750-images-thumbs&n=13"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.content}
        </Typography>
      </CardContent>
      <CardActions>
        <CommentModal item={item} />
        {/*<Button size="small">Learn More</Button>*/}
      </CardActions>
    </Card>
  );
};

export default PostItem;
