import Navbar from "../navbar/Navbar";
import ProductDetail from "../product-list/components/ProductDetail";
function ProductDetailPage() {
    return ( 
        <div>
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
        </div>
     );
}

export default ProductDetailPage;