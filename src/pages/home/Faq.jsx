const Faq = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-1">Frequently Asked Questions</h2>
      <div className="border border-teal-600 mt-3"></div>
      <div className="collapse collapse-arrow bg-white mb-2 mt-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">How does the recommendation system work?</div>
        <div className="collapse-content">
          <p>Our recommendation system uses advanced algorithms to analyze user preferences, browsing history, and reviews. It combines this data to suggest the most relevant products or services tailored to your needs. As you interact more with the platform, the recommendations become more personalized.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium"> Can I trust the recommendations provided on this platform?</div>
        <div className="collapse-content">
          <p>Yes, our platform is designed to provide unbiased and accurate recommendations. We rely on user reviews, ratings, and verified data from trusted sources to ensure that the products or services recommended are high-quality and reliable.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Is this platform free to use?</div>
        <div className="collapse-content">
          <p>Yes, our platform is completely free to use for browsing and receiving recommendations. However, if you wish to access premium features like detailed analytics, priority support, or expert consultations, you can explore our subscription plans.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">How can I contribute my own recommendations or reviews?</div>
        <div className="collapse-content">
          <p>We encourage users to share their experiences! You can contribute by creating an account, navigating to the product or service page, and leaving your review or recommendation. Your insights help others make informed decisions and improve the overall quality of our platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;