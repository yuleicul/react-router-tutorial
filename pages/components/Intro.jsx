function Intro({ className = "" }) {
  return (
    <div className={`text-center md:text-left ${className}`}>
      <h1 className="text-4xl pb-3 font-montserrat font-900">I'm Yulei Chen</h1>
      <p className="text-xl">I know nothing about JavaScript.</p>
    </div>
  );
}

export default Intro;
