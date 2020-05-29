import React from "react";

const EditFruit = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Fruit</h2>
      <form className="h-form" onSubmit={props.addFruit}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          type="text"
          name="tempFruitName"
          value={props.tempFruitName}
          onChange={props.handleInputUpdate}
        />
        <label className="h-label">Color</label>
        <input
          className="h-input"
          type="text"
          name="tempFruitColor"
          value={props.tempFruitColor}
          onChange={props.handleInputUpdate}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditFruit;
