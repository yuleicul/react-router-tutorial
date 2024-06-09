import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Fix files in `dist/assets` not founded in deployment env (github pages)
  // https://github.com/orgs/community/discussions/61478#discussioncomment-6516001
  base: '/react-router-tutorial',
  plugins: [react()],
})
