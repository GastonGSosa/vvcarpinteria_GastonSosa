import Container from "react-bootstrap/Container"
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return ( 
        <Container className="greeting">
            <h1>Productos</h1>
            <h3>{greeting}</h3>
        </Container>
     );
}
 
export default ItemListContainer;