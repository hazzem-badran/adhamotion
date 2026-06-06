import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import PageErrorBoundary from "./components/PageErrorBoundary";
import { ToastProvider } from "./components/Toast";
import ThemeProvider from "./design-system/ThemeProvider";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <ToastProvider>
          <Suspense fallback={<Loader />}>
            <Container>
              <Routes>
                <Route
                  index
                  element={
                    <PageErrorBoundary>
                      <Home />
                    </PageErrorBoundary>
                  }
                />
                {/* Legacy multi-page routes now live as sections on the single-page landing */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Container>
          </Suspense>
        </ToastProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
