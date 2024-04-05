import React from "react";
import { LOGO_URL } from "../utils/constants";
/** Components for food app
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - search
 * - Restaurantcontainer
 * -- RestrauntCard
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 *
 */
export const Header = () => {
  return (
    <div className="header">
      <div className="logo-Container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
