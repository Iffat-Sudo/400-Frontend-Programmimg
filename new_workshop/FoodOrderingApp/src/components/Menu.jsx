import React from "react";

function Menu({ menu, addToOrder }) {
  return (
    <div className="row">
      {menu.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="card p-3 mb-3">
            <h5>{item.name}</h5>
            <p>${item.price}</p>

            <button
              className="btn btn-primary"
              onClick={() => addToOrder(item)}
            >
              Add to Order
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;