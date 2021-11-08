import Toolbar from '@mui/material/Toolbar';
import { useParams } from 'react-router-dom';

function Product() {
    const { sku }: { sku: string } = useParams();

    return (
        <div>
            <Toolbar />
            <h1>Product page {sku}</h1>
        </div>
    )
}

export default Product;
