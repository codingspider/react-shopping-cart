import { Button, Card, CardBody } from "react-bootstrap";
import FormatCurrency from "../utilities/FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};
const StoreItem = ({ id, title, price, thumbnail }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <Card className="mb-2">
        <Card.Img
          variant="top"
          src={thumbnail}
          height="200px"
          style={{ objectFit: "cover" }}
        ></Card.Img>
        <CardBody className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-center-baseline mb-4">
            <span style={{ fontSize: "18px" }}>{title}</span>
            <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100" onClick={() => increaseQuantity(id)}>
                + Add to cart{" "}
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> In cart
                  </div>
                  <Button onClick={() => increaseQuantity(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default StoreItem;
