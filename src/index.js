import { StrictMode } from "react";
import ReactDOM from "react-dom";

import NavBar from "./NavBarComponent";
import SideNavBar from "./SideNavComponent";
import FooterBar from "./FooterComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NavBar />
    <SideNavBar />
    <FooterBar />
  </StrictMode>,
  rootElement
);
