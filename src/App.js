import React from 'react';

import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import {
  Switch,
  Route,

} from "react-router-dom";
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase.utils';
import { connect } from 'react-redux'

import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {


  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {

          setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()


          })
        })
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>


      </>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(null, mapDispatchToProps)(App);



////// 8 7
