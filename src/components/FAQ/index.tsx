import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const qna = [
    {
      ques: "What are the different services that you provide?",
      ans: `We have different services that can help to build your website
            smoothly. These services are UI, UX design, web designing services,
            digital marketing services, search engine services such as search
            engine optimization, social media optimization, and a lot of
            different services. We have these services to make and grow your
            idea of business.`,
    },
    {
      ques: "Could you help with different marketing projects?",
      ans: `Yes, we can easily help with any project. We have served in a lot of
            different projects that are related to various industries such as
            healthcare, finance, IT, beauty, pharma, and many others. So, do not
            have any tension regarding our services of the best website design
            as we always make sure to turn out your ideas of creativity into
            reality with our endless services.`,
    },
    {
      ques: "Does all of your services ensure the right professional services?",
      ans: `Yes, all of our services are provided by the qualified professionals
            and we have a team of professionals who work deliberately to fulfill
            your needs to get the right website and the perfect brand that you
            wanted for a long time. Our team members always work rightly to
            ensure that your need for the brand can be fulfilled by the right
            means. We also make sure that we can make the client's experience
            more personalized and make it more smoother for them to take more
            services from our end.`,
    },
    {
      ques: "How could your services help us grow in the market?",
      ans: `We have all the services that can make your brand from the start. We
            ensure everyone that we can easily make them grow in the advanced
            market as by providing them with the best digital marketing and web
            development services. These services can just turn your little idea
            of something into something big and compelling in the market. We are
            here to turn your idea into reality just by providing you with the
            best services that we can from our end. We also are here to make
            sure that all of our services are personalized from our end to make
            sure that you get the help of the right services.`,
    },
    {
      ques: "How far are your services liked by others?",
      ans: `We always make sure that we can help our customers get the website
            and apps that they desire along with fulfilling all their ideas and
            desires. So, it makes our services true to the words that we spoke.
            Also, they refer us to someone new who is looking to get services
            like the ones that we provide. We have a team of professionals and
            experts who can help you to grow a startup or even maintain the
            highly established companies just through our different available
            services. We have a lot of tools, a dedicated team, and much-needed
            craftwork for you to grow as a company.`,
    },
  ];
  return (
    <>
      <div className="text-3xl md:text-7xl font-bold dark:text-white text-center my-20 mt-28">
        Frequently Asked <span className="text-red-700"> Questions</span>
      </div>
      <Accordion
        type="single"
        collapsible
        className="text-md sm:text-lg mx-4 sm:mx-28 text-left"
      >
        {qna.map((item, index) => {
          return (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{item.ques}</AccordionTrigger>
              <AccordionContent>{item.ans}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
