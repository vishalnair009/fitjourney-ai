import PrimaryButton from "../ui/PrimaryButton";

export default function WelcomeScreen() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6">

      {/* Placeholder Image */}
      <div className="w-56 h-40 rounded-lg bg-gray-200 mb-16" />

      <h1 className="text-5xl font-bold text-center leading-tight">
        Every great journey
        <br />
        begins with a decision.
      </h1>

      <p className="mt-6 text-gray-500 text-center text-lg">
        You don't have to walk this journey alone.
      </p>

      <div className="mt-20 w-full max-w-sm">
        <PrimaryButton>
          Meet Drona
        </PrimaryButton>
      </div>

    </section>
  );
}