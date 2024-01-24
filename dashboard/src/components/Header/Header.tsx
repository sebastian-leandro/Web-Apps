import { CiCloudOn } from 'react-icons/ci'

import classes from './Header.module.scss'

function Header (): React.ReactNode {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.left}>
          <h1>Dashboard</h1>
          <ul className={classes.breadcrumb}>
            <li><a href="#">Analytics</a></li>
            /
            <li><a href="#" className={classes.active}>Shop</a></li>
          </ul>
        </div>
        <a href='#' className={classes.report}>
          <CiCloudOn />
          <span>Download Csv</span>
        </a>
      </header>
    </>
  )
}

export default Header
