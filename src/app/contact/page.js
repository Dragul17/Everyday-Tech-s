export const metadata = {
  title: "Contact Us | EverydayTech",
  description: "Get in touch with the EverydayTech team for questions, suggestions, or feedback.",
};

export default function Contact() {
  return (
    <div className="container" style={{ padding: '4rem 20px', maxWidth: '800px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
        We love hearing from our readers. Whether you have a question about a recent guide, a suggestion for a new topic, or just want to say hello, please don't hesitate to reach out.
      </p>

      <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}
            />
          </div>
          
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}
            />
          </div>
          
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6"
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', resize: 'vertical' }}
            ></textarea>
          </div>
          
          <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
            Send Message
          </button>
        </form>
        
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Direct Contact</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            If you prefer not to use the form, you can email us directly at:<br />
            <strong>dinezktg2007@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
