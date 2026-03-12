import React from "react";

function Order({ order, updateQuantity }) {

  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-5">

      <h2>Your Order</h2>

      {order.length === 0 ? (
        <p>No items in your order</p>
      ) : (
        <div className="card p-3">

          {order.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center mb-3"
            >

              <div>
                <strong>{item.name}</strong>
              </div>

              <div>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>

                <span className="mx-3">{item.quantity}</span>

                <button
                  className="btn btn-sm btn-success"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>

              </div>

              <div>
                ${item.price * item.quantity}
              </div>

            </div>
          ))}

        </div>
      )}

      <h4 className="mt-3">Total: ${total}</h4>

    </div>
  );
}

export default Order;