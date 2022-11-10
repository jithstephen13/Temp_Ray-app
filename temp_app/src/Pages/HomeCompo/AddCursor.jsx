import * as React from "react";
import Carousel from "framer-motion-carousel";

function AddCursor(props) {

    const Images=[
        {url:"https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"},
        {url:"https://s.rmjo.in/AC-Offer-Banner-Web-.jpg"},
        {url:"https://s.rmjo.in/Paytm-Offer-banner-for-web.jpg"},
        {url:"https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg"},
        {url:"https://s.rmjo.in/WP-Web.png"},
    ]
    
    return (
        <div width={ {base:"100%" ,mid:"80%", lg:"80%"} } style={{ width:"80%", height:{ base:100, md:450 }, margin: "0 auto" , border:"5px solid gray "  ,borderRadius:"20px"  }}>
  <Carousel  borderRadius="20px" >
    {Images.map((item, i) => (
      <img

     
        draggable="false"
        src={item.url}
        key={i}
        width="100%"
         interval="2000"
        alt=""
      />
    ))}
  </Carousel>
</div>
    
    );
}

export default AddCursor;