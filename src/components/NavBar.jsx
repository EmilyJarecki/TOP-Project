import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
  
    return (
        <div>
          <FontAwesomeIcon size="2xl" style={{color: "#243558" }} icon={faBars} onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="fixed inset-0 flex flex-col justify-between bg-hych-subheading-blue z-10">
                <div className="flex justify-end p-8">
                <FontAwesomeIcon style={{color: "#ffffff"}} size="2xl" className="z-20" icon={faXmark} onClick={closeDropdown} />

                </div>
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
    );
  };
  