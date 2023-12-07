import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   'process.env': {
  //     BACKEND_URL_SERVER: 'https://human-resources-backend.onrender.com/hr' 
  //   }},
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import '/styles/main.scss';`,
      },
    },
  },
})
