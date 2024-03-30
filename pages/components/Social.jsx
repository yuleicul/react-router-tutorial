function Social({ className = '' }) {
  return (
    <div
      className={`flex flex-col items-center gap-6 ${className}`}
    >
      <img
        alt="Yulei Chen"
        src="/avatar.png"
        className="h-35 w-35 hue-rotate-[var(--img-hue-rotate)]"
      />
      <div className="flex gap-3">
        <a
          className="i-mdi-github text-3xl"
          href="https://github.com/yuleicul"
        />
        <a
          className="i-mdi-youtube text-3xl"
          href="https://www.youtube.com/@code_tuner"
        />
        {/* <a className="i-mdi-rss text-3xl" /> */}
      </div>
    </div>
  )
}

export default Social
