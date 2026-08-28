import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImage from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'
import { useEffect, useRef } from 'react'

const Navbar = () => {
  const navRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className='navbar' ref={navRef}>
      <div className='navbar-left'>
        <img src={logo} alt="netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className='navbar-right'>
        <img src={searchIcon} className='icons' alt="search" />
        <p>Children</p>
        <img src={bellIcon} className='icons' alt="bell icon" />

        <div className='navbar-profile'>
          <img src={profileImage} className='profile' alt="profile image" />
          <img src={caretIcon} alt="dropdown menu" />

          <div className='dropdown'>
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar