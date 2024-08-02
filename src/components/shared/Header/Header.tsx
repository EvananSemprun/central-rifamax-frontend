import { Image } from '@mantine/core';
import classes from './Header.module.css';
import LinksList from './LinksList';
import Profile from './Profile';

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logoWrapper}>
        <Image 
          src="/images/logo.png" 
          alt="Rifamax Logo" 
          h='1.5rem'
          className={classes.logo}
        />
      </div>
      <div className={classes.actionsWrapper}>
        <Profile />
        <LinksList />
      </div>
    </header>
  )
}

export default Navbar