import {Component} from 'react'
import './App.scss';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import {Switch, Route} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends Component{
  constructor(){
    super()
    this.state={
      currentUser: null
    }
  }
  unsubcribeFromAuth = null
  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShop => {
         this.setState({
           currentUser:{
             id:snapShop.id,
             ...snapShop.data()
           }
         })  
        })
      }
      this.setState({currentUser:userAuth})
    })
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndOutPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
