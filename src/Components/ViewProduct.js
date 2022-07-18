import React from 'react'
import { connect } from 'react-redux'

 function ViewProduct({currentItem}) {
  return (
    <>
            <li className="col-md-4 bg-dark text-white p-4 product-item">
            <h3 className="product-title">{currentItem.title}</h3>
            <div className="product-description">{currentItem.description}</div>
            <div className="product-price">
              <p>
                Price: {""}
                {currentItem.price}
              </p>{" "}
            </div>
          </li>   
    </>
  )
}

const mapStateToProps =(state)=>{
return{
    currentItem:state.currentItem
}
}

export default connect(mapStateToProps, null)(ViewProduct)