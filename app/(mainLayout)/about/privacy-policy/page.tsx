import { trackRoute } from "@/app/utils/routeTracker";
import React from "react";

export default async function PrivacyPolicyPage() {
  await trackRoute("Privacy Policy");
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>

      <p className="text-xs mb-4 text-justify">
        Your privacy is important to us. It is Jagroto Barta’s policy to respect
        your privacy regarding any information we may collect from you across
        our website, <strong>https://www.jagrotobarta.com</strong> and other
        sites we own and operate. This page informs you of our policies
        regarding the collection, use, and disclosure of personal data when you
        use our Service and the choices you have associated with that data. We
        use your data to provide and improve the Service. By using the Service,
        you agree to the collection and use of information in accordance with
        this policy.
      </p>

      {/* --- Information We Collect --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="text-xs mb-4 text-justify">
        Jagroto Barta collects information from users when they access our
        website through various means, including:
      </p>
      <ul className="list-disc ml-6 mb-4 text-xs text-justify">
        <li>By registering to the site or apps.</li>
        <li>Subscribing to our newsletter.</li>
        <li>Responding to surveys or participating in competitions.</li>
        <li>Logging into any page or submitting contact forms.</li>
      </ul>

      {/* --- Personal Information --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        What Personal Information Do We Collect?
      </h2>
      <p className="text-xs mb-4 text-justify">
        When ordering or registering on our site, you may be asked to enter your
        name, email address, phone number, or other details to help improve your
        experience. This information allows us to identify and communicate with
        you efficiently and personalize your experience on our platform.
      </p>

      {/* --- Protection --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        How We Protect Your Information
      </h2>
      <p className="text-xs mb-4 text-justify">
        Your personal information is stored behind secured networks and is only
        accessible by authorized individuals with special access rights who are
        required to keep the information confidential. All sensitive or credit
        information you provide is encrypted via Secure Socket Layer (SSL)
        technology. We implement a variety of security measures when users
        submit or access their information to maintain data safety. All
        transactions are processed through a secure payment gateway provider and
        are not stored or processed on our servers.
      </p>

      {/* --- Fake Websites Precaution --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        Special Precaution Against Fake Websites
      </h2>
      <p className="text-xs mb-4 text-justify">
        There are multiple fake websites, Facebook pages, and unauthorized
        groups operating under the name of Jagroto Barta. Jagroto Barta shall
        not be responsible for any content, post, or information generated or
        shared by these fake or unauthorized entities. We strongly advise our
        readers to rely only on official pages and links provided on our website.
      </p>

      {/* --- Cookies --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Do We Use Cookies?</h2>
      <p className="text-xs mb-4 text-justify">
        Jagroto Barta does not collect any user data based on cookies, nor does
        it store any information that may be personal to the user. If a third
        party associated with our website collects cookies during your visit, we
        do not control or manage their use. Therefore, visitors should review
        the relevant third-party privacy policies to understand how their data
        is handled.
      </p>

      {/* --- Third Party Disclosure --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        Third-Party Disclosure
      </h2>
      <p className="text-xs mb-4 text-justify">
        We do not sell, trade, or otherwise transfer to outside parties your
        Personally Identifiable Information unless we provide users with advance
        notice. This does not include website hosting partners and other parties
        who assist in operating our website or conducting our business, provided
        they agree to keep this information confidential. We may also release
        information when it is necessary to comply with laws, enforce site
        policies, or protect ours or others' rights and safety.
      </p>

      {/* --- Third Party Links --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Third-Party Links</h2>
      <p className="text-xs mb-4 text-justify">
        Occasionally, we may include or offer third-party products or services
        on our website. These sites have separate and independent privacy
        policies. We therefore hold no responsibility for the content or
        activities of these linked sites but welcome feedback regarding them.
      </p>

      {/* --- Google Policies --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        Google Advertising and Analytics
      </h2>
      <p className="text-xs mb-4 text-justify">
        Google’s advertising requirements are guided by their Advertising
        Principles designed to provide a positive user experience. We use Google
        Analytics to understand and improve user interactions with our site.
        Google may use the collected data to personalize ads across its network.
        Users can opt out of Google Analytics tracking by installing the
        browser add-on available at
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {" "}
          this link
        </a>
        . For more on Google’s policies, visit{" "}
        <a
          href="https://policies.google.com/privacy?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Google Privacy & Terms
        </a>
        .
      </p>

      {/* --- Fair Information Practices --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        Fair Information Practices
      </h2>
      <p className="text-xs mb-4 text-justify">
        In line with Fair Information Practices, we will notify users via email
        within one business day in case of a data breach. We also adhere to the
        Individual Redress Principle, allowing users to pursue enforceable
        rights against data processors who fail to comply with privacy laws.
      </p>

      {/* --- CAN-SPAM Act --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">CAN-SPAM Act</h2>
      <p className="text-xs mb-4 text-justify">
        The CAN-SPAM Act sets rules for commercial email, gives recipients the
        right to stop emails, and outlines penalties for violations. We agree to
        the following:
      </p>
      <ul className="list-disc ml-6 mb-4 text-xs text-justify">
        <li>Not use false or misleading subjects or email addresses.</li>
        <li>Identify messages as advertisements in a reasonable way.</li>
        <li>Include our physical business address in emails.</li>
        <li>Monitor third-party email marketing services for compliance.</li>
        <li>Honor unsubscribe requests promptly.</li>
        <li>
          Provide users the option to unsubscribe through links at the bottom of
          every email.
        </li>
      </ul>

      {/* --- Changes to Policy --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        Changes to This Privacy Policy
      </h2>
      <p className="text-xs mb-4 text-justify">
        We may update our Privacy Policy periodically. Any changes will be
        posted on this page with a new “effective date.” Users are encouraged to
        review this page occasionally for updates. Major updates will be
        communicated via email or a prominent notice on our website before they
        take effect.
      </p>

      {/* --- Contact --- */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="text-xs mb-4 text-justify">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-none mb-6 text-xs text-justify">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@jagrotobarta.com"
            className="text-primary hover:underline"
          >
            info@jagrotobarta.com
          </a>
        </li>
      </ul>

      <p className="text-xs italic text-center mt-6">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>
    </div>
  );
}
