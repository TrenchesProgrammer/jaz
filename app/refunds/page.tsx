import { Bellefair } from "next/font/google";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

const page = () => {
  return (
    <div className="pt-20 padding-container">
      <h3 className={`${bellefair.className} text-5xl`}>REFUND POLICY</h3>
      <div className="flex flex-col gap-40">
        <div className="flex justify-between mt-50">
          <h4>DEPOSITS</h4>
          <div className="w-[50%] flex flex-col gap-10 ">
            <div className="gap-6 flex flex-col">
              <p>Non-Refundable Deposit:</p>
              <p>
                To secure your event date, a non-refundable deposit is required.
                This deposit will be applied toward the total cost of your event
                booking.
              </p>
            </div>
            <div className="gap-6 flex flex-col">
              <p>Rescheduling:</p>
              <p>
                If you need to reschedule your event, please notify us at least
                7 days in advance. Your deposit will be transferred to your new
                date (subject to availability). Failure to provide adequate
                notice may result in forfeiture of your deposit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h4>CANCELLATIONS</h4>
          <div className="w-[50%] flex flex-col gap-10 ">
            <div className="gap-6 flex flex-col">
              <p>Client-Initiated Cancellations:</p>
              <p>
                If you choose to cancel your booking, your deposit will be
                forfeited. We do not offer refunds for cancellations initiated
                by the client.
              </p>
            </div>
            <div className="gap-6 flex flex-col">
              <p>Venue-Initiated Cancellations:</p>
              <p>
                In the rare case that Jaz Events Centre must cancel or
                reschedule your booking due to unforeseen circumstances, your
                deposit will either be transferred to a new date or refunded in
                full — depending on your preference.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h4>REFUNDS & PAYMENTS</h4>
          <div className="w-[50%] flex flex-col gap-10 ">
            <div className="gap-6 flex flex-col">
              <p>No Refunds After Confirmation:</p>
              <p>
                Once the final payment has been made and your booking confirmed,
                no refunds will be issued. We encourage clients to confirm all
                event details and requirements prior to final payment.
              </p>
            </div>
            <div className="gap-6 flex flex-col">
              <p>Outstanding Balances:</p>
              <p>
                All balances must be paid no later than 3 days before the event
                date. Failure to complete payment may result in cancellation of
                your booking without refund of the deposit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h4>SATISFACTION</h4>
          <div className="w-[50%] flex flex-col gap-10 ">
            <div className="gap-6 flex flex-col">
              <p>Service Quality:</p>
              <p>
                Jaz Events Centre is committed to providing a seamless and
                memorable experience. Clients are encouraged to communicate any
                special requirements in advance to ensure proper arrangements
                are made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
