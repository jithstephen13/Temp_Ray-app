import { Heading, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductTable from './ProductTable';
import UserTable from './UserTable';


async function getUser(setUser) {
    try {
      const response = await axios.get('https://backmock-app.onrender.com/user',{
        params: {
            _page:1,
            _limit:10
          }
      });
      console.log(response.data);
      setUser(response)
    } catch (error) {
      console.error(error);
    }
  }

  async function getData(setProduct) {
    try {
  
      const response = await axios.get(`https://backmock-app.onrender.com/Productes`);
       setProduct(response)
  
      
      
      
    } catch (error) {
      console.error(error);
    }
  }

function Admin(props) {

    const[User,setUser]=useState([])
    const[Product,setProduct]=useState([])

    useEffect(()=>{
        getUser(setUser)
        getData(setProduct)
    },[])

    console.log(User)
    console.log(Product)
    return (
        <div>
            <Stack>
                  <section  >
                    <Heading color={"whatsapp.500"}> Useres</Heading></section>
                  <section>
                    <UserTable  data={User.data} />

                  </section>
            </Stack>
            <Stack>
                <section>
                <Heading color={"whatsapp.500"}>  Product</Heading>
                    </section>
                <section>
                  <ProductTable data={Product.data} />
                </section>
            </Stack>
            
        </div>
    );
}

export default Admin;