import './Footer.css';
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>102,Neruji Road</p>
              <p>Allinagaram , Theni.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              9344224848
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              <a href="mailto:akashprabhuganesamoorthy@gmail.com">
                akashprabhuganesamoorthy@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <FaLinkedin
                size={40}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
            </a>
            <a href="https://github.com/PRABHUAKASH" target="_blank">
              <FaGithub
                size={40}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
            </a>
            <a href="https://www.instagram.com/nola_rio/" target="_blank">
              <FaInstagram
                size={40}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
