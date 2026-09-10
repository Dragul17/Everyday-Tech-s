export const metadata = {
  title: "About Us | EverydayTech",
  description: "Learn more about EverydayTech, our editorial process, and how we choose the tech products we recommend.",
};

export default function About() {
  return (
    <div className="container" style={{ padding: '4rem 20px' }}>
      <div className="prose">
        <h1 style={{ color: 'var(--primary-color)' }}>About EverydayTech</h1>
        
        <div style={{ marginTop: '2rem' }}>
          <h2>What We Do</h2>
          <p>
            Welcome to EverydayTech. Our mission is simple: to provide practical, easy-to-understand guides that help you make smarter technology choices for your daily life, work, and studies. 
          </p>
          <p>
            Technology should empower you, not confuse you. We cut through the jargon to focus on what actually matters when you're looking for a new smartphone accessory, building a study desk setup, or trying to find the perfect budget gadget.
          </p>

          <h2>Who We Are For</h2>
          <p>
            Whether you are a college student living on a tight budget, a professional working from home, or simply someone who wants their technology to work seamlessly, our content is designed for you. We don't focus on hyper-expensive, enterprise-level gear; we focus on the practical, everyday items that most people actually need.
          </p>

          <h2>How We Select Products</h2>
          <p>
            Our recommendations are driven by independent research and a deep understanding of what makes a product genuinely useful. We look for durability, practical features, value for money, and strong ergonomic design.
          </p>
          <p>
            We evaluate products based on:
          </p>
          <ul>
            <li><strong>Practicality:</strong> Does this product solve a real problem?</li>
            <li><strong>Value:</strong> Is the price justified by the features and build quality?</li>
            <li><strong>Ergonomics:</strong> For physical items, is it comfortable and safe to use for extended periods?</li>
            <li><strong>Reliability:</strong> Does the brand have a track record of supporting their products?</li>
          </ul>

          <h2>How We Make Money (Affiliate Disclosure)</h2>
          <p>
            EverydayTech is reader-supported. We participate in the Amazon Associates program and may earn a commission from qualifying purchases made through links on our site. 
          </p>
          <p>
            <strong>This does not affect how much you pay.</strong>
          </p>
          <p>
            Crucially, our editorial integrity is our highest priority. We recommend products because we genuinely believe they are useful, not simply because they pay a commission. If you choose to support us by purchasing through our links, we thank you! It helps us keep the site running and continue producing helpful guides.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            Have a question, feedback, or a product suggestion? We would love to hear from you. Please head over to our <a href="/contact">Contact Page</a> to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
}
