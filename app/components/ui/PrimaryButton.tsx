type PrimaryButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
  };
  
  export default function PrimaryButton({
    children,
    disabled = false,
    onClick,
  }: PrimaryButtonProps) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
          w-full
          h-14
          rounded-full
          text-white
          font-semibold
          text-lg
          transition-all
          duration-300
          ${
            disabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }
        `}
      >
        {children}
      </button>
    );
  }