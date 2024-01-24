import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { CiLogout } from 'react-icons/ci'
import { useState, useEffect } from 'react'

import classes from './Sidebar.module.scss'
import { nav } from '../../constants'

function Sidebar (): React.ReactNode {
  const [close, setClose] = useState(false)
  useEffect(() => {
    window.innerWidth <= 768 ? setClose(true) : setClose(false)
    window.addEventListener('resize', () => {
      window.innerWidth <= 768 ? setClose(true) : setClose(false)
    })
    return () => {
      window.removeEventListener('resize', () => {
        window.innerWidth <= 768 ? setClose(true) : setClose(false)
      })
    }
  }, [])
  return (
    <>
      <div className={`${classes.sidebar} ${close ? `${classes.close}` : ''}`}>
        <a href='/' className={classes.logo}>
          <MdOutlineSpaceDashboard className={classes.icon} />
          <span>Dashboard</span>
        </a>
        <ul className={classes.side}>
          {nav.map((item) => (
            <li key={item.id} className={item.id === 2 ? `${classes.active}` : ''}>
              <a href='/'>
                {item.icon}
                {item.title}
              </a>
            </li>
          ))}
          <ul className={classes.side}>
            <li>
              <a href="/" className={classes.logout}>
                <CiLogout />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
