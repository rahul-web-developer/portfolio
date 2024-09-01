import Footer from "./Footer"
import Header from "./Header"
import Section from "./Section"

const Layout = ({children, DeveloperInfo}) => {
  
  return (
   <div>
    <Header data={DeveloperInfo} />
    <Section >{children}</Section>
    <Footer data={DeveloperInfo} />
   </div>
  )
}

export default Layout