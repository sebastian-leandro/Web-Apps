import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { CiLogout } from 'react-icons/ci'
import { useState, useEffect } from 'react'

import classes from './Sidebar.module.scss'
import { nav } from '../../constants'

function Sidebar (): React.ReactNode {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    const handleWidth = (): void => { setToggle(window.innerWidth < 768) }
    handleWidth()

    window.addEventListener('resize', handleWidth)
    return () => { window.removeEventListener('resize', handleWidth) }
  }, [])

  return (
    <>
      <div className={`${classes.sidebar} ${toggle ? 'w-[60px]' : 'w-[230px]'}`}>
        <a href='/' className={classes.logo}>
          <MdOutlineSpaceDashboard className={classes.icon} />
          <span>Dashboard</span>
        </a>
        <ul className={classes.side}>
          {nav.map((item) => (
            <li key={item.id} className={item.id === 2 ? `${classes.active}` : ''}>
              <a href='/'>
                {item.icon} {item.title}
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
