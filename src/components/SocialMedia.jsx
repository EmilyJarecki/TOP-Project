import React from 'react'
import { render } from "react-dom";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="flex justify-center my-2">         
    <FontAwesomeIcon className="w-4 mx-1" icon={faEnvelope} />
    <FontAwesomeIcon className="w-4 mx-1" icon={faFacebook} />
    <FontAwesomeIcon className="w-4 mx-1" icon={faLinkedin} />
    <FontAwesomeIcon className="w-4 mx-1" icon={faInstagram} />
    <FontAwesomeIcon className="w-4 mx-1" icon={faTwitter} />
    </div>
  )
}

export default SocialMedia