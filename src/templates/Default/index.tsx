import Header from 'components/Header'
import Footer from 'components/Footer'

const Default: React.FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Default
