export const dynamic = "force-dynamic";
import BuddyRequestsSkeleton from "@/components/modules/Traveler/BuddyRequestManagement/BuddyRequestsSkeleton";
import SentBuddyList from "@/components/modules/Traveler/SentBuddyRequestManagement/SentBuddyList";
import { getMyBuddySentRequest } from "@/services/traveler/findBuddy";
import { Suspense } from "react";

const SentBuddyRequestPage = async () => {
  const result = await getMyBuddySentRequest();

  return (
    <Suspense fallback={<BuddyRequestsSkeleton />}>
      <SentBuddyList requests={result?.data}></SentBuddyList>
    </Suspense>
  );
};

export default SentBuddyRequestPage;
