export const productListReducer = (state={products : []} , action) => {
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST' :
            return {loading : true ,products : []}
            case 'PRODUCT_LIST_SUCCES':
            return {loading : false , products : action.payload}
            default:
            return state
    }
}

export const productDetailReducer = (state={products : {}} ,action) => {
    switch(action.type){
        case 'PRODUCT_detail_REQUEST' :
            return {loading : true , ...state}
            case 'PRODUCT_dedail_SUCCES':
            return {loading : false , product : action.payload}
            default:
            return state
    }
}
