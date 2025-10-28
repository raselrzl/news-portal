import { getCurrentUserType } from "@/app/utils/getCurrentUserType";
import { ime } from "@/app/utils/ime";
import SidebarClient from "./SidebarClient";

export default async function SidebarServer({
  email,
  name,
  image,
}: {
  email: string;
  name: string;
  image: string;
}) {
  const currentUser = await getCurrentUserType();

  const userType = currentUser?.userType ?? null;
  const approvalStatus = currentUser?.approvalStatus ?? null;
  const mkrValue = ime(email);

  return (
    <SidebarClient
      email={email}
      name={name}
      image={image}
      userType={userType}
      approvalStatus={approvalStatus}
      mkrValue={mkrValue}
    />
  );
}
