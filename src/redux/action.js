import * as types from "./actionType";
import axios from "axios";

const getProducts=(products) =>({
   type:types.GET_PRODUCTS,
    payload:products,
});

const productDelete = ()=>({
  type:types.DELETE_SELECTED_PRODUCT
});

const productAdd = ()=>({
  type:types.ADD_PRODUCT
});

const productUpdated = ()=>({
  type:types.UPDATE_PRODUCT
});


const getProduct = (product)=>({
  type:types.GET_SINGLE_PRODUCT,
  payload:product,
});

export const loadProducts = () => {
  return function(dispatch) {
      axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
   console.log("resp", resp);
      dispatch(getProducts(resp.data));
})
.catch((error) =>console.log(error));
  };
};

export const deleteProduct = (id) => {
  return function(dispatch) {
      axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
   console.log("resp", resp);
      dispatch(productDelete(resp.data));
      dispatch(loadProducts());

})
.catch((error) =>console.log(error));
  };
};
export const addProduct = (product) => {
  return function(dispatch) {
      axios.post(`${process.env.REACT_APP_API}` ,product).then((resp) => {
   console.log("resp", resp);
      dispatch(productAdd(resp.data));
      dispatch(loadProducts());
})
.catch((error) =>console.log(error));
  };
};
export const getSingleProduct = (id) => {
  return function(dispatch) {
      axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
   console.log("resp", resp);
      dispatch(getProduct(resp.data));
})
.catch((error) =>console.log(error));
  };
};
export const updateProduct = (product,id) => {
  return function(dispatch) {
      axios.put(`${process.env.REACT_APP_API}/${id}`,product).then((resp) => {
   console.log("resp", resp);
      dispatch(productUpdated());
})
.catch((error) =>console.log(error));
  };
};