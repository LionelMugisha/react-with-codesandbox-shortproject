import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="flex p-5 justify-between">
        <div className="flex">
          <p className="text-3xl font-bold">ReactWork</p>
        </div>
        <div className="flex mt-2 ml-10">
          <div className="w-32 px-10 flex justify-center font-semibold border-2 border-black bg-blue-400 h-7">
            Home
          </div>
          <div className="w-32 flex justify-center font-semibold border-2 border-black h-7">
            About Us
          </div>
          <div className="w-32 flex justify-center border-2 font-semibold border-black h-7">
            Contact Us
          </div>
          <div className="border border-gray-200 h-11 w-12 ml-4 mr-10">
            <img src={require("../react.png")} alt="react" />
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
