import ProductRating from "./ProductRating";
import ProductDescription from "./ProductDescription";
import ShippingOptions from "./ShippingOptions";
import ProductPrice from "./ProductPrice";
import Availability from "./Availability";
import AddToCartButton from "./AddToCartBtn";

function ProductDetails({ product }) {
    return (
        <div>
            <ProductDescription text={product.shortDescription} />
            <ProductRating rating={product.customerReviewAverage} ratingCount={product.customerReviewCount} />
            <ProductPrice regularPrice={product.regularPrice} salePrice={product.salePrice} />
            <Availability inStoreAvailability={product.inStoreAvailability} />
            <ShippingOptions options={product.shipping} />
            <div>
                <div>Manufacturer</div>
                <span>{product.manufacturer}</span>
            </div>
            <AddToCartButton sku={product.sku} name={product.name} />
        </div>
    )
}

export default ProductDetails
