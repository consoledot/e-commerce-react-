import {Component} from 'react'
import './App.scss';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import {Switch, Route, Redirect} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from "react-redux";
import {setCurrentUser} from './redux/user/user.action'

class App extends Component{
  unsubcribeFromAuth = null
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShop => {
         setCurrentUser({
             id:snapShop.id,
             ...snapShop.data()
         })  
        })
      }
     setCurrentUser(userAuth)
    })
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndOutPage/>)}/>
        </Switch>
      </div>
    );
  }
  
}
const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
