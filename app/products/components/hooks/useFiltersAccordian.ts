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
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: 0,
    max: 0,
  });

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

  const handlePriceChange = (checked: boolean, range: string) => {
    const [min, max] = range.split("-");
    const params = new URLSearchParams(searchParams);

    if (checked) {
      setSelectedPriceRange({
        min: Number(min),
        max: Number(max),
      });
      params.set("min", min);
      params.set("max", max);
    } else {
      setSelectedPriceRange({ min: 0, max: 0 });
      params.delete("min");
      params.delete("max");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return {
    handlePriceChange,
    handleSizeChange,
    searchParams,
    selectedPriceRange,
    selectedSize,
  };
};

export default useFiltersAccordian;
