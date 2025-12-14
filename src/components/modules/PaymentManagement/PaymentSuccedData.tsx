import { CheckCircle, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const PaymentSuccessCard = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all">
          {/* Success Icon with Animation */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-green-500 rounded-full p-4">
                <CheckCircle
                  className="w-16 h-16 text-white"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your transaction has been completed
            successfully.
          </p>

          {/* Transaction Details */}
          {/* <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Transaction Details
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID</span>
                <span className="font-semibold text-gray-900">
                  #TXN-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid</span>
                <span className="font-semibold text-gray-900">$99.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-semibold text-gray-900">•••• 4242</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-gray-900">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link href="/dashboard">
              <button className="w-full mb-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                Back To Dashboard
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-200 transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Receipt
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-500 mt-6">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <a
              href="#"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessCard;
