import { Button } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

async function DeleteUser(id) {
  try {

    const response = await axios.delete(`https://backmock-app.onrender.com/Productes/${id}`);
     
      alert("Delete successful")
     
      

    
    
    
  } catch (error) {
    console.error(error);
  }
}

export default function Userdetail({
  firstname,lastname,email,id
}) {
  return (
    <tr  data-testid="item">
      <td width="100px" data-testid="rating">{firstname}</td>
      <td width="100px" data-testid="type">{ lastname}</td>
      <td width="100px" data-testid="price">{email}</td>
      <td><Button onClick={()=>{ DeleteUser(id) }} >DELETE</Button></td>
    </tr>
  );
}
