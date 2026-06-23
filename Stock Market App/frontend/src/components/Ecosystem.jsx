import right_bg from "../assets/images/ecosystem.png";

const Main = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16">

        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-medium text-gray-800 mb-10">
            Trust with confidence
          </h1>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Customer-first always
              </h3>
              <p className="text-gray-600 leading-7">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                No spam or gimmicks
              </h3>
              <p className="text-gray-600 leading-7">
                No gimmicks, spam, gamification, or annoying push
                notifications. High-quality apps that you use at your pace, the
                way you like.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                The Zerodha universe
              </h3>
              <p className="text-gray-600 leading-7">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Do better with money
              </h3>
              <p className="text-gray-600 leading-7">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <img
            src={right_bg}
            alt="Zerodha Ecosystem"
            className="w-full max-w-lg"
          />
          <div className="flex gap-8 mt-6">
            <button className="text-blue-600 hover:text-gray-800 font-medium">
              Explore our products →
            </button>

            <button className="text-blue-600 hover:text-gray-800 font-medium">
              Try Kite demo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;