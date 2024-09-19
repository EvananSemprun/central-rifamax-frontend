import { Loader } from '@mantine/core'
import classes from './LoaderNavbar.module.css'

function LoaderNavbar() {
  return (
    <div className={classes.navWrapper}>
      <Loader className={classes.loader} />
    </div>
  )
}

export default LoaderNavbar