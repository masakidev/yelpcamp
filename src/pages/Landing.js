import Hero from "../components/Hero";

const { default: Header } = require("../components/Header");

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Landing;
