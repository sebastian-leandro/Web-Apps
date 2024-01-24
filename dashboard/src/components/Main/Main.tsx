import { CiReceipt } from 'react-icons/ci'
import { IoFilter } from 'react-icons/io5'
import { IoIosSearch } from 'react-icons/io'

import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Insights from '../Insights/Insights'
import Reminders from '../Reminders/Reminders'
import classes from './Main.module.scss'

function Main (): React.ReactNode {
  return (
    <>
      <div className={classes.content}>
        <Navbar />
        <main>
          <Header />
          <Insights />
          <div className={classes.bottom}>
            <div className={classes.orders}>
              <div className={classes.header}>
                <CiReceipt />
                <h3>Recent Orders</h3>
                <IoFilter />
                <IoIosSearch />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Order Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src='./src/assets/avatar.png' alt='' />
                      <p></p>
                    </td>
                    <td>21-01-2024</td>
                    <td><span className={`${classes.status} ${classes.completed}`}>Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src='./src/assets/avatar.png' alt='' />
                      <p></p>
                    </td>
                    <td>21-01-2024</td>
                    <td><span className={`${classes.status} ${classes.pending}`}>Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src='./src/assets/avatar.png' alt='' />
                      <p></p>
                    </td>
                    <td>21-01-2024</td>
                    <td><span className={`${classes.status} ${classes.process}`}>Processing</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Reminders />
          </div>
        </main>
      </div>
    </>
  )
}

export default Main
