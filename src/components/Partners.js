import logoAirbnb from "../images/Airbnb.svg";
import logoBooking from "../images/Booking.svg";
import logoPlum from "../images/Plum Guide.svg";

const Partners = () => {
  return (
    <div>
      <p className="mb-1">Partnered with:</p>
      <div className="flex gap-4 w-3/12">
        <img src={logoAirbnb} alt="Logo Airbnb" />
        <img src={logoBooking} alt="Logo Booking" />
        <img src={logoPlum} alt="Logo Plum" />
      </div>
    </div>
  );
};

export default Partners;
