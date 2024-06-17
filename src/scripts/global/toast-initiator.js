import { Notyf } from 'notyf';

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'center',
    y: 'bottom',
  },
  types: [
    {
      type: 'info',
      background: '#0017EB',
      icon: false,
    },
    {
      type: 'error',
      background: 'red',
      icon: false,
    },
    {
      type: 'success',
      background: '#2EAB34',
      icon: false,
    },
  ],
});

export default notyf;
