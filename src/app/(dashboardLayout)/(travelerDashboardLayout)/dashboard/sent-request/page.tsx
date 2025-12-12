import SentBuddyList from "@/components/modules/Traveler/SentBuddyRequestManagement/SentBuddyList";
import { getMyBuddySentRequest } from "@/services/traveler/findBuddy";

const SentBuddyRequestPage = async () => {
  const result = await getMyBuddySentRequest();

  return <SentBuddyList requests={result?.data}></SentBuddyList>;
};

export default SentBuddyRequestPage;
