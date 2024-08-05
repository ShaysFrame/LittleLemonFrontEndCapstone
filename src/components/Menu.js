import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    console.log(id, "id is clicked");
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#495E57",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been placed.",
          icon: "success",
          confirmButtonColor: "#495E57",
        });
      }
    });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Order Menu</button>
      </div>

      {/* Menu cards */}
      <div className="cards">
        {recipes.map((recipes) => (
          <div key={recipes.id} className="menu-items">
            <img src={recipes.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipes.title}</h5>
                <p>{recipes.price}</p>
              </div>
              <p>{recipes.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipes.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
