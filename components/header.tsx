import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
      <Image src={"https://res.cloudinary.com/dqrkrqm9y/image/upload//c_thumb,w_46,g_auto/v1694303495/back-button_kac1dl.png"} width={24} height={24} className="w-9 h-9 rounded-full mr-4" alt={''} />

      </Link>
      </div>
  )
}

export default Header
