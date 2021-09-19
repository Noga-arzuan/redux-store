import * as types from "./actionType";

const initialState={
    products:[],
    product:{},
    loading:true,

}
const productReducers = (state=initialState, action) => {
switch (action.type){
    case types.GET_PRODUCTS:
        return{
            ...state,
            products:action.payload,
            loading:false
        };
    case types.DELETE_SELECTED_PRODUCT:
        case types.ADD_PRODUCT:
            case types.UPDATE_PRODUCT:

        return{
            ...state,
            loading:false,
        };

        case types.GET_SINGLE_PRODUCT:
            return{
                ...state,
                product: action.payload,
                loading: false

            };
    default:
        return state;
}

};
export default productReducers;