import Alert from './alert'
import Footer from './footer'
import LogoMenuComponent from './logo-menu'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* Add menu link to my course website */}
        <LogoMenuComponent />
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
