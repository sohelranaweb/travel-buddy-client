import Dashboard from "@/components/modules/Dashboard/Dashboard";
import { getMetaData } from "@/services/metaData/meta.service";

export const dynamic = "force-dynamic";

const AdminDashboardPage = async () => {
  const metaDataResult = await getMetaData();
  const metaData = metaDataResult.data;

  return <Dashboard metaData={metaData} />;
};

export default AdminDashboardPage;
