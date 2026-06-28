"use client";

export default function DashboardScreen() {
  return (
    <section className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold">
          Good Morning, Vishal 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Let's make today count.
        </p>

        <div className="mt-8 space-y-4">

          <DashboardCard
            title="⚖️ Weight"
            value="98 kg"
          />

          <DashboardCard
            title="💧 Water"
            value="0 / 4 L"
          />

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