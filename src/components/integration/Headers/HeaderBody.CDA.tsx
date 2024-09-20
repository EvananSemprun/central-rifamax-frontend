import classes from './HeaderBody.CDA.module.css'
import { Avatar, Button, Group, Image, Text } from "@mantine/core"

function HeaderBody() {
  return (
    <>
      <header className={classes.header}>
        <div>
          <Image
            src="/images/cda-simulator-logo.png"
            alt="Centro de Apuesta"
            height="1.5rem"
            className={classes.logo}
          />
        </div>
        <nav className={classes.nav}>
          <Group>
            <Avatar radius="xl"
              src="/images/profile.jpg" />
            <div className={classes.navItem}>4 Bocas</div>
          </Group>
        </nav>
      </header>

      <div className={classes.subHeader}>
        <div className={classes.subNavLeft}>
          <Button fw={700} variant="outline" size="xs" color="gray">
            Home
          </Button>
          <Button fw={700} variant="outline" size="xs" color="gray">
            Tiples
          </Button>
          <Button fw={700} variant="outline" size="xs" color="gray">
            Animalitos
          </Button>
        </div>
        <div className={classes.subNavRight}>
          <Text mr={15} fw={900}>
            CREDITO
          </Text>
          <Avatar
            radius="xl"
            size='sm'
            src="/images/USD.png"
          />
          <Text ml={15} fw={900}>
            8,319.00 $
          </Text>
        </div>
      </div>
    </>
  )
}

export default HeaderBody