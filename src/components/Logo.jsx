import Image from 'next/image'
import logo from '@/images/logos/xsre.svg'

export function Logo(props) {
  return (
            <Image src={logo} alt={"Xsre Tech"} unoptimized />
  )
}
