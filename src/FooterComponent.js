import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

function FooterBar() {
  return (
    <React.Fragment>
      <div className="flex p-5 mt-28 justify-center">
        <div className="flex-wrap mt-1">
          <div className="font-semibold">
            <FontAwesomeIcon icon={faStar} />
            &nbsp; Home
          </div>
          <div className="font-semibold">
            <FontAwesomeIcon icon={faHeart} />
            &nbsp; About Us
          </div>
          <div className="font-semibold">
            <FontAwesomeIcon icon={faCircle} />
            &nbsp; Contact Us
          </div>
        </div>
        <div className="flex-wrap ml-20 mt-1">
          <div className="font-semibold">Africa</div>
          <div className="font-semibold">America</div>
          <div className="font-semibold">Europe</div>
        </div>
      </div>
      <div className="flex p-5 mt-5 ml-15 font-semibold justify-center">
        &#169;Zatec 2021
      </div>
    </React.Fragment>
  );
}

export default FooterBar;
