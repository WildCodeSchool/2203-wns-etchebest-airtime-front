import type { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authentification from "./Authentification";

const Home: NextPage = () => {
  return <Authentification />;
};

export default Home;
