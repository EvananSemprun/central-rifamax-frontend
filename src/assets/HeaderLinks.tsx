import React from 'react';
import { 
  IconHome, 
  IconPackages,
  IconUsersGroup, 
  IconBrandAppleArcade, 
  IconFlag,
  IconBug,
  IconBook,
  IconTerminal2,
  IconServer2,
  IconUsers
} from '@tabler/icons-react';
import { ADMIN, ALL, GATES } from '@utils/roles';

export const HeaderLinks: { [key: string]: { title: string; to: string, role: string[], icon?: React.ReactNode }[] } = {
  productos: [
    { title: 'Productos', to: '/', role: ALL, icon: <IconPackages size='1.8rem' stroke={1.6} /> }
  ],
  admin: [
    { title: 'Inicio', to: '/admin/dashboard', role: ADMIN, icon: <IconHome size='1.8rem' stroke={1.6} /> },
    { title: 'Riferos', to: '/admin/sellers', role: ADMIN, icon: <IconUsers size='1.8rem' stroke={1.6} /> },
    { title: 'Usuarios', to: '/admin/users', role: ADMIN, icon: <IconUsersGroup size='1.8rem' stroke={1.6} /> },
  ],
  rifamax: [
    { title: 'Inicio', to: '/rifamax/dashboard', role: ALL, icon: <IconHome size='1.8rem' stroke={1.6} /> },
    { title: 'Riferos', to: '/rifamax/sellers', role: GATES, icon: <IconUsers size='1.8rem' stroke={1.6} /> },
  ],
  x100: [
    { title: 'Lobby', to: '/x100', role: ALL, icon: <IconBrandAppleArcade size='1.8rem' stroke={1.6} /> },
  ],
  "opciones de desarrollador": [
    { title: 'Información del Server', to: '/dev/server', role: ADMIN, icon: <IconServer2 size='1.8rem' stroke={1.6} /> },
    { title: 'Reportes de Bugs', to: '/dev/reports', role: ADMIN, icon: <IconBug size='1.8rem' stroke={1.6} /> },
    { title: 'Feature Flags', to: '/dev/feature_flags', role: ADMIN, icon: <IconFlag size='1.8rem' stroke={1.6} /> },
    { title: 'Storybook', to: '/dev/storybook', role: ADMIN, icon: <IconBook size='1.8rem' stroke={1.6} /> },
    { title: 'Tracking', to: '/dev/logs', role: ADMIN, icon: <IconTerminal2 size='1.8rem' stroke={1.6} /> },
  ],
};
