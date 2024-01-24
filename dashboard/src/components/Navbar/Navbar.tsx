import { RiMenu3Line } from 'react-icons/ri'
import { CiSearch, CiBellOn } from 'react-icons/ci'

import classes from './Navbar.module.scss'

function Navbar (): React.ReactNode {
  return (
    <>
      <nav>
        <RiMenu3Line className={classes.bx} />
        <form action="#">
          <div className={classes.inputs}>
            <input type='search' placeholder='search...' />
            <button className={classes.btn} type='submit'>
              <CiSearch className={classes.bx} />
            </button>
          </div>
        </form>
        <input type="checkbox" id='theme' className={classes.theme} hidden />
        <label htmlFor="theme" className={classes.toggle}></label>
        <a href="#" className={classes.notify}>
          <CiBellOn className={`${classes.bx} ${classes.bell} `} />
          <span className={classes.count}>12</span>
        </a>
        <a href="#" className={classes.profile}>
          <img src='./src/assets/avatar.png' alt='Avatar picture' />
        </a>
      </nav>
    </>
  )
}

export default Navbar
