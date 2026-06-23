import zero from "../assets/images/pricing0.svg";
import twenty from "../assets/images/intradayTrades.svg";

const Pricing = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

                {/* Left Section */}
                <div className="lg:w-1/3">
                    <h1 className="text-3xl font-medium text-gray-800">
                        Unbeatable pricing
                    </h1>

                    <p className="mt-4 text-gray-600 leading-8">
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>

                    <button className="mt-6 text-blue-600 hover:text-black transition-colors">
                        See pricing →
                    </button>
                </div>

                {/* Right Section */}
                <div className="lg:w-2/3 flex justify-between items-center gap-4">
                    <div className="flex items-center">
                        <img src={zero} alt="" className="w-24" />
                        <p className="text-xs text-gray-500 max-w-[80px]">
                            Free account opening
                        </p>
                    </div>

                    <div className="flex items-center">
                        <img src={zero} alt="" className="w-24" />
                        <p className="text-xs text-gray-500 max-w-[100px]">
                            Free equity delivery and direct mutual funds
                        </p>
                    </div>

                    <div className="flex items-center">
                        <img src={twenty} alt="" className="w-24" />
                        <p className="text-xs text-gray-500 max-w-[80px]">
                            Intraday and F&O
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;