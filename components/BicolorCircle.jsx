function BicolorCircle({ from, to, className = "", ...props }) {
  return (
    <div
      className={`
      h-6 w-6 rounded-full cursor-pointer mb-1
      bg-gradient-to-b from-${from} from-50% to-${to} to-50%
      border-1 border-white hover:brightness-110
      transition-transform-300 
      md:border-none md:bg-gradient-to-r 
      ${className}
    `}
      {...props}
    />
  );
}

export default BicolorCircle;
