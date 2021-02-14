import { darken, lighten } from 'polished';
export const lightTheme = {
  body: '#f5f5f5',
  text: darken(0.2, '#ccc'),
  primaryText: '#42b983',
  buttonText: '#fff',
  buttonBg: '#42b983',
  buttonSubmit: '#42b983',
  toggleBorder: '#42b983',
  background: '#fff',
};

export const darkTheme = {
  body: '#2d2d2d ',
  text: lighten(0.1, '#bababa'),
  primaryText: '#42b983',
  buttonText: '#fff',
  buttonBg: '#42b983',
  buttonSubmit: '#42b983',
  toggleBorder: '#42b983',
  background: '#111',
};
