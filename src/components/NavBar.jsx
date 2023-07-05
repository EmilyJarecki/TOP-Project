import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    const [count, setCount] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
  
    return (
      <div>
        <div>
          <FontAwesomeIcon icon={faBars} onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="fixed inset-0 flex flex-col justify-between bg-slate-700 z-10">
              <FontAwesomeIcon style={{color: "#ffffff"}} className="z-20" icon={faX} onClick={closeDropdown} />
              <div className="flex flex-grow justify-center items-center z-20">
                <ul className="space-y-2 text-white text-3xl py-5">
                  <li className='py-5'>Report My Test</li>
                  <li className='py-5'>FAQs</li>
                  <li className='py-5'>About Us</li>
                  <li className='py-5'>Resources</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  