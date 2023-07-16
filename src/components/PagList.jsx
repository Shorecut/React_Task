import { usePostContext } from "../contexts/PostContext";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PagList() {
  const { getOnePost, getPagination, totalPages, currentPage } =
    usePostContext();
  return (
    <Stack spacing={2}>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "20px",
        }}
        count={10}
      />
    </Stack>
  );
}

export default PagList;
