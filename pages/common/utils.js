import { THEME } from './constants'

export function setTheme(theme) {
  document
    .querySelector('#theme-root')
    .style.setProperty('--brand-1', THEME[theme].brand1)
  document
    .querySelector('#theme-root')
    .style.setProperty('--brand-2', THEME[theme].brand2)
  document
    .querySelector('#theme-root')
    .style.setProperty(
      '--img-hue-rotate',
      THEME[theme].hueRotate
    )
}
