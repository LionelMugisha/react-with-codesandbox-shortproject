import React from "react";
import MainSection from "./MainSectionComponent";

class SideNavBar extends React.Component {
  render() {
    return (
      <div className="flex p-5">
        <div className="flex-wrap mt-1">
          <div className="w-36 flex border-2 font-semibold border-black bg-blue-400 h-8">
            Countries
          </div>
          <div className="w-36 flex border-2 font-semibold border-black h-24"></div>
          <div className="w-36 flex border-2 font-semibold border-black h-8">
            America
          </div>
          <div className="w-36 flex border-2 font-semibold border-black h-8">
            Africa
          </div>
          <div className="w-36 flex border-2 font-semibold border-black h-8">
            Europe
          </div>
          <div className="w-36 flex border-2 font-semibold border-black h-8">
            Asia
          </div>
        </div>
        <div>
          <MainSection />
        </div>
      </div>
    );
  }
}

export default SideNavBar;
