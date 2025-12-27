import ProfileDetails from "@/components/modules/ProfieDetails/ProfileDetails";
import { getTravelerById } from "@/services/admin/travelersManagement";

export default async function ProfileDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const traveler = await getTravelerById(id);
  //   console.log("profile details", traveler);
  return (
    <div>
      <ProfileDetails traveler={traveler?.data}></ProfileDetails>
    </div>
  );
}
