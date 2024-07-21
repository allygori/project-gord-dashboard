type Props = {
  className?: string;
}

const Drawer = ({ className = "" }: Props) => {
  return (
    <div className={className}>
      Drawer
    </div>
  )
}

export default Drawer;