

const FindUs = () => (
    <section className="findus-section">
<h2 className="findus-heading"> Our Location</h2>
        <div className="findus-content-container">
            
            <div className="findus-info">
            
                <div className="findus-content findus-div">
                    <h5 className="findus-subtitle" id='findus-address'>Address</h5>
                    <p className="findus-address">
                        439 Grand Canyon Drive <br />
                        Madison, WI 53719
                    </p>
                    <h5 className="findus-subtitle" id='findus-hours'>Hours</h5>
                    <p className="findus-time">
                        <strong>Tuesday - Saturday:
                        </strong> 11:30 AM - 09:30 PM
                    </p>
                    <p className="findus-time">
                        <strong>Sunday: </strong> 9:00 AM - 09:30 PM
                    </p>
                    <button className="btn" id='visit-us'>Visit Us</button>
                </div>

                
         

            </div>

                  <div className="findus-map findus-div">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11105.38740515816!2d-89.50329850098856!3d43.056879693272236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807af4540af43d5%3A0x76a6b4d70053914c!2sMirch%20Masala!5e0!3m2!1sen!2sus!4v1702392688674!5m2!1sen!2sus"
          width="650"
          title="findus"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="iframe"
        ></iframe>
      </div>
        </div>
        </section>

  
);

export default FindUs;
