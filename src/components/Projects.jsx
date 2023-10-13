export default function Projects() {
  return (
    <div className="mt-5 mx-5">
      <h1 className="font-bold">My Projects</h1>
      <section className="columns-2 text-slate-900 font-extrabold mt-10">
        <div className="relative group">
          <a href="https://github.com/sleepyhaha/samsung-universe">
            <img
              src="src/assets/screenshot.png"
              alt="AirItinerary"
              className="rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100 ease-in duration-150"
            />
            <div className="z-50 absolute right-10 bottom-10 border-4 p-2 bg-slate-300 rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100">
              <p>AirItinerary</p>
            </div>
          </a>
        </div>
        <div className="relative group mt-5">
          <a href="https://github.com/sleepyhaha/team-samsung">
            <img
              src="src/assets/startscreen.png"
              alt="PictoHang"
              className="rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100 ease-in duration-150"
            />
            <div className="z-50 absolute right-10 bottom-10 border-4 p-2 bg-slate-300 rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100">
              <p>PictoHang</p>
            </div>
          </a>
        </div>
        <div className="relative group">
          <a href="https://github.com/sleepyhaha/sams-coding-quiz">
            <img
              src="src/assets/coding-quiz.png"
              alt="Coding quiz"
              className="rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100 ease-in duration-150"
            />
            <div className="z-50 absolute right-10 bottom-10 border-4 p-2 bg-slate-300 rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100">
              <p>Coding Quiz</p>
            </div>
          </a>
        </div>
        <div className="relative group mt-5">
          <a href="https://github.com/sleepyhaha/week-2-challenge">
            <img
              src="src/assets/original-portfolio.jpg"
              alt="Original portfolio"
              className="rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100 ease-in duration-150"
            />
            <div className="z-50 absolute right-10 bottom-10 border-4 p-2 bg-slate-300 rounded-lg scale-95 opacity-70 group-hover:scale-100 group-hover:opacity-100">
              <p>Original Portfolio</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
