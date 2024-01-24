import { CiStickyNote, CiCircleCheck } from 'react-icons/ci'
import { IoFilter } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa'
import { FaCircleXmark } from 'react-icons/fa6'
import { BsThreeDotsVertical } from 'react-icons/bs'

import classes from './Reminders.module.scss'

function Reminders (): React.ReactNode {
  return (
    <>
      <div className={classes.reminders}>
        <div className={classes.header}>
          <CiStickyNote />
          <h3>Reminders</h3>
          <IoFilter />
          <FaPlus />
        </div>
        <ul className={classes.task}>
            <li className={classes.completed}>
              <div className={classes.title}>
                <CiCircleCheck />
                <p>Start Our Meeting</p>
              </div>
              <BsThreeDotsVertical />
            </li>
            <li className={classes.completed}>
              <div className={classes.title}>
                <CiCircleCheck />
                <p>Analyse Our Site</p>
              </div>
              <BsThreeDotsVertical />
            </li>
            <li className={classes.notCompleted}>
              <div className={classes.title}>
                <FaCircleXmark />
                <p>Play Football</p>
              </div>
              <BsThreeDotsVertical />
            </li>
        </ul>
      </div>
    </>
  )
}

export default Reminders
