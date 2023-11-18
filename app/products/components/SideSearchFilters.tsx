"use client";
import { FiltersAccordian } from "./FiltersAccordian";

const SideSearchFilters = () => {
  return (
    <div className="w-1/4 hidden lg:block transition-all ease-in delay-75">
      <FiltersAccordian />
    </div>
  );
};

export default SideSearchFilters;
