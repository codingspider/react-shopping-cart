import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4}>
            <StoreItem {...item}></StoreItem>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
