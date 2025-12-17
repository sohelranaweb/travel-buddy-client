// app/success-payment/page.tsx
export const dynamic = "force-dynamic";

import PaymentFailedCard from "@/components/modules/PaymentManagement/PaymentFailedData";

const FailedPaymentPage = () => {
  return <PaymentFailedCard></PaymentFailedCard>;
};

export default FailedPaymentPage;
