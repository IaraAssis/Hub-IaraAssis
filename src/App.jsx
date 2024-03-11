import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify"; 
import { useContext } from "react";
import { DefaultTemplate } from "./components/DefaultTemplate";
import { useUserContext } from "./components/providers/UserContext";
import { Loading } from "./components/Loading";
import "./style/index.scss";
import "react-toastify/dist/ReactToastify.min.css";



const App = () => {

  const {loading} = useUserContext();
  return (
    <>
      <DefaultTemplate >
          {loading ? <Loading/> :<RoutesMain/>}
          <ToastContainer position="bottom-right" autoClose={2 * 1000}/>
      </DefaultTemplate>
    </>
  )
};

export default App;



