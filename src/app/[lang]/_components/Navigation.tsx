import Link from 'next/link'
import React, { Fragment } from 'react'

const Navigation = ({ data }: any) => {
  const { title } = data

  return (
    <Fragment>
      <h1>{title}</h1>
      <Link href="/fa-ir">فارسی</Link>
      <Link href="/sv">svenska</Link>
    </Fragment>
  )
}

export default Navigation
