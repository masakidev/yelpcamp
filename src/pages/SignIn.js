import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";

const SignIn = () => {
  return (
    <div>
      <Header />
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">
          Start exploring camps from all around the world.
        </h1>
        <div className="flex flex-col gap-4 mb-10">
          <label>Username</label>
          <input
            className="px-4 py-3 rounded-md"
            type="username"
            placeholder="johndoe_91"
          />
          <label>Password</label>
          <input
            className="px-4 py-3 rounded-md"
            type="password"
            placeholder="password"
          />
          <Button description="Login" link="/" />
          <p className="-mt-6">
            Not a user yet?{" "}
            <Link>
              <span className="text-blue-400 underline">Create an account</span>
            </Link>
          </p>
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default SignIn;
