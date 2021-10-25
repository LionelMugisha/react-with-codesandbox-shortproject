# react-with-codesandbox-shortproject
While working on this mockup, i faced some challenges like icons,
how to include a local image in codesandbox. And i did try to come up
with an approach like as including an image i used            
<img src={require("../react.png")} alt="react" />
and for icons i did install dependencies like
@fortawesome/fontawesome-svg-core
@fortawesome/free-solid-svg-icons
@fortawesome/react-fontawesome
and on my page i imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon={faStar} /> for calling the star icon on your webpage.
It took me about 6 hours to finish this work.
