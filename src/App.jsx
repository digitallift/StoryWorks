import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import AppRouter from "./AppRouter.jsx";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
