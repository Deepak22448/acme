import { FC, PropsWithChildren } from "react";
import SideSearchFilters from "../components/SideSearchFilters";
import MobileFiltersBtn from "../components/MobileFiltersBtn";

const ProductsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="relative lg:flex">
      <SideSearchFilters />
      {children}
      <MobileFiltersBtn />
    </section>
  );
};

export default ProductsLayout;
