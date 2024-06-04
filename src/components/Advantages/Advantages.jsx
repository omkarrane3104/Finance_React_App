import React from 'react';
import "./Advantages.css"

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantage">
        <div className="a-left">
          <div className="a-heading">
            <span>advantages</span>
            <img src="/images/advantages_text.png" alt="" />
          </div>
          <div className="text-container">
            <img src="/images/advantages_bell.png" alt="" />
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
              Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
              neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>

        <div className="a-right">
          <img className="a-img-1" src="/images/advatages_mobile_1.png" alt="" />
          <img className="a-img-2" src="/images/On Hold.png" alt="" />
          <img className="a-img-3" src="/images/advantages_bell_blur.png" alt="" />
        </div>
        <img className="star-9" src="/images/star-9.png" alt="" />
      </div>
      <div className="advantage-2">
        <div className="a-left-2">
          <img className="a-img-4" src="/images/features_mobile_1.png" alt="" />
          <img className="a-img-5" src="/images/advantages_star_mobilen_pass.png" alt="" />
          <img className="a-img-7" src="/images/advantages_blur_5.png" alt="" />
          <img className="star-10" src="/images/Star 8.png" alt="" />
        </div>
        <div className="a-right-2">
          <div className="text-container">
            <img src="/images/advantages_star.png" alt="" />
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices
              malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
              Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
              neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
