// import Header from './components/Header/header'
// import Footer from './components/Footer/Footer'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
