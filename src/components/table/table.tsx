import { ComponentProps } from "react";

// Importar todas as propriedades de uma table
interface TableProps extends ComponentProps<"table"> {}

export function Table(props: TableProps) {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props} />
    </div>
  );
}
