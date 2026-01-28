const DemoVideo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Demo
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            See LeadLoom in Action
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Watch how our platform transforms lead generation in under 1 minute
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg shadow-lg overflow-hidden bg-black">
            <iframe
              src="https://www.loom.com/embed/75a5ea7d20974e758de656c65e6dad57"
              title="LeadLoom Demo Video"
              className="w-full h-full"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
