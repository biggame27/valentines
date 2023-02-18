import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-rose-200 overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <Explore />
      <div className="gradient-03 z-0" />
      <Insights />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-01 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <div className="gradient-05 z-0" />
      <World />
    </div>
    <Feedback />
    <Footer />
  </div>
);

export default Page;
