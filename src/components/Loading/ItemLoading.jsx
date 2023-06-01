import './ItemLoading.css'

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ItemLoading = ({quantity}) => {   
    return Array(quantity)
    .fill(0)
    .map((i) => (
        <div key={i}>
            <Skeleton  className='skeleton-image'/>
            <Skeleton  className='skeleton-text' count={2} />
        </div>
    ))
}

export default ItemLoading