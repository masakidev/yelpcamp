import imgAvatar from "../images/user-testimonial.svg";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold">
        "YelpCamp has honestly saved me hours of research time, and the camps on
        here are definitely well picked and added."
      </p>
      <div className="flex gap-3">
        <img src={imgAvatar} alt="Avatar" />
        <div>
          <h1 className="font-bold">May Andrews</h1>
          <h2>Professional Hiker</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
