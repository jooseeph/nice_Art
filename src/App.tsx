import { RouterProvider } from "react-router-dom";
import router from "router/router";
import { useStore } from "./store/store.config";
import LoaderComponent from "core/shared/loader/loader.component";
import "./App.scss";

function App() {
  const loader = useStore("loader");

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
        {loader ? <LoaderComponent /> : null}
      </div>
    </>
  );
}

export default App;
