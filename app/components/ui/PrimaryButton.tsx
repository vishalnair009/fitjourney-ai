type PrimaryButtonProps = {
    children: React.ReactNode;
  };
  
  export default function PrimaryButton({
    children,
  }: PrimaryButtonProps) {
    return (
      <button
        className="
          w-full
          max-w-sm
          h-14
          rounded-full
          bg-green-700
          hover:bg-green-700
          text-white
          font-semibold
          text-lg
          transition
          duration-200
        "
      >
        {children}
      </button>
    );
  }
