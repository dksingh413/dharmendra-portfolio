export const THEME_KEY = 'theme'

// Runs before first paint so a saved light theme never flashes dark.
export const themeInitScript = `try{if(localStorage.getItem('${THEME_KEY}')==='light')document.documentElement.classList.add('light')}catch(e){}`
