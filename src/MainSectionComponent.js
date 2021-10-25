import React from "react";
import Button from "./Button";

function MainSection() {
  return (
    <React.Fragment>
      <p className="text-xl font-semibold mr-2 ml-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
        amet felis lectus. Cras posuere et sapien mattis aliquet. Pellentesque
        at leo vel velit tristique convallis. Duis gravida lectus justo. Ut
        fringilla eget ligula sit amet cursus. Pellentesque non molestie sapien.
        In hac habitasse platea dictumst.Duis gravida lectus justo. Ut fringilla
        eget.
      </p>
      <Button caption="Button" />
    </React.Fragment>
  );
}

export default MainSection;
