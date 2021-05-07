import axios from 'axios'

 export const productListAction = () => async (dispatch) =>  {
    try {
        dispatch ({type : 'PRODUCT_LIST_REQUEST'})

        const {data} = await axios.get('http://localhost:8000/api/products')

        dispatch ( {
                type : 'PRODUCT_LIST_SUCCES',
              payload : data ,
         } )
    } catch (error) {
        console.log(error)
    }
}

export const productDetailAction = (id) => async (dispatch) =>  {
    try {
        dispatch ({type : 'PRODUCT_DETAIL_REQUEST'})

        const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)

        dispatch ( {
                type : 'PRODUCT_DETAIL_SUCCES',
              payload : data ,
         } )
    } catch (error) {
        console.log(error)
    }
}