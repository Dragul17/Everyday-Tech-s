export const metadata = {
  title: "Privacy Policy | EverydayTech",
  description: "Our privacy policy outlines how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '4rem 20px' }}>
      <div className="prose">
        <h1 style={{ color: 'var(--primary-color)' }}>Privacy Policy</h1>
        <p><strong>Last Updated: [DATE]</strong></p>
        <div style={{ marginTop: '2rem' }}>
          <p>
            Welcome to EverydayTech (the "Website"). We respect your privacy and are committed to protecting it through our compliance with this policy.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            When you visit the Website, we may collect certain information about your device, your interaction with the Website, and information necessary to process your requests (like contacting us). 
          </p>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to operate and maintain our Website, to respond to your comments and questions, and to track affiliate link performance.
          </p>
          <h2>3. Affiliate Tracking</h2>
          <p>
            We use affiliate links (such as Amazon Associates). These networks use cookies to track clicks and purchases made through our links to attribute commissions correctly. They do not share personally identifiable information with us.
          </p>
          <h2>4. Contact Us</h2>
          <p>
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
