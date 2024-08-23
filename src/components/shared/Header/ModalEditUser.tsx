import FormEditUser from '@form/shared/FormEditUser';
import { modals } from '@mantine/modals';
import { Button, Title } from '@mantine/core';

function ModalEditUser() {
  const openCloseDayModal = () => modals.open({
    title: (
      <Title order={3}>Editar Perfil</Title>
    ),
    size: 'md',
    centered: true,
    closeOnClickOutside: false,
    children: (
      <>
        <FormEditUser />
      </>
    ),
  });

  return (
    <Button
      variant="light"
      color="blue"
      onClick={openCloseDayModal}
    >
      Editar perfil
    </Button>

  );
}

export default ModalEditUser;
