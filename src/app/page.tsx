import Hero from "@/components/hero/HeroSection"; 
import EventsData from "./events/event-data";
import AdvocacyData from "./advocacy/advocacy-data";
import NewsData from "./news/news-data";
import JoinData from "./join/join-data";
import MediaGallery from "./gallery/gallery-data";
import About from "@/components/hero/AboutSection";



export default function Home() {
  return (
    <>  
      <Hero /> 
      <About/>
      <EventsData/>
      <AdvocacyData/>
      <MediaGallery/>
      <NewsData/>
      <JoinData/> 
    </>
  );
}

 