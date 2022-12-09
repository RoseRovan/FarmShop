function Header({ productCount }) {
    return (
      <header>
        <h1>The Farm Store</h1>
        <h3>We have {productCount} farm products in stock!</h3>
      </header>
    );
  }
  
  export default Header;