import Global from "../styles/globalStyeles";
import { GlobalContainer } from "../styles/Container";

import { Outlet } from "react-router-dom";

function Layout({ pages }) {
  
  return (
    <GlobalContainer>
      <Global />
      <Outlet />
    </GlobalContainer>
  );
}

export default Layout;
