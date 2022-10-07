import './HomeScreen.css';
import Product from '../component/Product';
const HomeScreen = () => {
    
    return ( <div className="homescreen">
        <h2 className='homescreen_title'>Latest Products</h2>

        <div className="homescreen_products">
            <Product/>
            
        </div>
    </div>
    );
};
 
export default HomeScreen;