import classes from './index.module.css'
import useNavbar from '@/hooks/useNavbar';
import { motion } from 'framer-motion'
import { DevType } from "@interfaces/models.interfaces"
import { useState } from "react"
import { IconBrush } from "@tabler/icons-react"
import { useHotkeys } from '@mantine/hooks';
import { IIntegratorInfo, NavbarType } from "@interfaces/index"
import { Avatar, Group, Text, Chip } from "@mantine/core"

function index({ }: IIntegratorInfo) {
  const [showedStatus, setShowedStatus] = useState<DevType>('Hidden')
  const { setNav } = useNavbar()
  const [activeChip, setActiveChip] = useState<NavbarType>('Rifamax');

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
    'Hover': '600px'
  }

  const showedDisplays = {
    'Hidden': 'none',
    'Showed': 'block',
    'Hover': 'block'
  }

  useHotkeys([
    ['ctrl+I', handleShowedStatus]
  ]);

  const handleChipClick = (navValue: NavbarType) => {
    if (activeChip === navValue) {
      setActiveChip('Rifamax'); 
      setNav('Rifamax');
    } else {
      setActiveChip(navValue);
      setNav(navValue);
    }
  };

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
      {...(classes.integratorWrapper && { className: classes.integratorWrapper })}
    >
      <Group justify="space-between">
        <Avatar size="md" radius='md'>
          <IconBrush />
        </Avatar>
        <Text fw={700} fz={15} ta="end" c='white'>
          Developer Tool | Integrator Navbar
        </Text>
      </Group>
      <Chip
  checked={activeChip === 'Rifamax'}
  onChange={() => handleChipClick('Rifamax')}
  mt={35}
  size='xl'
>
  Rifamax
</Chip>

<Chip
  checked={activeChip === 'CDA'}
  onChange={() => handleChipClick('CDA')}
  mt={15}
  size='xl'
  color="orange"
>
  CDA
</Chip>

<Chip
  checked={activeChip === 'BetFm4'}
  onChange={() => handleChipClick('BetFm4')}
  mt={15}
  size='xl'
  color="green"
>
BetFm4
</Chip>



    </motion.div>
  )
}

export default index;
