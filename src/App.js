import React, { Component } from "react";
import FruitsInventory from "./FruitsInventory";

class App extends Component {
  state = {
    fruits: [
      { fruitId: 1, fruitName: "apple", fruitColor: "red" },
      { fruitId: 2, fruitName: "orange", fruitColor: "orange" },
      { fruitId: 3, fruitName: "banana", fruitColor: "yellow" },
      { fruitId: 4, fruitName: "pear", fruitColor: "green" },
    ],
  };

  editFruit = () => {
    console.log("Editing Fruit");
  };

  deleteFruit = () => {
    console.log("Deleting Fruit");
  };

  render() {
    return (
      <div className="container-outer">
        <h1>I AM THE APP</h1>
        <FruitsInventory
          fruitsData={this.state.fruits}
          editFruit={this.editFruit}
          deleteFruit={this.deleteFruit}
        />
      </div>
    );
  }
}

export default App;
