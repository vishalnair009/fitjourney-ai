type PrimaryButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  };
  
  export default function PrimaryButton({
    children,
    onClick,
    disabled = false,
  }: PrimaryButtonProps) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          w-full
          h-14
          rounded-full
          font-semibold
          text-lg
          text-white
          transition-all
          duration-300
          ${
            disabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 active:scale-95"
          }
        `}
      >
        {children}
      </button>
    );
  }