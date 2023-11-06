"use client";
import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";
import useFiltersAccordian, {
  sizes,
  sortPriceRanges,
} from "./hooks/useFiltersAccordian";

export const FiltersAccordian = () => {
  const { handlePriceChange, handleSizeChange, searchParams } =
    useFiltersAccordian();

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
              className="block"
              color="secondary"
              isSelected={searchParams.get("size") === size}
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
          const isSelected = searchParams.get("min") === value.split("-")[0];
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
