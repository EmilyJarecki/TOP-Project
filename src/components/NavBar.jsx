import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
                <div className="flex justify-end">
                <FontAwesomeIcon style={{color: "#ffffff"}} size="2xl" className="z-20 px-6 pt-12 pb-4" icon={faXmark} onClick={closeDropdown} />

                </div>
              <div className="flex flex-grow justify-center items-center z-20">
                <ul className="space-y-2 text-white text-3xl py-5">
                  {/* where does this go? */}
                  <li className='py-5'>Report My Test</li> 
                  <li className='py-5'><Link href="/faq">FAQs</Link></li>
                  <li className='py-5'><Link href="/about">About Us</Link></li>
                  <li className='py-5'><Link href="/resources">Resources</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>
    );
  };
  