import Userdetail from "./Userdetail";
import RestaurantCard from "./Userdetail";

function UserTable({ data = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th width="100px" >firstname</th>
          <th width="100px" >lastname</th>
          <th width="100px" >email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <Userdetail key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
