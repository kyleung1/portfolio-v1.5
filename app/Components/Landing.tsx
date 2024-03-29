export default function landing() {
  return (
    <>
      <div className="flex justify-around items-center mt-44">
        <div className="">
          <h1
            className="lg:text-9xl md:text-7xl text-6xl text-indigo-800 font-sans"
            data-aos="fade-up"
          >
            Kyle Leung
          </h1>
          <h2 className="lg:text-3xl text-2xl mt-10">
            <span className="lg:text-xl text-lg ml-3">based in</span> Seattle,
            Washington
          </h2>
          <h2 className="lg:text-3xl text-2xl mt-10 ml-3">
            FullStack Web Developer / MSCS student at CU Boulder
          </h2>
        </div>
        <div className="w-1/4 max-w-[500px] shadow-2xl">
          <img src="/Kyle.PNG" alt="me" className="rounded-md" />
        </div>
      </div>

      <div className="flex justify-center my-52">
        <p className="w-2/5 md:text-xl text-sm">
          Welcome to my portfolio site! I am Kyle Leung, a recent graduate from
          the University of Washington. My interest in software development has
          led me to build many web projects that I hope to showcase through this
          website. I am currently seeking exciting opportunities to apply my
          knowledge and contribute to. Feel free to reach out!
        </p>
      </div>
    </>
  );
}

// export default function landing() {
//   return (
//     <>
//       this is the template for components
//     </>
//   )
// }
