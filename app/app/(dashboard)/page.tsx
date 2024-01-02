import Home from "./home";
import Sidebar from "./sidebar";

const Page = () => {
  return <Home sidebar={<Sidebar />} />;
};

export default Page;
