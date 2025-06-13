import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
import PageContainer from './components/PageContainer/PageContainer';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CarCatalog = lazy(() => import('./pages/CarCatalog/CarCatalog'));
const CarDetailInfo = lazy(() =>
  import('./pages/CarDetailInfo/CarDetailInfo')
);
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/catalog"
            element={
              <PageContainer>
                <CarCatalog />
              </PageContainer>
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <PageContainer>
                <CarDetailInfo />
              </PageContainer>
            }
          />
          <Route
            path="*"
            element={
              <PageContainer>
                <ErrorPage />
              </PageContainer>
            }
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;