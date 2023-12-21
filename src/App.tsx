import { RouterProvider } from "react-router-dom";
import router from "router/router";
import { useStore } from "./store/store.config";
import LoaderComponent from "core/shared/loader/loader.component";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  const loader = useStore("loader");

  return (
    <>
      <QueryClientProvider client = {queryClient}>
        <div className="App">
          <RouterProvider router={router} />
          {loader ? <LoaderComponent /> : null}
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
