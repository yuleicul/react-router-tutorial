import '@code-hike/mdx/dist/index.css'
import App from 'next/app'
import '../global.css'
import Dropdown from '../components/Dropdown'
import Social from '../components/Social'
import { THEME } from '../lib/constants'

export default function MyApp({
  Component,
  pageProps,
  defaultTheme,
}) {
  return (
    <div
      id="theme-root"
      style={{
        '--brand-1': THEME[defaultTheme].brand1,
        '--brand-2': THEME[defaultTheme].brand2,
        '--img-hue-rotate': THEME[defaultTheme].hueRotate,
      }}
    >
      <div className="min-h-screen md:bg-gradient-to-r from-brand-1 from-50% to-brand-2 to-50%">
        <Dropdown className="fixed top-5 right-5 md:right-1/2 md:translate-x-1/2" />
        <div className="absolute w-[50vw] pt-[30vh] flex justify-end px-20 text-brand-2">
          <Social />
        </div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
  // Fix theme switching after first loading
  // https://nextjs.org/docs/pages/building-your-application/routing/custom-app#getinitialprops-with-app
  const theme = context.ctx.req.cookies['--yulei-theme']
  return { ...ctx, defaultTheme: theme || 'theme0' }
}
