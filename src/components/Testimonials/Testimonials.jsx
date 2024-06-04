import React from 'react';
import "./Testimonials.css"

const Testimonials = () => {
  return (
    <section className="testimonials">
      <img className="star-7" src="/images/star-7.png" alt="" />
      <div className="t-container">
        <span>testimonials</span>
        <img src="/images/testimonials_t.png" alt="" />
        <div className="testimonial-container">
          <div className="t-right">
            <img className="t-img-1" src="/images/testimonials_img_1.png" alt="" />
            <img className="t-img-2" src="/images/testimonials_blur_1.png" alt="" />
          </div>
          <div className="t-left">
            <h3>the best financial accounting app ever!</h3>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
              Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
              neque lorem sapien, suspendisse aliquam.”
            </p>
            <div className="t-container-2">
              <img src="/images/testimonials_img_peoples.png" alt="" />
              <h3>Nick Jonas</h3>
            </div>
          </div>
        </div>
      </div>
      <img src="/images/star 8.png" alt="" />
    </section>
  );
};

export default Testimonials;
