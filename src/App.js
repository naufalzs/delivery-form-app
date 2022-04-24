import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import BackLink from "./components/BackLink";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import Stepper from "./components/Stepper/Index";
import {
  Container,
  MainCard,
  MainContent,
} from "./components/styles/Container.styled";

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
    red: "#EF4444",
  },
  media: {
    mobile: "768px",
  },
};

function App() {
  // const globalState = useSelector((state) => state);
  const activeStep = useSelector((state) => state.step.activeStep);
  // console.log(globalState.user.form);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainCard>
          <Stepper />
          {activeStep !== 3 && <BackLink />}
          <MainContent extraMargin={activeStep === 3}>
            <ContentLeft />
            <ContentRight />
          </MainContent>
        </MainCard>
      </Container>
    </ThemeProvider>
  );
}

export default App;
