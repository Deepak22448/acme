"use client";
import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";
import useFiltersAccordian from "./hooks/useFiltersAccordian";
import { sizes, sortPriceRanges } from "@/CONSTANTS";

export const FiltersAccordian = () => {
  const {
    handlePriceChange,
    handleSizeChange,
    searchParams,
    selectedPriceRange,
    selectedSize,
  } = useFiltersAccordian();

  return (
    <Accordion selectionMode="multiple" defaultSelectedKeys="all">
      <AccordionItem
        key="1"
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
              type="radio"
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
        key="2"
        aria-label="price"
        title="Price"
        classNames={{ title: "text-sm text-black dark:text-white" }}
      >
        {sortPriceRanges.map(({ text, value }) => {
          const isSelected =
            selectedPriceRange.min === Number(value.split("-")[0]) &&
            selectedPriceRange.max !== 0;

          return (
            <Checkbox
              radius="none"
              key={value}
              value={value}
              isSelected={isSelected}
              className="block capitalize"
              color="secondary"
              onValueChange={(e) => handlePriceChange(e, value)}
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
