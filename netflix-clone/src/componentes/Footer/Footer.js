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
      </div>
      
    </div>
  )
}

export default Footer
