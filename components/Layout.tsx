import { FC } from 'react'
import Head from 'next/head'

interface ILayout {
  title: string
}

const Layout: FC<ILayout> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'TITLE',
}

export default Layout
