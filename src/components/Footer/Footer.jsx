import './Footer.css'
import youtubeIcon from '../../assets/youtube_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import { FooterMenus } from '../../lib/constants'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={facebookIcon} alt="facebook logo" />
        <img src={instagramIcon} alt="instagram logo" />
        <img src={twitterIcon} alt="twitter logo" />
        <img src={youtubeIcon} alt="youtube logo" />
      </div>

      <ul>
        {FooterMenus.map(({ title, id }) => (
          <li key={id}>
            {title}
          </li>
        ))}
      </ul>

      <p className='copyright-text'>&copy; 1997 - 2026 Netflix, Inc.</p>
    </div>
  )
}

export default Footer