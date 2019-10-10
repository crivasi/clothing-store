import React from "react";
import "./App.css";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFirebaseAuth = null;

  componentDidMount() {
    //nos suscribimos para saber todo lo que pase con el usuario, si inició sesión en otro lado o si cerró sesión
    this.unsubscribeFirebaseAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(userSnapshot => {
          this.setState({
            currentUser: {
              id: userSnapshot.id, // el snapshot es el que contiene el id del documento
              ...userSnapshot.data() // aquí están todos los demás campos guardados en firebase
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFirebaseAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/hats"></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
