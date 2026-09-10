export const metadata = {
  title: "Affiliate Disclosure | EverydayTech",
  description: "Read our affiliate disclosure to understand how we fund our independent editorial reviews.",
};

export default function AffiliateDisclosure() {
  return (
    <div className="container" style={{ padding: '4rem 20px' }}>
      <div className="prose">
        <h1 style={{ color: 'var(--primary-color)' }}>Affiliate Disclosure</h1>
        
        <p><strong>Last Updated: [DATE]</strong></p>

        <div style={{ marginTop: '2rem' }}>
          <p>
            At EverydayTech, we believe in complete transparency. In order to keep our website running and continue providing you with high-quality, independent editorial guides, we participate in affiliate marketing programs.
          </p>

          <h2>Amazon Associates Program</h2>
          <p>
            EverydayTech is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '1.1rem', backgroundColor: 'var(--card-bg)', padding: '1rem', borderLeft: '4px solid var(--primary-color)', margin: '2rem 0' }}>
            As an Amazon Associate I earn from qualifying purchases.
          </p>

          <h2>What does this mean for you?</h2>
          <p>
            When you click on a link to an Amazon product on our website and make a purchase, we may receive a small commission from Amazon. 
          </p>
          <p>
            <strong>This commission comes at absolutely no additional cost to you.</strong> You pay the exact same price whether you use our affiliate link or go directly to Amazon yourself.
          </p>

          <h2>Editorial Integrity</h2>
          <p>
            Our participation in affiliate programs does not influence our editorial decisions. We do not accept payment from manufacturers in exchange for positive reviews. Our primary goal is to help you make informed purchasing decisions.
          </p>
          <p>
            We only recommend products that we genuinely believe offer value, utility, and reliable performance. If a product is flawed, we will point out its drawbacks, regardless of potential affiliate commissions.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions regarding our affiliate relationships or how we fund our operations, please feel free to <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
