import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { usePostContext } from "../contexts/PostContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CommentModal = ({ item }) => {
  const { onePost, getOnePost } = usePostContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getOnePost(item.id);
  }, []);

  return (
    <div>
      <Button onClick={handleOpen} size="small">
        Comments
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {onePost.email}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {onePost.comments}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Published: {onePost.dateModified}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CommentModal;
