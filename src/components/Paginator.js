import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { switchPage } from "../redux/actions/appActions";

export const Paginator = () => {
  const { data, currentPage } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onPrevClick = () => {
    if (currentPage > 1) {
      dispatch(switchPage(currentPage - 1));
    }
  };

  const onNextClick = () => {
    if (currentPage < data.total_pages) {
      dispatch(switchPage(currentPage + 1));
    }
  };

  const PaginatorBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "10px",
    padding: "20px",
    margin: 5,
    backgroundColor: "#272727",
    borderColor: "#656565",
    color: "#eeeff2",
  }));

  return (
    <PaginatorBox>
      <Box sx={{ flex: 1 }}>
        <Button onClick={onPrevClick}>Previous</Button>
      </Box>
      <Box sx={{ flex: 1, justifySelf: "center", textAlign: "center" }}>
        Page represents {currentPage == 1 ? 1 : (currentPage - 1) * 5} -{" "}
        {data.total_pages == currentPage ? data.total : currentPage * 5} of
        total {data.data && data.total} items.
      </Box>
      <Box sx={{ flex: 1, textAlign: "right" }}>
        <Button onClick={onNextClick}>Next</Button>
      </Box>
    </PaginatorBox>
  );
};