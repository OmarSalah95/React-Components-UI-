// import React from 'react';

// <footer className='footer'>
//   <img src=''/>
//   <img src=''/>
//   <img src=''/>
//   <img src=''/>
// </footer>



// export default HeaderContainer;



import React from "react";
import {FaComment, FaSync, FaHeart, FaEnvelope} from 'react-icons/fa'
import "./Footer.css";

// started to make a dynamic button here so when you click the image icons, the numbers beside them will increment
// const DynamicButton = props => {

// }

const Footer = () => {
  return (
          <footer>
            <div>
             <i><FaComment /></i>
              1
            </div>
            <div>
            <i><FaSync /></i>
              2
            </div>
            <div>
            <i><FaHeart /></i>
              3
            </div>
            <div>
            <i><FaEnvelope /></i>
              4
            </div>
          </footer>
  );
};

export default Footer;