"use client";

import { useUserStore } from "../../app/store/userStore";
import ProgressCard from "./ProgressCard";
import WaterCard from "./WaterCard";
import MissionCard from "./MissionCard";
import DronaCard from "./DronaCard";

type DashboardScreenProps = {
  onOpenChat: () => void;
};

export default function DashboardScreen({
  onOpenChat,
}: DashboardScreenProps) {
  const user = useUserStore((state) => state.user);

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold">
          Good Morning, {user.name} 👋
        </h1>

        <div className="mt-6">
          <DronaCard onOpenChat={onOpenChat} />
        </div>

        <div className="mt-8">
          <MissionCard />
        </div>

        <div className="mt-6">
          <ProgressCard
            currentWeight={user.weight}
            targetWeight={user.targetWeight}
          />
        </div>

        <div className="mt-6 space-y-4">

          <DashboardCard
            title="🎯 Goal"
            value={user.goal}
          />

          <DashboardCard
            title="⚖️ Current Weight"
            value={`${user.weight} kg`}
          />

          <DashboardCard
            title="🎯 Target Weight"
            value={`${user.targetWeight} kg`}
          />

          <WaterCard />

          <DashboardCard
            title="👣 Steps"
            value="0 / 8000"
          />

          <DashboardCard
            title="🏋 Workout"
            value="Not Started"
          />

          <DashboardCard
            title="🔥 Current Streak"
            value="0 Days"
          />

        </div>

      </div>
    </section>
  );
}

type DashboardCardProps = {
  title: string;
  value: string;
};

function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}