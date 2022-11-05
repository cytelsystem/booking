import { useState } from 'react';
import Card from '../../shared/Card/Card';
import SideMainLayout from '../../shared/Layouts/SideMainLayout';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';

export default function ProductCard({product}) {
    const [isFavorite, setIsFavorite] = useState(false);

    const addFavorite = () => {
        setIsFavorite(!isFavorite)
        console.log(product.id)
    }
    return (
        <Card classList={'db-card-product'}>
            <SideMainLayout side={<ProductImage addFavorite={addFavorite} isFavorite={product.isFavorite || isFavorite} url={product.images.length ? product.images[0].url: ''} productName={product.images.length ? product.images[0].title : ''}  />} main={<ProductDescription {...product} />} />
        </Card>
    ) 
}