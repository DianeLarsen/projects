import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./style.css"

import Add from "./pages/Add/Add";
import Books from "./pages/Books/Books";
import Update from "./pages/Update/Update";

function App() {


  const router = createBrowserRouter([
 
    {
      path: "/",
      element: <Books />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);

  return <div className="App"><RouterProvider router={router} /></div>;
}

export default App;
