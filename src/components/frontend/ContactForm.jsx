const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-form">
        <h2>CONTACT FORM</h2>
        <div className="contact-field">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="contact-field">
          <label>Subject</label>
          <input type="text" placeholder="Enter subject" />
        </div>
        <div className="contact-field">
          <label>Message</label>
          <textarea type="text" placeholder="Enter message" />
        </div>
        <div className="contact-field">
          <button>Send Mail</button>
        </div>
      </div>
      <div className="contact-img">
        <img src="contact-img.png" />
      </div>
    </div>
  );
};

export default ContactForm;
