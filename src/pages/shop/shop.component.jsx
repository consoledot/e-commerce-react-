import React,{Component} from 'react'
import shopData from './shop.data'
import Collection from '../../components/collection/collection.component'

class ShopPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            collections:shopData
        }
    }
    render(){
        const {collections} = this.state
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherProps})=>(
                        <Collection key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage