import Head from 'next/head';
import React, { FunctionComponent, useState } from 'react'
import Navbar from './Navbar';

interface LayoutProps {
	children: JSX.Element;
}
 
const Layout: FunctionComponent<LayoutProps> = (props) => {
  const [lang, setLang] = useState(1)
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hire Professional Freelancer &amp; React Developer. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security"
        />
        <meta name="robots" content="noodp" />
          <meta property="og:locale" content="tr_TR" />
          <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Front End Developer | JavaScript Engineer - Freelancer"
        />
        <meta
          property="og:description"
          content="Hire Professional Freelancer &amp; React Developer. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security"
        />
        <meta
          property="og:site_name"
          content="Front End Developer | JavaScript Engineer - Freelancer | Umut"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Hire Professional Freelancer &amp; React Developer. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security"
        />
        <meta
          name="twitter:title"
          content="Front End Developer | JavaScript Expert - Freelancer"
        />
      </Head>
			<Navbar />
        {
            React.cloneElement(props.children, {
                lang: lang
            })
        }
    </>
  );}
 
export default Layout;
