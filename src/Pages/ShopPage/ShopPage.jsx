import React from 'react'
import SHOP_DATA from './ShopData'
import CollectionsPreview from '../../Components/CollectionsPreview/CollectionsPreview'



class ShopPage extends React.Component {

    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionsProps }) => (
                        <CollectionsPreview key={id} {...otherCollectionsProps} />
                    ))
                }


            </div>
        )


    }

}

export default ShopPage;

