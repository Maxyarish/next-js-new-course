import { Profile } from "./Profile";

export default function page() {
  return (
    <div>
      <Profile profile={{ main: "Profile", paraghaf: `Тут твой профиль` }} />
    </div>
  );
}
