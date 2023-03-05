import Productdetails from "./Productdetails";
import RestaurantCard from "./Userdetail";

function ProductTable({ data = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>NAME</th>
          <th>RATE</th>
          <th>CATEGERY</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <Productdetails key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
