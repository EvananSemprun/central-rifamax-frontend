import EditUserForm from '@/form/shared/EditUser.form';
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
			<EditUserForm />
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
