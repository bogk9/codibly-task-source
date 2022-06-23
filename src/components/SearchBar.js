import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { Button, Switch } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  setFilter,
  switchColor,
  switchPage,
} from "../redux/actions/appActions";
import { useState } from "react";

const SearchBarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
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

const IDTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#656565",
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "#eefff2",
    },
});

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [formNumber, setFormNumber] = useState();

  const onButtonClick = () => {
    dispatch(setFilter(formNumber));
    dispatch(switchPage(Math.ceil((formNumber || 1) / 5)));
  };

  return (
    <SearchBarBox>
      <Box sx={{ flex: 1 }}>
        Surprise switch: <Switch onChange={() => dispatch(switchColor())} />
      </Box>

      <Box sx={{ flex: 1, textAlign: "right" }}>
        <IDTextField
          size="small"
          inputProps={{
            style: {
              fontFamily: "nunito",
              color: "white",
              borderColor: "white",
            },
          }}
          sx={{ width: 100, input: { color: "white", fontSize: 20 } }}
          type="number"
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => setFormNumber(e.target.value)}
        />
        <Button
          variant="outlined"
          sx={{ height: 45, borderColor: "#15e77", marginLeft: 1 }}
          onClick={onButtonClick}
        >
          Submit
        </Button>
      </Box>
    </SearchBarBox>
  );
};