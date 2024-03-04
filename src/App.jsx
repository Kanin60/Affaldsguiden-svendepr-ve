
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { TrashguidePage } from './pages/TrashguidePage/TrashguidePage';
import { TrashDetailsPage } from './pages/TrashDetailsPage/TrashDetailsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { MainLayout } from './layout/MainLayout';
import { RecyclingCenterPage } from './pages/RecyclingCenterPage/RecyclingCenterPage';
import { RecyclingDetailsPage } from './pages/RecyclingDetailsPage/RecyclingDetailsPage';
import { TrashContainerPage } from './pages/TrashContainerPage/TrashContainerPage';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='/sortering' element={<TrashguidePage />} />
                        <Route path='/sortering/:id' element={<TrashDetailsPage />} />
                        <Route path='/genbrugsstationer' element={<RecyclingCenterPage />} />
                        <Route path='/genbrugsstationer/:id' element={<RecyclingDetailsPage />} />
                        <Route path='/bestil-beholder' element={<TrashContainerPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App

