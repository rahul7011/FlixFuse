import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/Store";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import { useMediaQuery } from "react-responsive";
import Error from "./components/Error";
import NotExist from "./components/NotExist";
import Profile from "./components/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    errorElement: <NotExist />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "results",
        element: <SearchResults />,
      },
    ],
  },
]);
function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Provider store={store}>
      <div>{isDesktop ? <RouterProvider router={appRouter} /> : <Error />}</div>
    </Provider>
  );
}

{
  /**
   * Head
   * Body
   *  SideBar
   *    MenuItems
   *  MainContainer || WatchPage
   *  ButtonList
   *    VideoContainer
   *      VideoCard
   */
}
export default App;
