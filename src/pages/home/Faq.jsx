const Faq = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-1">Frequently Asked Questions</h2>
      <div className="border border-teal-600 mt-3"></div>
      <div className="collapse collapse-arrow bg-white mb-2 mt-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;