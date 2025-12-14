import { XCircle, ArrowLeft, RefreshCw, HelpCircle } from "lucide-react";
import Link from "next/link";

const PaymentFailedCard = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-rose-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Failed Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Failed Icon with Animation */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-red-500 rounded-full p-4">
                <XCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Failed Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-2">
            We couldn't process your payment for{" "}
            <span className="font-semibold text-red-600">
              Subscription Plan
            </span>
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Don't worry, you have not been charged.
          </p>

          {/* Failure Details */}
          {/* <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6 text-left">
            <h2 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Transaction Details
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID</span>
                <span className="font-semibold text-gray-900 text-sm">
                  #TXN-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plan</span>
                <span className="font-semibold text-gray-900">
                  Monthly Plan
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount</span>
                <span className="font-semibold text-gray-900">$99.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  FAILED
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reason</span>
                <span className="font-semibold text-red-600">
                  Insufficient funds
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-gray-900">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div> */}

          {/* Common Issues */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Common reasons for payment failure:
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Insufficient balance in your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Incorrect card details or expired card</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Payment limit exceeded</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Network or connectivity issues</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <Link href="/pricing">
              <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-200 transition-colors flex items-center justify-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Back to Subsription Plan
              </button>
            </Link>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-500 mt-6">
            If you continue to face issues, please contact our support team.
          </p>
        </div>

        {/* Support Section */}
        <div className="text-center mt-6 bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600 mb-2">Need assistance?</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="text-red-600 hover:text-red-700 font-semibold text-sm"
            >
              Contact Support
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="#"
              className="text-red-600 hover:text-red-700 font-semibold text-sm"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailedCard;
