"use client";

import { useState } from "react";
import ProfileSetupScreen from "./ProfileSetupScreen";
import DashboardScreen from "../dashboard/DashboardScreen";

import WelcomeScreen from "./WelcomeScreen";
import CoachIntroScreen from "./CoachIntroScreen";
import GoalSelectionScreen from "./GoalSelectionScreen";

export default function OnboardingFlow() {
    const [screen, setScreen] = useState<
  "welcome" | "coach" | "goal" | "profile" | "dashboard"
>("welcome");
 

  switch (screen) {
    case "welcome":
      return (
        <WelcomeScreen
          onContinue={() => setScreen("coach")}
        />
      );

    case "coach":
      return (
        <CoachIntroScreen
          onContinue={() => setScreen("goal")}
        />
      );

    case "goal":
      return (
        <GoalSelectionScreen
  onContinue={() => setScreen("profile")}

        />
      );
      case "profile":
  return (
    <ProfileSetupScreen
      onContinue={() => setScreen("dashboard")}
    />
  );
  case "dashboard":
    return <DashboardScreen />;

    default:
      return null;
  }
}