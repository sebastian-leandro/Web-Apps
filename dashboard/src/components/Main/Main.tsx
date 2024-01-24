import Navbar from '../Navbar/Navbar'
import classes from './Main.module.scss'

function Main (): React.ReactNode {
  return (
    <>
      <div className={classes.content}>
        <Navbar />
      </div>
    </>
  )
}

export default Main
