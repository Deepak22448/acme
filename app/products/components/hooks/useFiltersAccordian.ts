import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useFiltersAccordian = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSizeChange = useCallback(
    (checked: boolean, size: string) => {
      const params = new URLSearchParams(searchParams);
      if (checked) {
        params.set("size", size);
      } else {
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
      params.set("min", min);
      params.set("max", max);
    } else {
      params.delete("min");
      params.delete("max");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return {
    handlePriceChange,
    handleSizeChange,
    searchParams,
  };
};

export const sizes = ["S", "M", "L", "XL", "XXL"];
export const sortPriceRanges = [
  {
    text: "under 999",
    value: "0-999",
  },
  {
    text: "Rs. 999 - Rs. 1,499",
    value: "999-1499",
  },
  {
    text: "1,499 - Rs. 1,999",
    value: "1499-1999",
  },
  {
    text: "Above Rs. 1,999",
    value: "1999",
  },
];

export default useFiltersAccordian;
