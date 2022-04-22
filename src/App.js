import "./App.css";
import { ThemeProvider } from "styled-components";
import { Container, MainContent } from "./components/styles/Container.styled";
import { MainCard } from "./components/styles/MainCard.styled";
import Stepper from "./components/Stepper/Index";
import BackLink from "./components/BackLink";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
const theme = {
  colors: {
    blackSoft: "#00000090",
    blackTransparent: "#00000080",
    peach: "#FFFAE6",
    orange: "#FF8A00",
    orangeTransparent: "#FF8A0030",
    gray: "#EEEEEE",
    grayInput: "#E5E7EB",
    grayDisabled: "#C9C9C9",
    green: "#1BD97B",
    greenTransparent: "#1BD97B30",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainCard>
          <Stepper />
          <BackLink />
          <MainContent>
            <ContentLeft />
            <ContentRight />
          </MainContent>
        </MainCard>
      </Container>
    </ThemeProvider>
  );
}

export default App;
