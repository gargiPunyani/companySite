import { lazy, Suspense } from "react";
import { FAQ } from "../FAQ";
import { MovingCards } from "../MovingCards";
import { WorkFlows } from "../WorkFlows";
import Hero from "../Hero";

const WorkShow = lazy(() => import("../WorkShow"));
const ServiceRequirements = lazy(() => import("../ServiceRequirements"));
const WhyChooseUsHome = lazy(() => import("../WhyChooseUsHome"));
const Steps = lazy(() => import("../Steps"));
const ReviewHome = lazy(() => import("../ReviewHome"));
const LetsTalkFooter = lazy(() => import("../LetsTalkFooter"));
const CompaniesServed = lazy(() => import("../CompaniesServed"));
const HighlightHero = lazy(() => import("@/common/HighlightHero"));

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<p>Loading ...</p>}>
        <CompaniesServed />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <WhyChooseUsHome />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <Steps />
      </Suspense>

      <WorkFlows />

      <Suspense fallback={<p>Loading ...</p>}>
        <ServiceRequirements />
      </Suspense>

      <MovingCards />

      <Suspense fallback={<p>Loading ...</p>}>
        <WorkShow />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <HighlightHero />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <ReviewHome />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <LetsTalkFooter />
      </Suspense>
    </>
  );
};

export default Home;
