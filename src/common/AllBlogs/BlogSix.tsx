const BlogSix = () => {
  return (
    <div className="text-left flex flex-col py-8 space-y-12 max-w-[1000px] mx-auto px-4 ">
      <p className="text-lg sm:text-xl">
        It is important to understand more about the mobile app architecture
        design as one can ask for that particular service from their web design
        service providers to grow in the app market.
      </p>

      <div className="space-y-2">
        <h1 className="text-xl sm:text-3xl font-semibold">
          Presentation Layer
        </h1>
        <p className="text-lg sm:text-xl">
          The interactions and components of the user interface are managed by
          the presentation layer which is also referred to as the UI layer. It
          has the goal to provide consumers with data in an understandable and
          visually appealing way. The users can interact with items such as
          widgets, buttons, screens, and navigational elements. When it is to
          guarantee consistent and responsive user experiences, the presentation
          layer is created using UI frameworks or libraries that are unique to
          the platform.
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="text-xl sm:text-3xl font-semibold">Business Layer</h1>
        <p className="text-lg sm:text-xl">
          The application's fundamental business rules and logic are contained
          in the business layers, that is also known as the logic layer or
          domain layer. It is important to carry out our activities or processes
          the layer is overseen by the processing and altering of data that is
          received from the presentation layer. It puts into practice of
          business rules, workflows, validations, and algorithms that are
          required for app operation. It is important to keep business logic
          separate from the user interface, the business layer can help to
          promote the separation of concerns and make maintainability,
          application testing, and scalability easier.
        </p>

        <div className="space-y-3 py-4">
          <h1 className="text-xl sm:text-2xl font-semibold">Data Layer</h1>
          <p className="text-lg sm:text-xl">
            The mobile app data can layer control data and access storage. It is
            important to retrieve, save, and change data so that one can
            communicate with other databases, APIs, online services, or local
            storage. The separation of the underlying data storage techniques
            from the rest of the application so the data layer can free the
            business layer to work with data without being constrained by data
            formats or sources. It is important to effectively manage data
            retrieval and synchronization, so the layer is frequently consists
            of elements including repositories, data models, data access
            objects, and networking libraries.
          </p>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold">
          Tips to develop mobile app architecture
        </h1>
        <div className="space-y-3 py-4">
          <h1 className="text-xl sm:text-2xl font-semibold">
            Define clear requirements and use cases
          </h1>
          <p className="text-lg sm:text-xl">
            One should decide on the specifications and use cases for the mobile
            app in detail before beginning the architecture process. It
            recognizes the features, expected performance, and user
            expectations. It has well defined requirements that act as a guide
            while choosing suitable architectural elements and design choices.
          </p>
        </div>

        <div className="space-y-3 py-4">
          <h1 className="text-xl sm:text-2xl font-semibold">
            Choose the right architectural pattern
          </h1>
          <p className="text-lg sm:text-xl">
            One should choose the best architectural pattern for the application
            that depends on its needs and complexity. MVC, MVVM, MVP, and Clean
            Architecture are examples of common patterns. One should consider
            the scalability, testing, and maintainability of each design to
            determine its strengths.
          </p>
        </div>
      </div>
      <div className="space-y-3 py-4">
        <h1 className="text-xl sm:text-3xl font-semibold">Final words</h1>
        <p className="text-lg sm:text-xl">
          Individuals who are looking to build their website and mobile app and
          turn their ideas to reality need to know a web designing services
          provider so that they can get the best services to grow in a digital
          world. One should choose Maya Web Tech as they have the best web
          designing and mobile app development services with digital marketing
          services that help customers to grow in the digital world.
        </p>
      </div>
    </div>
  );
};

export default BlogSix;
