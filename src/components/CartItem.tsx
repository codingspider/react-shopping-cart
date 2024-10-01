import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/items.json";
import FormatCurrency from "../utilities/FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps = {
  id: number;
  quanity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.thumbnail}
        alt={item.title}
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      ></img>
      <div className="me-auto">
        <div>
          {item.title}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".75rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div className="text-muted" style={{ fontSize: ".75rem" }}>
        {FormatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >x</Button>
    </Stack>
  );
};

export default CartItem;
