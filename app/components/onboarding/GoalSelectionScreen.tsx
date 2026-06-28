"use client";

import { useState } from "react";
import GoalCard from "./GoalCard";
import PrimaryButton from "../ui/PrimaryButton";


export default function GoalSelectionScreen() {
    const [selectedGoal, setSelectedGoal] = useState("");
    console.log(selectedGoal);
  return (
    <section className="min-h-screen bg-white flex justify-center">
  <div className="w-full max-w-md px-6 py-10">


<h1 className="text-4xl font-bold leading-tight text-center text-gray-900">
        What's your main
        <br />
         goal?
      </h1>

      <p className="mt-4 text-gray-500">
        Choose one for now.
        You can always change it later.
      </p>

      <div className="mt-10 space-y-4">

      <GoalCard
  emoji="🔥"
  title="Lose Weight"
  description="Burn fat and become healthier."
  selected={selectedGoal === "lose-weight"}
  onClick={() => setSelectedGoal("lose-weight")}
/>

<GoalCard
  emoji="💪"
  title="Build Muscle"
  description="Gain lean muscle and strength."
  selected={selectedGoal === "build-muscle"}
  onClick={() => setSelectedGoal("build-muscle")}
/>

<GoalCard
  emoji="🏃"
  title="Improve Fitness"
  description="Increase stamina and endurance."
  selected={selectedGoal === "improve-fitness"}
  onClick={() => setSelectedGoal("improve-fitness")}
/>

<GoalCard
  emoji="❤️"
  title="Live a Healthier Life"
  description="Feel energetic every day."
  selected={selectedGoal === "healthy-life"}
  onClick={() => setSelectedGoal("healthy-life")}
/>

      </div>

      <div className="mt-10 flex justify-center">
      <PrimaryButton disabled={!selectedGoal}>
  Continue
</PrimaryButton>
      </div>
</div>
    </section>
  );
}