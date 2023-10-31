import LogoMenuComponent from './logo-menu'
import useSticky from './sticky';


type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {

  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <div className="min-h-screen">
        {/* make LogoMenuComponent sticky */}
        <LogoMenuComponent />
        {/* <nav ref={stickyRef} className={"fixed top-0"}>
        Sticky nav
      </nav>
      <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
        }}
      /> */}
        <main className='mt-36'>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
