import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'primary' | 'secondary' | 'outline' | 'dark' | 'light';  // Defined variants for clarity
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  // Define button styles based on the variant prop
  const buttonStyles = {
    primary: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-700 text-white border-gray-700 hover:bg-gray-800",
    outline: "bg-transparent text-blue-600 border-blue-600 hover:bg-blue-100",
    dark: "bg-black text-white border-black hover:bg-gray-900",
    light: "bg-white text-gray-800 border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-full border px-6 py-3 text-center 
        ${buttonStyles[variant]} ${full ? 'w-full' : 'w-auto'} 
        hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300`}
      type={type}
    >
      {/* Icon rendering */}
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="transition-transform transform hover:scale-110"
        />
      )}
      {/* Button Title */}
      <span className="font-semibold text-lg whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;

