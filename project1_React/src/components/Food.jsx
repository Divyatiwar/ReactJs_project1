const FoodSection = () => {
  return (
    <main className="food container">
      <div className="food-content">
        <h1>Let's Have some Food!! :)</h1>

        <p>
          An online food system allows customers to order meals from a variety
          of restaurants and have them delivered to their doorstep through
          digital platforms or apps. This system offers convenience by enabling
          users to browse menus, customize orders, and make secure payments from
          the comfort of their homes or offices.
        </p>

        <div className="food-btn">
          <button>Order Now </button>
          <button className="category-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On Any Online Platforms ^ - ^</p>
        </div>
        <div className="platform-images">
          <div className="platform-box">
            <img src="img/p1.png" alt="Platform 1" className="platform-image" />
          </div>
          <div className="platform-box">
            <img src="img/p2.png" alt="Platform 2" className="platform-image" />
          </div>
        </div>
      </div>
      {/*Footer Part --------------------------------*/}
      <footer className="footer">
        <div className="footer-content">
          <p>@ 2025 Food Delivery. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default FoodSection; /* exports the foodsection component so it can be imported and used in other files */
