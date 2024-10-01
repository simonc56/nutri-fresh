import "./EditContent.scss";
import ProductForm from "./ProductForm";

// Intermediate component to conditionnaly display the ProductForm component
export default function AddContent() {
  return <ProductForm type="add" />;
}
