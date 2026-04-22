import PolicyLayout from "@/components/site/PolicyLayout";

const RefundPolicy = () => {
  return (
    <PolicyLayout
      title="Refund Policy"
      subtitle="Our commitment to fairness — here's how refunds work at True American Publishers."
      updated="January 2025"
    >
      <section>
        <p>
          At True American Publishers, customer satisfaction is our top priority. We strive to
          deliver high-quality publishing, ghostwriting, and creative services that meet the
          expectations of every author we work with. This Refund Policy outlines the conditions
          under which refunds are offered, processed, and finalized.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Eligibility for a Refund</h2>
        <p>
          A refund request will only be considered if it falls within the scope outlined below.
          Refunds are issued at the sole discretion of True American Publishers based on a
          thorough evaluation of the case.
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside marker:text-primary">
          <li>
            The request is submitted within <strong>14 days</strong> of the original purchase
            date.
          </li>
          <li>Work has not yet started, or only the discovery phase has been completed.</li>
          <li>
            The deliverables provided differ substantially from the agreed scope of work and
            cannot be remedied through our standard revision process.
          </li>
          <li>
            The client has communicated concerns clearly and given our team a fair opportunity to
            address them.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Non-Refundable Situations</h2>
        <p>The following circumstances are not eligible for a refund:</p>
        <ul className="mt-4 space-y-2 list-disc list-inside marker:text-primary">
          <li>
            The project has progressed beyond 50% of the agreed scope (e.g., manuscript drafting,
            cover finalization, formatting, or distribution setup).
          </li>
          <li>
            Refund requests based solely on the use or non-use of third-party AI detection tools.
          </li>
          <li>
            Issues arising from third-party publishers (such as Amazon KDP) including content
            rejection, account suspension, or distribution delays beyond our control.
          </li>
          <li>
            Change of mind, change in personal circumstances, or shift in creative direction by
            the client after work has begun.
          </li>
          <li>
            Failure to provide required materials, briefs, or feedback within agreed timelines.
          </li>
          <li>Custom services, expedited orders, or any work explicitly marked as final sale.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Revisions Before Refund</h2>
        <p>
          We believe most concerns can be resolved through collaboration. Before a refund is
          processed, our team will offer revisions in line with the original scope of work.
          Clients are encouraged to use the revision process — included in every package — to
          align deliverables with their vision. A refund will only be considered if reasonable
          revision attempts fail to deliver the expected outcome.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">How to Request a Refund</h2>
        <p>To request a refund, please follow these steps:</p>
        <ol className="mt-4 space-y-2 list-decimal list-inside marker:text-primary">
          <li>
            Email{" "}
            <a
              href="mailto:info@trueamericanpublishers.com"
              className="text-primary hover:underline"
            >
              info@trueamericanpublishers.com
            </a>{" "}
            with the subject line "Refund Request — [Your Order ID]".
          </li>
          <li>
            Include your full name, project title, the date of purchase, and a detailed reason for
            the refund request.
          </li>
          <li>
            Attach any relevant communication, files, or documentation supporting your request.
          </li>
          <li>
            A refund specialist will review your case and respond within 5–7 business days.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Refund Processing</h2>
        <p>
          Once a refund is approved, the amount will be returned to the original payment method
          used for the purchase. Please allow <strong>7–14 business days</strong> for the refund
          to appear in your account, depending on your bank or payment provider. True American
          Publishers is not responsible for delays caused by financial institutions.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Partial Refunds</h2>
        <p>
          Where a portion of the work has already been completed and accepted, True American
          Publishers reserves the right to issue a partial refund proportionate to the work
          remaining. This protects both the client and the creative team contributing to the
          project.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Chargebacks</h2>
        <p>
          We strongly encourage clients to contact us directly before initiating a chargeback or
          dispute through their bank or payment processor. Chargebacks initiated without prior
          communication may result in immediate suspension of services and forfeiture of any
          deliverables, including manuscripts, designs, and account access.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Changes to This Policy</h2>
        <p>
          True American Publishers reserves the right to modify, update, or replace this Refund
          Policy at any time. Any changes will be posted on this page, and continued use of our
          services constitutes acceptance of the revised policy.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Contact Us</h2>
        <p>
          For any questions about this Refund Policy or to start a refund request, contact us at{" "}
          <a
            href="mailto:info@trueamericanpublishers.com"
            className="text-primary hover:underline"
          >
            info@trueamericanpublishers.com
          </a>
          .
        </p>
      </section>
    </PolicyLayout>
  );
};

export default RefundPolicy;
