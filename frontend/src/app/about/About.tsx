import type { IAbout } from "@/shared/types/main.interface";


interface Props {
  about: IAbout;
}
export function About({ about }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-4xl">{about.main}</h1>
      <p>{about.paraghaf} </p>
    </div>
  );
}
