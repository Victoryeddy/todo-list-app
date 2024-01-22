// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({

    theme: {
    // defaultTheme: 'dark',
    themes: {
      light: {
        primary: '#C73539',
        secondary: '#FCE4EC',
        background: '#EEDDDD',
        error: '#b71c1c',
        navigationDrawer: '#fff',
        cards: '#fff',
        textColor: "#1c1c1c",
        accentColor: "#35C738"
      },

      dark: {
        textColor: "#fff",
        primary: '#920e17',
        cards: '#333',
        navigationDrawer: '#111',
        accentColor: "#fff",
        background: '#111'
      }
    },
  },
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
