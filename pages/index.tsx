import type { NextPage } from "next";
import { toast } from "react-toastify";

import { Dashboard } from "../components/Dashboard";

const Home: NextPage = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <Dashboard />
    </>
  );
};

export default Home;
