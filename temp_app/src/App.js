import { VStack } from "@chakra-ui/react";
import Login from "./Pages/Login";
import Navbar from "./Component/Navbar";
import AllRoutes from "./Component/AllRoutes";




function App() {

 
  return (
    <VStack>
      <Navbar/>
      {/* <Login/> */}
      <AllRoutes/>
      
      
    </VStack>
  );
}

export default App;
