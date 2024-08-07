import WoodTitle from "@components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { Title, Button } from "@mantine/core";
import { IconPrinter } from "@tabler/icons-react";

function ModalPrintTickets() {
  const openPrintTicketsModal = () => modals.open({
    title: <Title order={3}>Imprimir tickets</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="Imprimiendo..." variant="dashed" />
      </>
    )
  })

  return (
    <Button variant="light" color="blue" leftSection={<IconPrinter />} onClick={openPrintTicketsModal}>
      Imprimir tickets
    </Button>
  );
}

export default ModalPrintTickets