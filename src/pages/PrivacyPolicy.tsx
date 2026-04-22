import PolicyLayout from "@/components/site/PolicyLayout";

const PrivacyPolicy = () => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="Your privacy matters. Here's how True American Publishers collects and uses your data."
      updated="January 2025"
    >
      <section>
        <p>
          At True American Publishers, safeguarding your privacy is our number one priority. This
          Privacy Policy describes what information we gather and how we employ it. If you have
          any queries or require more details, do not hesitate to contact us. This policy details
          the data we collect online for our website and its users. It doesn't encompass
          information gathered offline or through other platforms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Consent</h2>
        <p>
          By utilizing our website, you agree to our{" "}
          <a href="/terms-and-conditions" className="text-primary hover:underline">
            Terms & Conditions
          </a>{" "}
          and our Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Information Collection</h2>
        <p>
          We'll clearly describe why we require your data when we ask for it. If you reach out to
          us directly, we may gather your name, email, contact number, and any other information
          you give. When you sign up, we may ask you to provide contact information, such as your
          name, business name, email, address, and phone number.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Use of Your Data</h2>
        <p>We use your data to:</p>
        <ul className="mt-4 space-y-2 list-disc list-inside marker:text-primary">
          <li>Maintain our website</li>
          <li>Enhance and personalize our website</li>
          <li>Contact you for customer service, marketing, and updates</li>
          <li>Analyze website usage</li>
          <li>Send emails</li>
          <li>Avoid fraud</li>
          <li>Create new products and features</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Log Files</h2>
        <p>
          True American Publishers follows a standard procedure of using log files. These files
          log visitors when they visit websites. The information collected by log files include
          internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date
          and time stamp, referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking users' movement
          on the website, and gathering demographic information.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Cookies and Web Beacons</h2>
        <p>
          Like any other website, True American Publishers uses "cookies." These cookies are used
          to store information including visitors' preferences, and the pages on the website that
          the visitor accessed or visited. The information is used to optimize the users'
          experience by customizing our web page content based on visitors' browser type and/or
          other information.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Third-Party Privacy Policies</h2>
        <p>
          True American Publishers' Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy Policies of these
          third-party ad servers for more detailed information. It may include their practices and
          instructions about how to opt-out of certain options.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Children's Information</h2>
        <p>
          Another part of our priority is adding protection for children while using the internet.
          We encourage parents and guardians to observe, participate in, and/or monitor and guide
          their online activity. True American Publishers does not knowingly collect any Personal
          Identifiable Information from children under the age of 13.
        </p>
      </section>

      <section>
        <h2 className="font-display text-3xl mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact us at{" "}
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

export default PrivacyPolicy;
