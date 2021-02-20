import './collections-overview.style.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectShopData} from '../../redux/shop/shop.selector'
import Collection from '../collection/collection.component'


const CollectionsOverview = ({collections})=>(
    <div className="collection-overview">
         {
             collections.map(({id, ...otherProps})=>(
                <Collection key={id} {...otherProps}/>
             ))
         }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})

export default connect(mapStateToProps)(CollectionsOverview)