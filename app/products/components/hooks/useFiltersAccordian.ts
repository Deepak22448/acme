"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const useFiltersAccordian = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedSize, setSelectedSize] = useState(() =>
    searchParams.get("size")
  );
  const [selectedPriceRangeIndex, setSelectedPriceRangeIndex] = useState<
    undefined | number
  >(undefined);

  const handleSizeChange = useCallback(
    (checked: boolean, size: string) => {
      const params = new URLSearchParams(searchParams);
      if (checked) {
        setSelectedSize(size);
        params.set("size", size);
      } else {
        setSelectedSize(null);
        params.delete("size");
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const handlePriceChange = useCallback(
    (checked: boolean, range: string, index: number) => {
      const [min, max] = range.split("-");
      const params = new URLSearchParams(searchParams);

      if (checked) {
        setSelectedPriceRangeIndex(index);
        params.set("min", min);
        params.set("max", max);
      } else {
        setSelectedPriceRangeIndex(undefined);
        params.delete("min");
        params.delete("max");
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  return {
    handlePriceChange,
    handleSizeChange,
    searchParams,
    selectedPriceRangeIndex,
    selectedSize,
  };
};

export default useFiltersAccordian;
