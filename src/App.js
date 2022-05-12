import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Router path="*">
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
