import Dropdown from './Dropdown'
import { THEME } from '../common/constants'

export const getServerSideProps = async (context) => {
  // If we've seen this person before, display a "Welcome back!" message
  console.log(context)
  const theme = context.req.cookies['--yulei-theme']
  console.log(context.req.cookies)
  return { props: { defaultTheme: theme || 'theme0' } }
}

export default function Layout({
  children,
  defaultTheme = 'theme0',
}) {
  console.log(children)
  console.log(defaultTheme)

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
        <Dropdown
          className="
            fixed top-5 right-5
            md:right-1/2 md:translate-x-1/2
          "
        />
        {children}
      </div>
    </div>
  )
}
