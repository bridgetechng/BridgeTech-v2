import { lazy } from 'react';

const ProfileConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/bootcamp-details',
      component: lazy(() => import('./BootCampDetails')),
    },
  ],
};

export default ProfileConfig;


