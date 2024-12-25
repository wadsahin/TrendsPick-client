import our_team from "../../src/assets/team/our-team.jpg"
const Careers = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-1">Careers</h2>
      <div className="border border-teal-600 mt-3"></div>
      <div className="pt-10 flex flex-col lg:flex-row justify-between items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-3">Join the <span className="text-teal-500">Team</span></h3>
          <p className="text-lg">Built and operating in a fully-remote capacity, Query is proof that innovation and talent can sprout and grow anywhere.</p>
          <br />
          <p className="text-lg">
            We embody this belief, and while our headquarters is in Dhaka, our team is dispersed across the globe. That’s right, we were remote before it was cool.
          </p>
          <br />
          <p className="text-lg">
            We’re bringing together the best of the best talent based on experience, intelligence, drive, and character.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <img src={our_team} className="rounded-md" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Careers;