// const Footer = () => {
//   return (
//     <h1>FOOTER</h1>
//   )
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Food Delivery</h2>
            <p className="mt-2">Delicious Food Delivered to Your Doorstep</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-500 transition duration-300">Home</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-500 transition duration-300">Menu</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-500 transition duration-300">About Us</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-500 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <address>
              <p className="mb-1">123 Street Name</p>
              <p className="mb-1">City, Country</p>
              <p className="mb-1">Email: info@example.com</p>
              <p>Phone: +123 456 789</p>
            </address>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; 2023 Food Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
