import imgHero from "../images/Hero Image (Tablet and Mobile).jpg";
import Partners from "./Partners";
import CheckList from "./CheckList";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <img src={imgHero} alt="hero" />
      <div className="px-4 py-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">
            Explore the best camps on Earth.
          </h1>
          <p>
            YelpCamp is a curated list of the best camping spots on Earth.
            Unfiltered and unblased reviews.
          </p>
        </div>
        <div className="mb-4">
          <CheckList description="Add your own camp suggestions." />
          <CheckList description="Leave reviews and experiences." />
          <CheckList description="See locations for all camps." />
        </div>
        <Button description="View Campgrounds" link="/signin" />
        <Partners />
      </div>
    </div>
  );
};

export default Hero;
