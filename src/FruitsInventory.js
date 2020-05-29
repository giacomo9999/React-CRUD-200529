import React from "react";

const FruitsInventory = (props) => {
  const fruitsList = props.fruitsData.map((fruit) => (
    <tr key={`fruit_${fruit.fruitId}`}>
      <td style={{ width: "20px" }}>{fruit.fruitId}</td>
      <td>{fruit.fruitName}</td>
      <td>{fruit.fruitColor}</td>
      <td>
        <button onClick={props.editFruit}>Edit</button>
      </td>
      <td>
        <button onClick={props.deleteFruit}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2>Fruits Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{fruitsList}</tbody>
      </table>
    </div>
  );
};

export default FruitsInventory;
