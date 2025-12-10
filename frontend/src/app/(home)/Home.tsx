import type { IMain } from "@/shared/types/main.interface";

interface Props {
  main: IMain;
}

export function Main({ main }: Props) {
  return (
    <div className="p-5">
      <h1 className="text-3xl">{main.main}</h1>
      <p>{main.paraghaf}</p>
    </div>
  );
}
