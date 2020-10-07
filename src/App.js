import { lazy, Suspense } from "react";
import React from "react";

import { Switch, Route } from "react-router-dom";
import CarouselNavbar from "../src/components/carouselNavbar/CarouselNavbar";

import Footer from "../src/components/footer/Footer";
const HomePage = React.lazy(() => import("../src/pages/homepage/Homepage"));

function App() {
  return (
    <div>
      <Switch>
        <Suspense fallback={<div>Error</div>}>
          <Route path="/" component={HomePage} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
