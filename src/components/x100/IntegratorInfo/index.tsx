import classes from './index.module.css'
import useIntegrator from "@hooks/useIntegrator"
import { useState } from "react"
import { motion } from 'framer-motion'
import { AxiosResponse } from 'axios';
import { useHotkeys } from '@mantine/hooks';
import { maskEmail } from '@utils/transform';
import { useQuery } from "@tanstack/react-query"
import { IIntegratorInfo } from "@interfaces/index"
import { DevType } from "@interfaces/models.interfaces"
import { getCDAPlayer } from "@api/x100/Integrator.request"
import { ICDAResponse } from '@interfaces/requests.interfaces';
import { Avatar, Button, Card, CopyButton, Group, Text } from "@mantine/core"
import { IconClipboard, IconClipboardCheck, IconTool } from "@tabler/icons-react"
function index({ playerId, integrator, integratorToken }: IIntegratorInfo) {
  const [showedStatus, setShowedStatus] = useState<DevType>('Hidden')

  const { integrator: integratorData, setIntegrator, removeIntegrator } = useIntegrator()

  const { data: response, isSuccess, isError } = useQuery<AxiosResponse<ICDAResponse, string>>({
    retry: 2,
    queryKey: ['integrator'],
    queryFn: () => getCDAPlayer({ playerId: Number(playerId), currency: 'USD' }),
  })

  const parametersCopy = `id: ${playerId} | token: ${integratorToken} | integrator: ${integrator}`
  const integratorCopy = `wallet id: ${integratorData.wallet_id} | name: ${integratorData.data.user.name} | email: ${integratorData.data.user.email} | currency: ${integratorData.currency}`

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
    'Hover': '400px'
  }
  
  const showedDisplays = {
    'Hidden': 'none',
    'Showed': 'block',
    'Hover': 'block'
  }
  useHotkeys([
    ['ctrl+K', handleShowedStatus]
  ]);

  if (isSuccess) {
    setIntegrator(response.data);
  } else if (isError) {
    console.log('Integrator data not found, attempting to remove integrator');
    integratorData?.player_id ? removeIntegrator() : console.warn('No integrator data available, skipping removal');
  }
  

  const ReceivedParamsCard = () => (
    <Card 
      className={classes.paramsCard}
    >
      <Group justify="space-between" w="100%">
        <Text fw={700}>Player ID:</Text>
        <Text>{playerId === undefined ? 'No integrator' : playerId}</Text>
      </Group>
      <Group justify="space-between" w="100%">
        <Text fw={700}>Integrator:</Text>
        <Text>{integrator}</Text>
      </Group>
      <Group justify="space-between" w="100%">
        <Text fw={700}>Integrator Token:</Text>
        <Text>{integratorToken === undefined ? 'No integrator' : `${integratorToken.slice(0, 13)}...`}</Text>
      </Group>
    </Card>
  )

  const IntegratorSignedInCard = () => (
    <Card className={classes.paramsCard}>
      <Group justify="space-between" w="100%">
        <Text fw={700}>Integrator User ID:</Text>
        <Text>{integratorData.player_id}</Text>
      </Group>
      <Group justify="space-between" w="100%">
        <Text fw={700}>Integrator Wallet ID:</Text>
        <Text>{integratorData.wallet_id}</Text>
      </Group>
      <Group justify="space-between" w="100%">
        <Text fw={700}>Name:</Text>
        <Text>{integratorData.data.user.name}</Text>
      </Group>
      <Group justify="space-between" w="100%">
        <Text fw={700}>Email:</Text>
        <Text>{maskEmail(integratorData.data.user.email)}</Text>
      </Group>
      <Group justify="space-between" w="100%">
        <Text fw={700}>Currency:</Text>
        <Text>{integratorData.currency}</Text>
      </Group>
      <Group justify="space-between" w="100%">
        <Text fw={700}>Balance:</Text>
        <Text>{integratorData.balance}</Text>
      </Group>
    </Card>
  )

  return (
    <motion.div 
      animate={{
        top: showedStatues[showedStatus],
        display: showedDisplays[showedStatus],
        opacity: showedStatus === 'Showed' ? .3 : 1
      }}
      onHoverStart={hoverShowedStatus}
      onHoverEnd={unhoverShowedStatus}
      {...(classes.integratorWrapper && { className: classes.integratorWrapper })}
    >
      <Group justify="space-between">
        <Avatar size="md" radius='md'>
          <IconTool />
        </Avatar>
        <Text fw={700} fz={15} ta="end">
          Developer Tool | Integrator Params Catcher
        </Text>
        <Group w="100%" justify="space-between">
          <Text fw={700} fz='lg'>Parameters received</Text>
          <CopyButton 
            value={parametersCopy}
          >
            {({ copied, copy }) => (
              <Button size="xs" px={20} py={5} variant="light" color={copied ? 'teal' : 'white'} onClick={copy}>
                {copied ? <IconClipboardCheck size='1rem' /> : <IconClipboard size='1rem' />}
              </Button>
              )}
          </CopyButton>
        </Group>
        <ReceivedParamsCard />
        <Group w="100%" justify='space-between'>
          <Text fw={700} fz='lg'>Integrator signed in</Text>
          <CopyButton 
            value={integratorCopy}
          >
            {({ copied, copy }) => (
              <Button size="xs" px={20} py={5} variant="light" color={copied ? 'teal' : 'white'} onClick={copy}>
                {copied ? <IconClipboardCheck size='1rem' /> : <IconClipboard size='1rem' />}
              </Button>
              )}
          </CopyButton>
        </Group>
        <IntegratorSignedInCard />
        <Text w="100%" mt={-10} ta='center' fw={700} fz={12}>
          {integratorData.player_id === 0 ? 'Integrator is disabled' : `Integrator is enabled from structure ${integrator}`}
        </Text>
      </Group>
    </motion.div>
  )
}

export default index