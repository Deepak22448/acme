"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export const SizesChartTable = () => {
  const columns = Object.keys(sizesData[0]);
  return (
    <Table
      classNames={{ wrapper: "rounded-none" }}
      aria-label="Sizes details table"
    >
      <TableHeader>
        {columns.map((colName) => (
          <TableColumn key={colName} className="uppercase">
            {colName}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {sizesData.map(({ size, chest, length, shoulder, sleeves }) => (
          <TableRow key={size}>
            <TableCell>{size}</TableCell>
            <TableCell>{chest}</TableCell>
            <TableCell>{length}</TableCell>
            <TableCell>{shoulder}</TableCell>
            <TableCell>{sleeves}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const sizesData = [
  {
    size: "S",
    chest: 38,
    length: 26,
    shoulder: 17,
    sleeves: 25,
  },
  {
    size: "M",
    chest: 40,
    length: 27,
    shoulder: 18,
    sleeves: 26,
  },
  {
    size: "L",
    chest: 42,
    length: 27,
    shoulder: 19,
    sleeves: 26,
  },
  {
    size: "XL",
    chest: 44,
    length: 28,
    shoulder: 20,
    sleeves: 27,
  },
];
