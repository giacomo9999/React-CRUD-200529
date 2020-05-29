import React, { Component } from "react";
import FruitsInventory from "./FruitsInventory";
import AddFruitForm from "./AddNewFruit";

class App extends Component {
  state = {
    editPanelOpen: false,
    runningIdValue: 5,
    tempId: null,
    tempFruitName: "",
    tempFruitColor: "",
    fruits: [
      { fruitId: 1, fruitName: "apple", fruitColor: "red" },
      { fruitId: 2, fruitName: "orange", fruitColor: "orange" },
      { fruitId: 3, fruitName: "banana", fruitColor: "yellow" },
      { fruitId: 4, fruitName: "pear", fruitColor: "green" },
    ],
  };

  handleInputUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  editFruit = () => {
    console.log("Editing Fruit");
  };

  deleteFruit = (fruitId) => {
    console.log(`Deleting Fruit ${fruitId}`);
  };

  addFruit = (e) => {
    e.preventDefault();
    console.log("Adding Fruit");
    const newFruit = {
      fruitId: this.state.runningIdValue,
      fruitName: this.state.tempFruitName,
      fruitColor: this.state.tempFruitColor,
    };
    this.setState({
      runningIdValue: this.state.runningIdValue + 1,
      tempFruitName: "",
      tempFruitColor: "",
      fruits: [...this.state.fruits, newFruit],
    });
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
        <AddFruitForm
          tempFruitName={this.state.tempFruitName}
          tempFruitColor={this.state.tempFruitColor}
          handleInputUpdate={this.handleInputUpdate}
          addFruit={this.addFruit}
        />
      </div>
    );
  }
}

export default App;
