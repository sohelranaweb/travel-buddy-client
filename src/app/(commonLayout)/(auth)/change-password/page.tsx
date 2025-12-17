export const dynamic = "force-dynamic";
import ChangePasswordForm from "@/components/ChangePasswordForm";

const ChangePasswordPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) => {
  const params = (await searchParams) || {};
  const redirect = params.redirect;
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Change Your Password</h1>
          <p className="text-muted-foreground">
            Enter your new password below to change your account password
          </p>
        </div>
        <ChangePasswordForm redirect={redirect} />
      </div>
    </div>
  );
};

export default ChangePasswordPage;
