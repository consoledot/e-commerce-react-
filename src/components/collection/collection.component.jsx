import React from 'react'
import './collection.style.scss'
import CollectionItem from '../collection-item/collection-item.component'

const Collection = ({title,items })=>(
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
                {
                    items.filter((item,idx)=> idx < 4).map(({id, ...otherProps})=>(
                      <CollectionItem key={id}{...otherProps} />
                    ))
                }
        </div>
    </div>
)
export default Collection