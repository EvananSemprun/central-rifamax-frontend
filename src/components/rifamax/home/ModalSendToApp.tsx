import WoodTitle from "@components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { Title, Button } from "@mantine/core";
import { IconDeviceMobileMessage } from "@tabler/icons-react";

function ModalSendToApp() {
  const openSentToAppModal = () => modals.open({
    title: <Title order={3}>Enviar a APP</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="Enviando..." variant="dashed" />
      </>
    )
  })

  return (
    <Button variant="light" color="blue" leftSection={<IconDeviceMobileMessage />} onClick={openSentToAppModal}>
      Enviar a APP
    </Button>
  );
}

export default ModalSendToApp