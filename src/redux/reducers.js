import { ADD_TO_CART, LOAD_CURRENT_ITEM } from "./actions";

const initial_state = {
  products: [
    {
      id: 1,
      title: "iphone",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aliquid dignissimos molestiae delectus possimus harum sed labore provident doloremque fugiat. Perferendis.",
      price: 155000,
    },
    {
      id: 2,
      title: "Samsung",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aliquid dignissimos molestiae delectus possimus harum sed labore provident doloremque fugiat. Perferendis.",
      price: 48846,
    },
    {
      id: 3,
      title: "Realme",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: 4500,
    },
    {
      id: 4,
      title: "Micromax",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aliquid dignissimos molestiae delectus possimus harum sed labore provident doloremque fugiat. ",
      price: 56456,
    },
  ],
  currentItem: null,
  cart: [],
};

export const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const incart = state.cart.find(
        (product) => product.id === action.payload.id
      )
        ? true
        : false;
      return {
        ...state,
        cart: incart
          ? state.cart.map((product) =>
              product.id === action.payload.id
                ? { ...product, qty: product.qty + 1 }
                : product
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    }
    case LOAD_CURRENT_ITEM:
      return {...state,currentItem:action.payload.item}
      default: return state
  }
};
