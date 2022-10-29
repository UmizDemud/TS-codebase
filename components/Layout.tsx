import React, { FunctionComponent, useState } from 'react'
import Navbar from './Navbar';

interface LayoutProps {
	children: JSX.Element;
}
 
const Layout: FunctionComponent<LayoutProps> = (props) => {
  const [lang, setLang] = useState(1)
  return (
    <>
			<Navbar />
        {
            React.cloneElement(props.children, {
                lang: lang
            })
        }
    </>
  );}
 
export default Layout;
