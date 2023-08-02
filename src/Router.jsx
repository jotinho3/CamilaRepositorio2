import { Routes, Route, useLocation } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import WelcomeKit from "./pages/WelcomeKit";

//Pagina de roteamento 

const Router = () => {
  const location = useLocation();
  return (

      <Routes location={location} key={location.pathname}>
         <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/welcomekit" element={<WelcomeKit />} />
        </Route>
      </Routes>

  );
};

export default Router;
