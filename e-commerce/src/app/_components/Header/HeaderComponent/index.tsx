'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.nav, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={classes.wrapper}>
        <Link href={'/'}>
          <Image src={'/heading.svg'} alt="Logo" width={170} height={50} />
        </Link>

        <HeaderNav header={header} />
      </div>
    </nav>
  )
}

export default HeaderComponent
