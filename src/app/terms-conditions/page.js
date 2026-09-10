export const metadata = {
  title: "Terms & Conditions | EverydayTech",
  description: "Terms and conditions for using the EverydayTech website.",
};

export default function TermsConditions() {
  return (
    <div className="container" style={{ padding: '4rem 20px' }}>
      <div className="prose">
        <h1 style={{ color: 'var(--primary-color)' }}>Terms & Conditions</h1>
        <p><strong>Last Updated: [DATE]</strong></p>
        <div style={{ marginTop: '2rem' }}>
          <p>
            Please read these terms and conditions carefully before using the EverydayTech website.
          </p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <h2>2. Informational Purposes</h2>
          <p>
            The content provided on EverydayTech is for informational and educational purposes only. We make every effort to ensure the accuracy of the information, but we make no warranties or representations as to its accuracy, completeness, or suitability for any purpose. Prices and availability of products mentioned are subject to change.
          </p>
          <h2>3. Affiliate Links</h2>
          <p>
            Our website contains affiliate links, meaning we may receive a commission if you click a link and make a purchase. See our <a href="/affiliate-disclosure">Affiliate Disclosure</a> for more details.
          </p>
          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
