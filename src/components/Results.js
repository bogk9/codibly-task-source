import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/actions/appActions";

const ResultsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "solid",
  borderWidth: "2px",
  borderRadius: "10px",
  margin: 5,
  backgroundColor: "#272727",
  borderColor: "#656565",
  color: "#eeeff2",
  overflow: "hidden",
}));

const ListEntity = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignSelf: "stretch",
  padding: 10,
  ":nth-of-type(odd)": {
    backgroundColor: "#3c3c3c",
  },
  webkitTransition: "background-color 1000ms linear",
  msTransition: "background-color 1000ms linear",
  transition: "background-color 1000ms linear",
}));

export const Results = () => {
  let { data, currentPage, colors, idFilter } = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [currentPage]);

  return (
    <ResultsBox>
      {data.data &&
        data.data.map((item) => {
          if (idFilter && item.id != idFilter) return;
          return (
            <ListEntity
              key={item.id}
              sx={{ backgroundColor: colors ? "" : item.color + "!important;" }}
            >
              <Box sx={{ flex: 1 }}>
                #{item.id}, on {item.year}
              </Box>{" "}
              <Box sx={{ flex: 1, justifySelf: "right", textAlign: "right" }}>
                {item.name}
              </Box>{" "}
              <Box
                sx={{
                  height: 10,
                  width: 10,
                  backgroundColor: item.color,
                  borderRadius: "50%",
                  alignSelf: "center",
                  marginLeft: 1.2,
                }}
                display="inline"
              />{" "}
            </ListEntity>
          );
        })}
    </ResultsBox>
  );
};