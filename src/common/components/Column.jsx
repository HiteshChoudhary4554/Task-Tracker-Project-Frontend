function Column({ heading, children, className = "" }) {
  return (
    <section
      className={` h-full rounded-4xl border border-gray-300 bg-[#111216] p-5 text-white shadow-lg ${className}`}
    >
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-2xl font-medium tracking-wide text-gray-100">
          {heading}
        </h2>
      </div>

      <div className="space-y-5">{children}</div>
    </section>
  );
}

export default Column;
