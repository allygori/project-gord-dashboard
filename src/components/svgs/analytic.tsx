type Props = {
  className?: string;
}

const Analytic = ({ className = "" }: Props) => {
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
      <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"></path>
      <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
    </svg>
  )
}

export default Analytic;