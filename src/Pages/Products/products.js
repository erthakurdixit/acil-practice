import React ,{useEffect} from "react";
// import { connect } from "react-redux";
import "./style.css";
import Product from "./product";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import { GetProducts} from '../../Services/FetchData.services'

function Products() {
const products= useSelector(state=>{return state.products})

useEffect(() => {
  GetProducts()
}, [])

return (
    <>
<Link className="btn btn-warning" to='/cart'>...Cart</Link>
        <ul className=" text-white py-4 products-all">
          {products.map((product) => {
            
            return (
              <>
                <Product key={product.id} product={product} />
              </>
            );
          })}
        </ul>

    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };

// export default connect(mapStateToProps, null)(Products);

export default Products