import Footer from "../common/Footer";
import Navbar from "../navbar/Navbar";
import ProductList from "../product-list/components/ProductList";

function Home() {
    return ( 
        <div>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
            <Footer></Footer>
        </div>
     );
}

export default Home;