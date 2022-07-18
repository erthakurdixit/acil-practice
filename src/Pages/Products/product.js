import React from "react";
import * as actionTypes from "../../redux/actions";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'


// {product, addToCart, loadCurrentItem}

 function Product({product}) {
const dispatch = useDispatch()

const addToCart =(id)=>{
dispatch({type:actionTypes.ADD_TO_CART,payload:{id:id}})
}

const loadCurrentItem=(item)=>{
  dispatch({type:actionTypes.LOAD_CURRENT_ITEM,payload:{item:item}})
}

  return (
    <>
      <li className="col-md-4 bg-dark p-4 product-item">
        <h3 className="product-title">{product.title}</h3>
        {/* <div className="product-description">{product.description}</div> */}
        <div className="product-price">
          <p>
            Price: {""}
            {product.price}
          </p>{" "}
        </div>
        <div className="actions-products">
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Add to cart
          </button>

          <Link to= '/item'  className="btn btn-success" onClick={()=>loadCurrentItem(product)}>
            View Item
          </Link>
        </div>
      </li>
    </>
  );
}
// const mapDispatchToProps =(dispatch)=>{
//     return{
//     loadCurrentItem:(item)=>dispatch({type:actionTypes.LOAD_CURRENT_ITEM,payload:{item:item}}),
//     addToCart:(id)=>dispatch({type:actionTypes.ADD_TO_CART,payload:{id:id}})
//     }
//     }

//     export default connect(null,mapDispatchToProps)(Product);

export default Product