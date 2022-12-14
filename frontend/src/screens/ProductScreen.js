import './ProductScreen.css'
const ProductScreen = () => {
    return ( 
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" />
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>Price: $3456</p>
                    <p>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae repellendus tempore architecto ab nulla! Quos, deleniti voluptate, assumenda pariatur id nostrum iure, eius ipsum sint harum dolorem fuga quam ab.</p>
                </div>

            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span></span>
                    </p>
                    <p>
                        Status: <span>In stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>

                        </select>
                    </p>
                    <p>
                        <button type="button"> Add to Cart</button>
                    </p>
                </div>

            </div>
        
        </div>
     );
}
 
export default ProductScreen;