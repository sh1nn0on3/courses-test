import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Footer from "./components/layout/Footer";
import Courses from "./pages/Courses";
import Roadmap from "./pages/Roadmap";
import Blog from "./pages/Blog";
import CourseProvider from "./contexts/course-context";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Profile from "./pages/Profile";
import { PersistGate } from "redux-persist/integration/react";
import CouresDetail from "./pages/CouresDetail";
import LearnUnit from "./pages/LearnUnit";
import ErrorProvider from "./contexts/errorLogin";
import Demo from "./pages/Demo";
import PageChallenge from "./components/challenge/PageChallenge";
import { HomeChallenge } from "./components/challenge/HomeChallenge";
import ChartsChallenge from "./components/challenge/ChartsChallenge";
// import HomeChallenge from "./components/challenge/HomeChallenge";
// import store from "./redux/store";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/roadmap",
          element: <Roadmap />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/courses/:nameId",
          element: <CouresDetail />,
        },
        {
          path: "/demo/:name",
          element: <Demo />,
        },
        {
          path: "/courses/:nameId/unit/:id",
          element: <LearnUnit />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/homechallenge",
          element: <HomeChallenge />,
        },
        {
          path: "/pageChallenge",
          element: <PageChallenge />,
        },
        {
          path: "/chartschallenge",
          element: <ChartsChallenge />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CourseProvider>
            <ErrorProvider>
              <RouterProvider router={router} />
            </ErrorProvider>
          </CourseProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
