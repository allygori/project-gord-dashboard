type Props = {
  className?: string;
};

const ChevronDown1 = ({ className = "" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9l6 6l6 -6"></path>
    </svg>
  );
};

export default ChevronDown1;
