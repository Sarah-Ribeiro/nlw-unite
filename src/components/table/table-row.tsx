import { ComponentProps } from "react";

// importa todas as propriedades de uma thead
interface TableRowProps extends ComponentProps<'tr'> {}

export function TableRow(props: TableRowProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5" {...props} />
  )
}