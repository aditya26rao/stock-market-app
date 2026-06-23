import bg from "../../src/assets/images/homeHero.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-16">
      <div className="flex justify-center">
        <img
          src={bg}
          alt="homeHero"
          className="w-full max-w-4xl"
        />
      </div>

      <div className="flex flex-col items-center text-center mt-12">
        <h1 className="text-2xl md:text-4xl font-medium text-gray-800">
          Invest in everything
        </h1>

        <p className="text-lg text-gray-700 mt-4 max-w-3xl">
          Online platform to invest in stocks, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>

        <button className="mt-8 px-8 py-3 font-semibold bg-blue-500 text-white rounded hover:bg-black transition">
          Sign up for free
        </button>
      </div>
    </section>
  );
};

export default Hero;