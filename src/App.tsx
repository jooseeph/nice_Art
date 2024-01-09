import { RouterProvider } from "react-router-dom";
import router from "router/router";
import { useStore } from "./store/store.config";
import LoaderComponent from "core/shared/loader/loader.component";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import { themeConfig } from "core/configs/theme.config";
import useGlobalStyles from "assets/styles/style";

const queryClient = new QueryClient();
function App() {
  const loader = useStore("loader");
  useGlobalStyles();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={themeConfig}>
          <div className='App'>
            <RouterProvider router={router} />
            {loader ? <LoaderComponent /> : null}
          </div>
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
