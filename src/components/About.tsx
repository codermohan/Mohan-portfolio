
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-secondary mb-8">About Me</h2>
        <div className="space-y-6 text-neutral">
          <p>
            Your introduction paragraph goes here. Talk about your background,
            passion for development, and what drives you.
          </p>
          <p>
            Second paragraph about your technical expertise and what kind of
            projects you enjoy working on.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-secondary/5 rounded-lg">
              <h3 className="font-semibold text-secondary">Frontend</h3>
              <p className="text-sm">React, Next.js, TypeScript</p>
            </div>
            <div className="p-4 bg-secondary/5 rounded-lg">
              <h3 className="font-semibold text-secondary">Backend</h3>
              <p className="text-sm">Node.js, Express, MongoDB</p>
            </div>
            <div className="p-4 bg-secondary/5 rounded-lg">
              <h3 className="font-semibold text-secondary">Tools</h3>
              <p className="text-sm">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
