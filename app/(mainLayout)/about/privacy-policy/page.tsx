import { trackRoute } from "@/app/utils/routeTracker";
import React from "react";

export default async function PrivacyPolicyPage() {
  await trackRoute("PrivacyPolicy");
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-foreground">
      <h1 className="text-2xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4 text-base">
        <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US")}
      </p>

      <p className="mb-4 text-base">
        Your privacy is important to us. It is the policy of{" "}
        <strong>Jagroto Barta</strong> (<a href="https://jagrotobarta.com" className="text-primary hover:underline">https://jagrotobarta.com</a>)
        to respect and protect your privacy regarding any information we may collect
        while operating our website or associated digital services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4 text-base">
        Jagroto Barta may collect personal and non-personal information from users in the
        following ways:
      </p>
      <ul className="list-disc ml-6 mb-4 text-base">
        <li>When you register or sign up for newsletters or notifications</li>
        <li>When you participate in surveys, feedback forms, or promotional events</li>
        <li>When you log in, comment, or interact with any feature on our site</li>
        <li>Automatically through cookies, analytics, and similar technologies</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Personal Information</h2>
      <p className="mb-4 text-base">
        You may be asked to provide your name, email address, or phone number when you
        interact with our site. We use this information to personalize your experience,
        improve services, and communicate updates or offers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Protect Your Information</h2>
      <p className="mb-4 text-base">
        We use secure networks and encryption (SSL) to protect personal information. Access
        to user data is limited to authorized personnel only. All sensitive information is
        transmitted through secure systems and is not stored or processed on public servers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Security Warning</h2>
      <p className="mb-4 text-base">
        There may be fake or unauthorized websites, pages, or groups using the name
        “Jagroto Barta”. We are not responsible for any content or activity that appears
        on such unofficial platforms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Use of Cookies</h2>
      <p className="mb-4 text-base">
        Jagroto Barta does not collect personal data through cookies directly. However,
        third-party services (like Google Analytics or AdSense) may use cookies to track
        usage patterns. Please review their respective privacy policies for more details.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Disclosure</h2>
      <p className="mb-4 text-base">
        We do not sell, trade, or transfer your personally identifiable information to
        external parties, except to trusted partners who assist us in operating our website
        and who agree to keep the data confidential. We may also release information when
        required by law or to protect our rights or the safety of others.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
      <p className="mb-4 text-base">
        Our website may include links to other websites or services. These third-party sites
        have independent privacy policies, and we are not responsible for their content or
        activities. However, we welcome feedback about these sites to ensure user safety.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Google Services</h2>
      <p className="mb-4 text-base">
        We use Google Analytics and Google Ads to analyze site traffic and improve content.
        Google may use collected data to personalize its own ads. You can opt out by
        installing the{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Google Analytics Opt-out Browser Add-on
        </a>.  
        For more details, visit{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Google Privacy Policy
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Fair Information Practices</h2>
      <p className="mb-4 text-base">
        In case of any data breach, we will notify users via email within one business day.
        Users have the right to seek legal recourse if their data is misused or mishandled.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. CAN-SPAM Compliance</h2>
      <p className="mb-4 text-base">
        We comply with the CAN-SPAM Act for commercial emails. You may unsubscribe anytime
        by using the link at the bottom of our emails. We will:
      </p>
      <ul className="list-disc ml-6 mb-4 text-base">
        <li>Not use false or misleading subject lines</li>
        <li>Identify emails as advertisements when applicable</li>
        <li>Include our physical business address</li>
        <li>Honor opt-out requests promptly</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">11. Policy Updates</h2>
      <p className="mb-4 text-base">
        We may update this Privacy Policy from time to time. All changes will be posted on
        this page with an updated date. Continued use of our website after changes indicates
        your acceptance of the revised policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">12. Contact Us</h2>
      <p className="mb-4 text-base">
        If you have any questions or concerns about this Privacy Policy, please contact us:
      </p>
      <ul className="list-none mb-6 text-base">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@jagrotobarta.com"
            className="text-primary hover:underline"
          >
            contact@jagrotobarta.com
          </a>
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a
            href="https://jagrotobarta.com"
            className="text-primary hover:underline"
          >
            https://jagrotobarta.com
          </a>
        </li>
      </ul>

      <p className="text-base italic">
        Thank you for trusting Jagroto Barta and being a valued reader.
      </p>
    </div>
  );
}
