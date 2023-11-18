import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { productInputs, userInputs } from "./formSource";
import { AuthContext } from "./context/AuthContext";
import "./style/dark.scss";
import { useContext } from "react";

export default function App() {
  const { currentUser } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/login"} />;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route
          index
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="users">
          <Route
            index
            element={
              <RequiredAuth>
                <List title={"Add New Users"} />{" "}
              </RequiredAuth>
            }
          />
          <Route
            path=":userId"
            element={
              <RequiredAuth>
                <Single />
              </RequiredAuth>
            }
          />
          <Route
            path="new"
            element={
              <RequiredAuth>
                <New inputs={userInputs} title={"Add New User"} />
              </RequiredAuth>
            }
          />
        </Route>

        <Route path="products">
          <Route
            index
            element={
              <RequiredAuth>
                {" "}
                <List title={"Add New Products"} />
              </RequiredAuth>
            }
          />
          <Route
            path=":productId"
            element={
              <RequiredAuth>
                <Single />
              </RequiredAuth>
            }
          />
          <Route
            path="new"
            element={<New inputs={productInputs} title={"Add New Products"} />}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
