// @ts-nocheck
import { useState } from "react";
import classNames from "classnames";
import { NavbarItem } from "./NavbarItem";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    const menuItems = [
        {name: 'People', href:'/'},
        {name: 'Exchange', href:'/exchange'},
        {name: 'Add people', href:'/add-person'},
    ]

  return (
    <nav
      className="navbar is-info mb-4 container"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className={classNames("navbar-burger", { "is-active": isOpen })}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        className={classNames("navbar-menu is-primary", {
          "is-active": isOpen,
        })}>
        <div className="navbar-start">
          {menuItems.map((item) => (
            <NavbarItem key={item.href} {...item} onClick={closeMenu} />
          ))}
        </div>
      </div>
    </nav>
  );
};
