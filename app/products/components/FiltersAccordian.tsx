"use client";
import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";
import useFiltersAccordian from "./hooks/useFiltersAccordian";
import { sizes, sortPriceRanges } from "@/CONSTANTS";

export const FiltersAccordian = () => {
  const {
    handlePriceChange,
    handleSizeChange,
    searchParams,
    selectedPriceRangeIndex,
    selectedSize,
  } = useFiltersAccordian();

  return (
    <Accordion selectionMode="multiple" defaultSelectedKeys="all">
      <AccordionItem
        key="sizes-item"
        aria-label="size"
        title="Size"
        classNames={{ title: "text-sm text-black dark:text-white" }}
      >
        {sizes.map((size) => {
          return (
            <Checkbox
              radius="none"
              key={size}
              value={size}
              name="size"
              className="block"
              color="secondary"
              isSelected={size === selectedSize}
              defaultSelected={searchParams.get("size") === size}
              onValueChange={(e) => handleSizeChange(e, size)}
              classNames={{
                label: "text-sm text-black dark:text-white",
              }}
            >
              {size}
            </Checkbox>
          );
        })}
      </AccordionItem>
      <AccordionItem
        key="price-item"
        aria-label="price"
        title="Price"
        classNames={{ title: "text-sm text-black dark:text-white" }}
      >
        {sortPriceRanges.map(({ text, value }, i) => {
          return (
            <Checkbox
              radius="none"
              key={value}
              value={value}
              name="price"
              className="block"
              color="secondary"
              isSelected={
                i === selectedPriceRangeIndex ||
                searchParams.get("min") === value.split("-")[0]
              }
              defaultSelected={searchParams.get("min") === value.split("-")[0]}
              onValueChange={(e) => handlePriceChange(e, value, i)}
              classNames={{
                label: "text-sm text-black dark:text-white",
              }}
            >
              {text}
            </Checkbox>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
};
