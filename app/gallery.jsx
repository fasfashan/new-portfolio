import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div className="grid md:grid-cols-4 xl:grid-cols-3 gap-5 mt-20 mb-20">
        <div className=" p-8 bg-bright ">
          <Image
            className="m-auto hover:scale-95 transition-all"
            alt="Saham Apps"
            width="340"
            height="340"
            src="/saham.png"
          />
        </div>
        <div className=" p-8 bg-gleam  ">
          <Image
            alt="Staycation Web App"
            className="shadow-xl hover:scale-95 transition-all m-auto rounded-lg"
            width="340"
            height="340"
            src="/StaycationWeb.jpg"
          />
        </div>
        <div className=" p-8 bg-bright  flex items-center  ">
          <Image
            alt="ProWork"
            className="shadow-xl hover:scale-95 transition-all rounded-lg m-auto"
            width="340"
            height="340"
            src="/ProWork.jpg"
          />
        </div>
        <div className=" p-8  bg-gleam flex items-center ">
          <Image
            className="rounded-lg hover:scale-95 transition-all m-auto shadow-xl"
            alt="Dashboard"
            width="340"
            height="340"
            src="/Dashboard.jpg"
          />
        </div>
        <div className=" p-8 bg-bright flex ">
          <Image
            className="rounded hover:scale-95 transition-all m-auto shadow-xl"
            alt="BCA"
            width="340"
            height="340"
            src="/BCA.jpg"
          />
        </div>
        <div className=" p-8 bg-gleam flex ">
          <Image
            className="rounded hover:scale-95 transition-all m-auto shadow-xl"
            alt="Fashion Login"
            width="340"
            height="340"
            src="/Fashion Login.jpg"
          />
        </div>
      </div>
    </>
  );
}
