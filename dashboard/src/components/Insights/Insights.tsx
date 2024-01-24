import { FaCalendar } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa6'
import { BiShowAlt } from 'react-icons/bi'
import { BsCurrencyDollar } from 'react-icons/bs'

import classes from './Insights.module.scss'

function Insights (): React.ReactNode {
  return (
    <>
      <ul className={classes.insights}>
        <li>
        <div className={classes.bx}>
          <FaCalendar />
        </div>
          <span className={classes.info}>
            <h3>1,074</h3>
            <p>Paid Order</p>
          </span>
       </li>
       <li>
        <div className={classes.bx}>
          <BiShowAlt />
        </div>
          <span className={classes.info}>
            <h3>3,944</h3>
            <p>Site Visit</p>
          </span>
       </li>
       <li>
         <div className={classes.bx}>
           <FaChartLine />
          </div>
          <span className={classes.info}>
            <h3>14,721</h3>
            <p>Searches</p>
          </span>
       </li>
       <li>
         <div className={classes.bx}>
           <BsCurrencyDollar />
         </div>
          <span className={classes.info}>
            <h3>6,742</h3>
            <p>Total Sales</p>
          </span>
       </li>
      </ul>
    </>
  )
}

export default Insights
