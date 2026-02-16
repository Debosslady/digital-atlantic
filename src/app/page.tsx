import Hero from "@/components/hero/HeroSection";
import AboutData from "./about/about-data"; 
import EventsData from "./events/event-data";
import AdvocacyData from "./advocacy/advocacy-data";
import NewsData from "./news/news-data";
import JoinData from "./join/join-data";
import MediaGallery from "./gallery/gallery-data";



export default function Home() {
  return (
    <>  
      <Hero /> 
      <AboutData/>
      <EventsData/>
      <AdvocacyData/>
      <MediaGallery/>
      <NewsData/>
      <JoinData/> 
    </>
  );
}

 