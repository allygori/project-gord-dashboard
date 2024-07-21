type Props = {
  className?: string;
};

const Note = ({ className = "" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3rem"
      height="1.3rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
      <path d="M9 7l6 0"></path>
      <path d="M9 11l6 0"></path>
      <path d="M9 15l4 0"></path>
    </svg>
  );
};

export default Note;
