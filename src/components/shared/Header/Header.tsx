import Profile from './Profile';
import LinksList from './LinksList';
import useNavbar from '@hooks/useNavbar';
import classes from './Header.module.css';
import CDANav from '@/components/integration/Headers/HeaderBody.CDA';
import BetFm4Nav from '@/components/integration/Headers/HeaderBody.BetFM4';
import { Image } from '@mantine/core';

function Navbar() {
  const { navbar } = useNavbar();

  const RifamaxNav = () => (
    <header className={classes.header}>
      <div className={classes.logoWrapper}>
        <Image 
          src="/images/rifamax-logo.png" 
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

  const NavbarList = {
    'Rifamax': RifamaxNav,
    'BetFm4': BetFm4Nav,
    'CDA': CDANav
  }

  const SelectedNavbar = NavbarList[navbar]
  
  return (
    <SelectedNavbar />
  )
}

export default Navbar