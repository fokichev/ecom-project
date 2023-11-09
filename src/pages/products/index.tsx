import { useGetAllProducts } from "../../functions/Product.functions";
import { Product } from "../../server/models/Product.Model";


const ProductsPage = () => {

    const {
		data: allProductsData,
		// isFetching,
        isSuccess,
		// isError
	} = useGetAllProducts();

    return (
        <div>
            { isSuccess && allProductsData.map(product => <ProductItem product={product} />)}
        </div>
    )
}

const ProductItem = ({ product }: { product: Product }) => {
    const {
        name,
        // price,
        // img,
        // type,
        // stock,
        // createdAt
    } = product;

    return (
        <div>
            <span>{name}</span>
        </div>
    )
}

export default ProductsPage;