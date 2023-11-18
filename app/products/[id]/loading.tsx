import { Spinner } from "@nextui-org/spinner";

const ProductDetailsLoading = () => {
  return (
    <div className="h-[calc(100vh-5rem)] w-screen flex justify-center items-center">
      <Spinner color="secondary" />
    </div>
  );
};

export default ProductDetailsLoading;
