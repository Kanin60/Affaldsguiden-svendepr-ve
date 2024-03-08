import { Header } from '../components/Header/Header'
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer'
import { Waves } from '../components/Waves/Waves';

export const MainLayout = () => {

    //opbygning af site
    return (
        <div>
            <Header />
            <Outlet />
            <Waves />
            <Footer />
        </div>
    )
}

