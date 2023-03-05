import { Alert, Button } from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

async function DeleteProduct(id,navigate) {
  try {

    const response = await axios.delete(`https://backmock-app.onrender.com/Productes/${id}`);
     
      alert("Delete successful")
      navigate('/admin')
      

    
    
    
  } catch (error) {
    console.error(error);
  }
}

export default function Productdetails({
  name,
  minRentAmount,
  filterSlug,
  id,
}) {

  const navigate=useNavigate()
  return (
    <tr data-testid="item">
      <td color={"green"} data-testid="rating">{id}</td>
      <td> {name}</td>
      <td data-testid="type">{ minRentAmount}</td>
      <td data-testid="price">{filterSlug}</td>
      <td><Button onClick={()=>{
        DeleteProduct(id,navigate) }} >DELETE</Button></td>
    </tr>
  );
}
