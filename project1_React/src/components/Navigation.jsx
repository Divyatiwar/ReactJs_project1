const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="img/icons8-food-bar-100.png" alt="logo" />
      </div>
      <ul>
        <li href="#">
          <h3>Menu</h3>
        </li>
        <li href="#">
          <h3>Location</h3>
        </li>
        <li href="#">
          <h3>About</h3>
        </li>
        <li href="#">
          <h3>Contact</h3>
        </li>
      </ul>

      <button>
        <h1>Login</h1>
      </button>
    </nav>
  );
};

export default Navigation;
