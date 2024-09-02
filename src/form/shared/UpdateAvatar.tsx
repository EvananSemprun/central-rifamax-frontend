import useUser from "@hooks/useUser";
import useAuth from "@/hooks/useAuth";
import { useState } from 'react';
import { uploadAvatar } from "@api/shared/App.request";
import { useMutation } from '@tanstack/react-query';
import { Avatar, Center, Button } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";
import { IUser } from '@interfaces/models.interfaces';
import { AxiosResponse } from "axios";

const UpdateAvatar = () => {
  const { token } = useAuth();
  const { user, setAvatar } = useUser();
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const mutation = useMutation({
    mutationFn: (file: File) => uploadAvatar({ token: token, avatar: file }),
    onSuccess: (response: AxiosResponse<IUser['user']>) => {
      setAvatar(response.data.avatar);
      SuccessNotification({ 
        position: 'top', 
        title: 'Avatar actualizado con éxito.', 
        label: 'Tu avatar se ha actualizado correctamente.' 
      });
    },
    onError: () => {
      ErrorNotification({ 
        position: 'top', 
        title: 'Ha ocurrido un error.', 
        label: 'Hubo un problema al intentar actualizar tu avatar.' 
      });
    }
  });

  const handleDrop = (droppedFiles: FileWithPath[]) => {
    if (droppedFiles.length > 0 && droppedFiles[0]) {
      setFiles(droppedFiles);
      mutation.mutate(droppedFiles[0]);
    }
  };

  const avatarUrl = files.length > 0 && files[0] ? URL.createObjectURL(files[0]) : user?.avatar;

  return (
    <>
      <Center>
        <Avatar
          size="xl"
          radius="5px 5px 0 0"
          w={150}
          h={150}
          src={avatarUrl}
        />
      </Center>

      <Center mb={10}>
        <Dropzone w={150} accept={IMAGE_MIME_TYPE} onDrop={handleDrop}>
          <Button 
            ta='center' 
            fullWidth 
            variant="filled"
            radius='0px 0px 5px 5px'
          >
            Actualizar foto
          </Button>
        </Dropzone>
      </Center>
    </>
  );
}

export default UpdateAvatar;
