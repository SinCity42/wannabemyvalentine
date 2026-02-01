import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wannabemyvalentine/',  // Add this line (your exact repo name)
})
