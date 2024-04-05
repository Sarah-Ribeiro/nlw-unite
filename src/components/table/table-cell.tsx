import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// importa todas as propriedades de uma thead
interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  return (
    <td {...props} className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)} />
  );
}
