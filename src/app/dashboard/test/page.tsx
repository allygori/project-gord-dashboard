type Props = {
  className?: string;
};

const Page = ({ className = "" }: Props) => {
  return <section className={className}>Test</section>;
};

export default Page;
