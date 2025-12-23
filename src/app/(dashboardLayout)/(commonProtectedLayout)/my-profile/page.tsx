export const dynamic = "force-dynamic";
import MyProfile from "@/components/modules/MyProfile/MyProfile";
import MyProfileSkeleton from "@/components/modules/MyProfile/MyProfileSkeleton";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { Suspense } from "react";

const MyProfilePage = async () => {
  const userInfo = await getUserInfo();
  // console.log("my profile", userInfo);
  return (
    <div>
      <Suspense fallback={<MyProfileSkeleton />}>
        <MyProfile userInfo={userInfo} />
      </Suspense>
    </div>
  );
};

export default MyProfilePage;
