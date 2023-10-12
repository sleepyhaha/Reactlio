export default function Home() {
  return (
    <div className="h-1/2 flex items-baseline">
      <div className=" w-1/3 flex flex-col">
        <h1 className="text-5xl float-left ml-10 mt-5">About me:</h1>
        <img src="src\assets\me2.jpg" alt="just me" className="ml-10 mt-5" />
      </div>
      <p className="float-right w-2/3 mx-5">
        Hello there! I am Sam and I am an aspiring software dev. Currently
        learning a full-stack course. Welcome to my portfolio where I showcase
        some of the projects I've been working on during the course.
        <br />
        plz enjoy
      </p>
    </div>
  );
}
