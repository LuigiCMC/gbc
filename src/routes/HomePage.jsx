import "/src/static/css/index.css";

export default function Homepage() {
  return (
    <>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/properties">Properties</a>
      </div>
      <h1>Welcome to the homepage!</h1>
    </>
  );
}
