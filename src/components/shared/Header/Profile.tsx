import useAuth from "@hooks/useAuth";
import useUser from "@hooks/useUser";
import classes from "./Profile.module.css";
import ModalEditUser from "./ModalEditUser";
import LoaderBlur from "../Loaders/LoaderBlur";
import { initials } from "@utils/string";
import { IconUserCircle } from "@tabler/icons-react";
import { Avatar, Button, Center, Group, Popover, Text } from "@mantine/core";

function Profile() {
  const { user } = useUser();
  const { logout } = useAuth();

  const avatarUrl = user?.avatar ? `${user.avatar}?t=${new Date().getTime()}` : null;

  const PopoverContent = () => {
    const userInfo = [
      { className: classes.textName, value: user?.name },
      { className: classes.textRole, value: user?.role },
      { className: classes.textInfo, value: user?.email },
      { className: classes.textInfo, value: user?.dni },
    ];

    return (
      <>
        <Center>
          <Avatar
            variant="light"
            color="blue"
            size="xl"
            radius="lg"
            src={avatarUrl}
          >
            {initials(user?.name || '')}
          </Avatar>
        </Center>
        {userInfo.map((info, index) => (
          <Text key={index} className={info.className}>{info.value}</Text>
        ))}
        <Group gap={10} mt={15}>
          <ModalEditUser />
          <Button
            variant="light"
            color="red"
            className={classes.actionButton}
            onClick={logout}
          >
            Cerrar Sesión
          </Button>
        </Group>
      </>
    );
  };

  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button
          variant='default'
          style={{ border: 'none' }}
        >
          <IconUserCircle size="2rem" />
        </Button>
      </Popover.Target>
      <Popover.Dropdown mah={400} h={265}>
        {user ? <PopoverContent /> : <LoaderBlur label="Cargando perfil..." />}
      </Popover.Dropdown>
    </Popover>
  );
}

export default Profile;
