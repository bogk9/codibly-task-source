import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Results } from "./components/Results";
import { Paginator } from "./components/Paginator";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eeeff2",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            height: "100vh",
            paddingLeft: 50,
            paddingRight: 50,
          }}
        >
          <SearchBar />
          <Results />
          <Paginator />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;