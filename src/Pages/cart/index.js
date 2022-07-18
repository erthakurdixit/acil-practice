import React from 'react'
import { connect, useSelector } from 'react-redux'



function Cart() {
const cart= useSelector((state)=>{return state.cart})

    return (
        <>
        <ul>
            {cart.map((product)=>
            {
                return (<>
                <li key={product.id} className=" p-4 bg-dark text-white product-item">
        <h3 className="product-title">{product.title}</h3>
        {/* <div className="product-description">{product.description}</div> */}
        <div className="product-price">
          <p>
            Price: {""}
            {product.price}
          </p>{" "}
        </div>
       <div className="qty-product">
        Qty: {""} {product.qty}
       </div>
      </li>
      </>)
            })
            }

        </ul>
        </>
    )
}

// const mapStateToProps=(state)=>{
//     return {
//         cart:state.cart

//     }
// }

// export default connect(mapStateToProps,null) (Cart)
export default Cart
