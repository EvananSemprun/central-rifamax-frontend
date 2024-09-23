import classes from './index.module.css'
import useNavbar from '@hooks/useNavbar'
import { useState } from "react"
import { motion } from 'framer-motion'
import { useHotkeys } from '@mantine/hooks'
import { NavbarType } from "@interfaces/index"
import { IconBrush } from "@tabler/icons-react"
import { DevType } from "@interfaces/models.interfaces"
import { Avatar, Group, Text, Card, SegmentedControl } from "@mantine/core"

function index() {
  const [showedStatus, setShowedStatus] = useState<DevType>('Hidden')
  const { setNav } = useNavbar()

  const handleShowedStatus = () => {
    setShowedStatus(showedStatus === 'Showed' ? 'Hidden' : 'Showed')
  }
  const hoverShowedStatus = () => {
    setShowedStatus('Hover')
  }
  const unhoverShowedStatus = () => {
    setShowedStatus('Showed')
  }
  const showedStatues = {
    'Hidden': '100vh',
    'Showed': 'calc(100vh - 70px)',
    'Hover': '770px'
  }

  const showedDisplays = {
    'Hidden': 'none',
    'Showed': 'block',
    'Hover': 'block'
  }

  useHotkeys([
    ['ctrl+I', handleShowedStatus]
  ]);

  return (
    <motion.div
      animate={{
        top: showedStatues[showedStatus],
        left: 0,
        display: showedDisplays[showedStatus],
        opacity: showedStatus === 'Showed' ? .3 : 1
      }}
      onHoverStart={hoverShowedStatus}
      onHoverEnd={unhoverShowedStatus}
      {...(classes.navbarSelectorWrapper && { className: classes.navbarSelectorWrapper })}
    >
      <Group justify="space-between">
        <Avatar size="md" radius='md'>
          <IconBrush />
        </Avatar>
        <Text fw={700} fz={15} ta="end" c='white'>
          Developer Tool | Integrator Navbar
        </Text>
      </Group>
      <Card className={classes.navbarCard}>
      <Text ta='center' fz={16} fw={300} c="white" mb={10}>
        Select a navbar to show it
      </Text>
        <SegmentedControl 
          fullWidth 
          className={classes.navbarSelector}
          color='#dee2e6'
          transitionDuration={500}
          autoContrast
          transitionTimingFunction="linear"
          data={['Rifamax', 'CDA', 'BetFm4']} 
          onChange={(value: string) => {
            setNav(value as NavbarType)
          }}
        />
      </Card>
    </motion.div>
  )
}

export default index;
