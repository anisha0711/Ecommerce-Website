import Footer from "../common/Footer";
import Navbar from "../navbar/Navbar";
import ProductDetail from "../product-list/components/ProductDetail";
function ProductDetailPage() {
    return ( 
        <div>
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailPage;