import { Spinner } from "@nextui-org/react";

export const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Spinner color="secondary" className="block" size="lg" />{" "}
    </div>
  );
};
