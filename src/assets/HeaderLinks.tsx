import React from 'react';
import { 
  IconHome, 
  IconPackages,
  IconUsersGroup, 
  IconBrandAppleArcade 
} from '@tabler/icons-react';

export const HeaderLinks: { [key: string]: { title: string; to: string, role: string[], icon?: React.ReactNode }[] } = {
  productos: [
    { title: 'Productos', to: '/', role: ['Admin', 'Taquilla'], icon: <IconPackages size='1.8rem' stroke={1.6} /> }
  ],
  admin: [
    { title: 'Inicio', to: '/admin/dashboard', role: ['Admin', 'Taquilla'], icon: <IconHome size='1.8rem' stroke={1.6} /> },
    { title: 'Usuarios', to: '/admin/users', role: ['Admin', 'Taquilla'], icon: <IconUsersGroup size='1.8rem' stroke={1.6} /> },
  ],
  rifamax: [
    { title: 'Inicio', to: '/rifamax/dashboard', role: ['Admin', 'Taquilla'], icon: <IconHome size='1.8rem' stroke={1.6} /> },
  ],
  x100: [
    { title: 'Lobby', to: '/x100/lobby', role: ['Admin', 'Taquilla'], icon: <IconBrandAppleArcade size='1.8rem' stroke={1.6} /> },
  ]
};
