import React, { Component } from "react";
import FruitsInventory from "./FruitsInventory";
import AddFruitForm from "./AddNewFruit";
import EditFruit from "./EditFruit";

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

  editFruit = (fruit) => {
    console.log("Editing Fruit");
    this.setState({
      editPanelOpen: true,
      tempId: fruit.fruitId,
      tempFruitName: fruit.fruitName,
      tempFruitColor: fruit.fruitColor,
    });
  };

  updateFruit = (e) => {
    e.preventDefault();
    const updatedFruit = {
      fruitId: this.state.tempId,
      fruitName: this.state.tempFruitName,
      fruitColor: this.state.tempFruitColor,
    };
    console.log("Updating fruit...", updatedFruit);
    this.setState({
      editPanelOpen: false,
      tempFruitName: "",
      tempFruitColor: "",
      tempId: null,
      fruits: this.state.fruits.map((fruit) =>
        fruit.fruitId === updatedFruit.fruitId ? updatedFruit : fruit
      ),
    });
  };

  deleteFruit = (fruitId) => {
    console.log(`Deleting Fruit ${fruitId}`);
    this.setState({
      fruits: this.state.fruits.filter((fruit) => fruit.fruitId !== fruitId),
    });
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
        <h1>Fruits App</h1>
        <FruitsInventory
          fruitsData={this.state.fruits}
          editFruit={this.editFruit}
          deleteFruit={this.deleteFruit}
        />
        {this.state.editPanelOpen ? (
          <EditFruit
            tempId={this.state.tempId}
            tempFruitName={this.state.tempFruitName}
            tempFruitColor={this.state.tempFruitColor}
            handleInputUpdate={this.handleInputUpdate}
            updateFruit={this.updateFruit}
          />
        ) : (
          <AddFruitForm
            tempFruitName={this.state.tempFruitName}
            tempFruitColor={this.state.tempFruitColor}
            handleInputUpdate={this.handleInputUpdate}
            addFruit={this.addFruit}
          />
        )}
      </div>
    );
  }
}

export default App;
