import React from "react";
import { route } from "./Common/Route";
import Footer from "./Component/Footer";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
// import Header from "./Component/Header";

const appRouter = createBrowserRouter(route);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <div className="App">
          <RouterProvider router={appRouter} />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
