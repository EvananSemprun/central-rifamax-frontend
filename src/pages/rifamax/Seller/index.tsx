import classes from './index.module.css';
import SellerTable from '@components/rifamax/Seller/sellerTable'
import ModalCreateSeller from '@components/rifamax/Seller/ModalCreateSeller'
import { ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Card, Group, ScrollArea, Title, Stack } from '@mantine/core'

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
          <Title order={4}>
            Lista de los riferos registrados en la plataforma
          </Title>
        </div>
        <ModalCreateSeller />
      </ResponsiveSection>
      <ScrollArea mt={15} type="never" h={700}>
        <SellerTable />
      </ScrollArea>
    </Card>
  )
}

export default index;
