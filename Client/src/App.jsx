import Front from "./components/Body/Front";
import Footer from "./components/common/footer/Footer";
import NavBar from "./components/common/header/NavBar";
import ReactDOM from "react-dom/client";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/about/About";
import Ai from "./components/ai/Ai";
import Error from "./components/common/errorPage/Error";
import "./index.css";
import PoseVerifier from "./components/poseverifier/Poseverifier";
import { Analytics } from "@vercel/analytics/react"
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";

function App() {
  return (
    <>
      <div className="myApp min-h-[100vh] flex flex-col">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Front />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/ai",
        element: <Ai/>,
      },
      {
        path: "/model",
        element: <PoseVerifier />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
