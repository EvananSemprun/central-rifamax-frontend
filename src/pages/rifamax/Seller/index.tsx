import classes from './index.module.css';
import SellerTable from '@components/rifamax/Seller/sellerTable'
import ModalCreateSeller from '@components/rifamax/Seller/ModalCreateSeller'
import { ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Card, Group, ScrollArea, Title, Stack, Text } from '@mantine/core'

function index() {
  const isSmallScreen = useMediaQuery('(max-width: 940px)');

  const ResponsiveSection = ({ children }: { children: ReactNode }) =>
    isSmallScreen ? (
      <Stack align="center" mt={15}>
        {children}
      </Stack>
    ) : (
      <Group justify="space-between" mt={15}>{children}</Group>
    );

  return (
    <Card className={classes.CardSellers}>
      <ResponsiveSection>
        <div>
          <Title order={2}>
            Riferos
          </Title>
          <Text fz={16} fw={300}>
            Lista de los riferos registrados en la plataforma
          </Text>
        </div>
        <ModalCreateSeller />
      </ResponsiveSection>
      <SellerTable />
    </Card>
  )
}

export default index;
