import TotalPrice from "./Components/TotalPrice";

// About component with props for totalPrice and visibility
const About = ({totalPrice, visibility}) => {
  return (
    <div className="bg-white flex flex-col gap-x-4 p-6 mt-8 mx-auto w-11/12 rounded-lg shadow-sm ">
      <TotalPrice totalPrice={totalPrice} visibility={visibility} />
      {/* placeholder company logo */}
      <div className="bg-gray-200 flex justify-center text-sm py-8 px-8 text-gray-400 self-start mb-4">
        200x100
      </div>
      <h1 className="text-2xl font-bold">About out Store</h1>
      <p className="my-6">Welcome to TechGear, your premier destination for high-quality office and tech accessories. We pride ourselves on offering innovative products that enhance your workspace and productivity.</p>
      {/* placeholder company image */}
      <div className="bg-gray-200 mb-6 flex w-72 h-72 justify-center items-center  shadow-md rounded-md text-4xl py-8 px-8 text-gray-400 self-start">
        400x300
      </div>
      {/* placeholder company image */}
      <div className="bg-gray-200 mb-6 flex w-72 h-72 justify-center items-center  shadow-md rounded-md text-4xl py-8 px-8 text-gray-400 self-start">
        400x300
      </div>
      <div className="bg-gray-50 px-6 py-8 rounded-md">
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-2">Email: contact@techgear.co.za </p>
        <p className="text-gray-600 mb-2">Phone: (021)-830-3802 </p>
        <p className="text-gray-600">Address: 123 Tech Street, Digital City, TC 12345 </p>
      </div>
    </div>
  );
}

export default About;