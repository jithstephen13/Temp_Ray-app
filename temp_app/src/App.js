import { VStack } from "@chakra-ui/react";
import Login from "./Pages/Login";
import Navbar from "./Component/Navbar";
import AllRoutes from "./Component/AllRoutes";
import Footer from "./Component/Footer";





function App() {

 
  return (
    <VStack>
      <Navbar/>
      {/* <Login/> */}
      <AllRoutes/>
      <Footer/>
      
      
      
    </VStack>
  );
}

export default App;
