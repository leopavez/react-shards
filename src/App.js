import React, { lazy, Suspense } from "react";
import { Container, Row, Col } from "shards-react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoutes from "./routes/protectedRoutes"; //Authenticated routes
import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import MainSidebar from "./components/layout/MainSidebar/MainSidebar";
import MainNavbar from "./components/layout/MainNavbar/MainNavbar";
import MainFooter from "./components/layout/MainFooter";

const LoginPage = lazy(() => import("./pages/login"));

const App = () => {
  const isAuthenticated = true;

  return (
    <Router>
      <Suspense
        fallback={
          <Backdrop
            sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <Switch>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <Container fluid>
              <Row>
                <MainSidebar />
                <Col
                  className="main-content p-0"
                  lg={{ size: 10, offset: 2 }}
                  md={{ size: 9, offset: 3 }}
                  sm="12"
                  tag="main"
                >
                  {<MainNavbar />}
                  <ProtectedRoutes />
                  {<MainFooter />}
                </Col>
              </Row>
            </Container>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
