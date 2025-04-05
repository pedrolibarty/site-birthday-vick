import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";
import { Global } from "./styles/global";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Global />
      <AppRoutes />
    </>
  );
}

export default App;
