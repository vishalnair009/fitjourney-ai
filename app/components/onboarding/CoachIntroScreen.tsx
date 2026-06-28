"use client";

import DronaAvatar from "../ui/DronaAvatar";
import PrimaryButton from "../ui/PrimaryButton";
import FadeIn from "../animations/FadeIn";
import Typewriter from "../animations/Typewriter";


export default function CoachIntroScreen() {
    /*const hasSpoken = useRef(false);
    useEffect(() => {
        if (hasSpoken.current) return;
      
        hasSpoken.current = true;
      
        speak(
          "Hi Vishal. I'm Drona. I'm here to help you become healthier, stronger and more confident."
        );
      }, []);*/
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 bg-white">

<FadeIn>
  <DronaAvatar />
</FadeIn>

<FadeIn delay={0.2}>
      <h1 className="mt-12 text-4xl font-bold text-center text-gray-900">
        Hi Vishal 👋
      </h1>
      </FadeIn>
      <FadeIn delay={0.4}>
      <h2 className="mt-4 text-2xl font-semibold">
      <Typewriter
        text="I'm Drona, your personal fitness coach."
      />
      </h2>
</FadeIn>
<FadeIn delay={2.2}>
      <p className="mt-8 text-center text-gray-600 max-w-sm leading-7">
      I'm here to help you become healthier, 
              stronger and more confident.

        <br /><br />

        No crash diets. 
        
        No impossible routines.

        <br /><br />

        Just one small step every day.

        <br /><br />

        We'll do this together.
      </p>
      </FadeIn>
      <FadeIn delay={4}>
      <div className="mt-16 flex justify-center">
  <PrimaryButton>
    Let's Begin
  </PrimaryButton>
</div>
</FadeIn>
    </section>
  );
}