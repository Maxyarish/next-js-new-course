import type { IProfile } from "@/shared/types/main.interface";

interface Props {
  profile: IProfile;
}
export function Profile({ profile }: Props) {
  return (
    <div className="p-5">
      <h1 className="text-3xl">{profile.main}</h1>
      <p>{profile.paraghaf}</p>
    </div>
  );
}
