import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer__inner_container">
        <div className="footer__icons">
          
            <FacebookOutlinedIcon />
            <InstagramIcon/>
            <YouTubeIcon/>
                
        </div>

        <div className="footer__data">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
      </div>
      <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="serrvice_code"></div>
          <p>Service Code</p>
        <div className="footer__copyright">
          <p>© 2025 Netflix, Inc.</p>
      </div>
    </div>
  </div>
  )
}

export default Footer
