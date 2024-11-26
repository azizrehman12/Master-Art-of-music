import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import FeaturedCourses from "@/components/featuredCourses";
import HeroSection from "@/components/herosection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     
      <HeroSection />
      <FeaturedCourses/>

      <MusicSchoolTestimonials/>
      <Instructors/>
    </main>
  );
}

 