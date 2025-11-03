import {Container} from "../../../shared/ui/container";

import logo from "../../../shared/assets/logo.png";
import burger from "../../../shared/assets/burger.png";
import "./header.css";
import {useEffect, useRef, useState} from "react";

const navItems = [
  {item: {name: "Categories", link: "link1"}},
  {item: {name: "Collections", link: "link2"}},
  {item: {name: "Explore", link: "link3"}}
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownMenu = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isOpen &&
        dropdownMenu.current &&
        !dropdownMenu.current.contains(event.target as Node)
      )
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header>
      <Container>
        <div className='header-section'>
          <div className='header-logo-block'>
            <a className='header-logo-wrapper' href='#'>
              <div className='header-logo'>
                <img src={logo} alt='' />
              </div>
              <div className='header-title'>
                <div className='header-maintitle'>Coloring Books</div>
                <div className='header-subtitle'>for Adults</div>
              </div>
            </a>
          </div>
          <nav className='header-nav-desktop'>
            <ul className='header-list-desktop'>
              {navItems.map((item) => (
                <li className='header-item-desktop' key={item.item.link}>
                  <a href={`#${item.item.name}`}>{item.item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='header-burger' onClick={() => setIsOpen(true)}>
            <img src={burger} alt='Menu' />
          </div>
        </div>
      </Container>
      <div className={`header-wrapper${isOpen ? "-active" : ""}`}>
        <nav className='header-nav' ref={dropdownMenu}>
          <ul className='header-list'>
            {navItems.map((item) => (
              <li className='header-item' key={item.item.link}>
                <a href=''>{item.item.name}</a>
              </li>
            ))}
            <li className='header-item' onClick={() => setIsOpen(false)}>
              Close
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
