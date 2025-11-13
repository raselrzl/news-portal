import { trackRoute } from "@/app/utils/routeTracker";
import React from "react";

export default async function TermsPage() {
  await trackRoute("Terms");
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Use</h1>

      <p className="mb-4 text-xs text-justify">
        <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US")}
      </p>

      <p className="mb-4 text-xs text-justify">
        Welcome to the Terms of Use of <strong>Jagroto Barta</strong> and its associated
        websites, services, and applications. By accessing or using our content through
        any medium (including web, mobile, digital, or social platforms), you agree to
        these Terms of Use and our Privacy Policy. If you have any concerns about these
        terms, please contact us at{" "}
        <a href="mailto:info@jagrotobarta.com" className="text-primary hover:underline">
          info@jagrotobarta.com
        </a>.
      </p>

      {/* 1. Intellectual Property Rights */}
      <h2 className="text-lg font-semibold mt-6 mb-2">1. Intellectual Property Rights</h2>
      <p className="mb-4 text-xs text-justify">
        All content, logos, trademarks, images, videos, text, graphics, software, and
        related intellectual property displayed on Jagroto Barta are owned by Jagroto
        Barta or its licensors. You are not permitted to copy, reproduce, republish,
        modify, or create derivative works without prior written permission. Violation
        of these rights may result in legal action.
      </p>

      {/* 2. Use of Our Services */}
      <h2 className="text-lg font-semibold mt-6 mb-2">2. Use of Our Services</h2>
      <p className="mb-4 text-xs text-justify">
        Users must access Jagroto Barta’s content only for lawful and personal purposes.
        Any attempt to hack, disrupt, or bypass content protection mechanisms is strictly
        prohibited. Content may be shared on social platforms only with proper credit and
        without modification.
      </p>

      {/* 3. User Behavior */}
      <h2 className="text-lg font-semibold mt-6 mb-2">3. User Behavior</h2>
      <ul className="list-disc ml-6 mb-4 text-xs text-justify">
        <li>Do not use abusive, defamatory, or hateful language.</li>
        <li>Do not post false information, spam, or misleading material.</li>
        <li>Respect others’ privacy and refrain from harassment or bullying.</li>
      </ul>

      {/* 4. Taking Down Content */}
      <h2 className="text-lg font-semibold mt-6 mb-2">4. Taking Down Content</h2>
      <p className="mb-4 text-xs text-justify">
        Jagroto Barta reserves the right to remove any content at any time, at its sole
        discretion, without prior notice. Users must comply if asked to remove content or
        applications from their devices.
      </p>

      {/* 5. Unauthorized and Prohibited Activities */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        5. Unauthorized and Prohibited Activities
      </h2>
      <p className="mb-4 text-xs text-justify">
        Users must not associate Jagroto Barta with political parties, racism, sexism, or
        any activity that could damage its reputation. Posting obscene, offensive, or
        unlawful materials is strictly forbidden.
      </p>

      {/* 6. Protection of User Devices */}
      <h2 className="text-lg font-semibold mt-6 mb-2">6. Protection of User Devices</h2>
      <p className="mb-4 text-xs text-justify">
        Users are responsible for protecting their devices against viruses or malware.
        Jagroto Barta bears no responsibility for any damage or contamination caused by
        accessing third-party content or advertisements.
      </p>

      {/* 7. Sharing Marks and Content */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        7. Sharing Marks, Content, and Images
      </h2>
      <p className="mb-4 text-xs text-justify">
        Users may not share or reuse Jagroto Barta’s content, images, or logos for any
        commercial or personal use without authorization. When sharing is permitted, full
        credit to Jagroto Barta must be clearly visible.
      </p>

      {/* 8. Third-Party Links and Content */}
      <h2 className="text-lg font-semibold mt-6 mb-2">8. Third-Party Links and Content</h2>
      <p className="mb-4 text-xs text-justify">
        Our site may contain links to external websites. Jagroto Barta is not responsible
        for their content, privacy policies, or any damages resulting from their use.
        Third-party content displayed on our platform remains the responsibility of its
        creators.
      </p>

      {/* 9. Advertisements */}
      <h2 className="text-lg font-semibold mt-6 mb-2">9. Advertisements</h2>
      <p className="mb-4 text-xs text-justify">
        Advertisements displayed on Jagroto Barta may be provided by third-party
        companies. We are not liable for any data collection or sharing practices carried
        out by these advertisers.
      </p>

      {/* 10. Modification of Terms */}
      <h2 className="text-lg font-semibold mt-6 mb-2">10. Modification of Terms</h2>
      <p className="mb-4 text-xs text-justify">
        Jagroto Barta reserves the right to modify or amend these Terms at any time. Any
        changes will be updated on this page, and continued use of our services implies
        acceptance of the revised terms.
      </p>

      {/* 11. User Generated Content */}
      <h2 className="text-lg font-semibold mt-6 mb-2">11. User Generated Content</h2>
      <p className="mb-4 text-xs text-justify">
        Users may post comments, articles, or media on Jagroto Barta but must ensure such
        content is lawful, respectful, and free from offensive or defamatory material.
        Jagroto Barta reserves the right to remove any user content without notice.
      </p>

      {/* 12. Disclaimer */}
      <h2 className="text-lg font-semibold mt-6 mb-2">12. Disclaimer</h2>
      <p className="mb-4 text-xs text-justify">
        While Jagroto Barta strives to provide accurate and timely news and information,
        we cannot guarantee absolute accuracy or completeness. All content is provided
        “as is” and for informational purposes only.
      </p>

      {/* 13. Governing Law */}
      <h2 className="text-lg font-semibold mt-6 mb-2">13. Governing Law</h2>
      <p className="mb-4 text-xs text-justify">
        These Terms are governed by the laws of Bangladesh. Any disputes shall be settled
        under the Arbitration Act, 2001, in Dhaka, Bangladesh.
      </p>

      {/* 14. Opt-Out and Contact */}
      <h2 className="text-lg font-semibold mt-6 mb-2">14. Opt-Out and Contact</h2>
      <p className="mb-4 text-xs text-justify">
        Users who wish to unsubscribe from our emails can do so by following the
        “unsubscribe” link provided in each email. For further questions or to terminate
        your account, contact us at:
      </p>

      <ul className="list-none mb-6 text-xs">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@jagrotobarta.com"
            className="text-primary hover:underline"
          >
            info@jagrotobarta.com
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

      <p className="text-xs italic text-justify">
        Thank you for reading these Terms of Use and for being a part of Jagroto Barta.
      </p>
    </div>
  );
}
