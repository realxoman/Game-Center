import React , {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button} from 'react-bootstrap'
import {productDetailAction} from '../action/productAction'
import { addToCart } from '../action/cartAction'


const Product = ({history , match}) => {
 const dispatch = useDispatch()
 const productDetail = useSelector((state) => state.productDetail)
 const {loading , product} = productDetail
  
  useEffect(() => {
      dispatch(productDetailAction(match.params.id))
     }, [dispatch , match])
    
     const addToCart = () => {
         history.push(`/cart/${match.params.id}`)
     }
     
   return (
     <div>
            
      <Link to="/" className="btn btn-light my-3">
          بازگشت
     </Link>
              
     {loading ? (
         <h2>صبر کنید...</h2> 
           ):( 
            <Row>
              <Col md={2}>
                 <Image src={product.image} fluid />
              </Col>
                <Col md={3}>
                     <ListGroup variant="flush">
                        <ListGroup.Item>
                         <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>{product.price}</ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                      </ListGroup>
                     </Col>
                 <Col md={3}>
                    <ListGroup variant="flush">
                         <ListGroup.Item>
                             <Button 
                                onClick={addToCart}
                                className="btn-block" 
                                type="button">
                                    بنداز تو سبد
                             </Button>
                         </ListGroup.Item>
                     </ListGroup>
                 </Col>
            </Row>
          )}  
       </div>
    )
 }
  


export default Product
