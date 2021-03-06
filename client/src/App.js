import { Suspense } from "react";
import React from "react";

import { Switch, Route } from "react-router-dom";

import Footer from "../src/components/footer/Footer";
import WithNavbar from "../src/components/withNavbar/WithNavbar";

const HomePage = React.lazy(() => import("../src/pages/homepage/Homepage"));
const ShopPage = React.lazy(() => import("../src/pages/shopPage/Shop"));
const CheckoutPage = React.lazy(() => import("../src/pages/checkout/Checkout"));
const AboutPage = React.lazy(() => import("../src/pages/about/AboutPage"));
const LocationsPage = React.lazy(() =>
  import("../src/pages/locations/Locations")
);
const SingleProductPage = React.lazy(() =>
  import("../src/pages/singleProduct/SingleProduct")
);
const ResellPage = React.lazy(() => import("../src/pages/resell/Resell"));
const ContactPage = React.lazy(() =>
  import("../src/pages/contactPage/ContactPage")
);
const CompletePage = React.lazy(() =>
  import("../src/pages/completedOrder/Complete")
);

const ShopPageWithNavbar = WithNavbar(ShopPage);
const CheckoutPageWithNavbar = WithNavbar(CheckoutPage);
const AboutPageWithNavbar = WithNavbar(AboutPage);
const LocationPageWithNavbar = WithNavbar(LocationsPage);
const SingleProductWithNavbar = WithNavbar(SingleProductPage);
const ResellPageWithNavbar = WithNavbar(ResellPage);
const ContactPageWithNavbar = WithNavbar(ContactPage);
const CompletePageWithNavabr = WithNavbar(CompletePage);

function App() {
  return (
    <div>
      <Switch>
        <Suspense fallback={<div>Error</div>}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPageWithNavbar} />
          <Route path="/checkout" component={CheckoutPageWithNavbar} />
          <Route path="/about" component={AboutPageWithNavbar} />
          <Route path="/locations" component={LocationPageWithNavbar} />
          <Route
            exact
            path="/product/:id"
            component={SingleProductWithNavbar}
          />
          <Route path="/become-reseller" component={ResellPageWithNavbar} />
          <Route path="/contacts" component={ContactPageWithNavbar} />
          <Route path="/complete-order" component={CompletePageWithNavabr} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
