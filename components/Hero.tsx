import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Drive Your Dreams!</h1>

        <p className="hero__subtitle">
          Start your unforgettable journey with hassle-free car rentals.
        </p>

        <CustomButton />
      </div>
    </div>
  );
};

export default Hero;
