import Image from "next/image";
import Header from "./component/Header/header";
import pictire from "../../public/image/1.jpeg";




export default function Home() {
  return (
    
   <div className ='h-screen'>
    <Header/>
    <div className = "flex h-[80%]"> 

  <div className="w-1/2 flex flex-col justify-center items-start m-12 ">
    <h1 className="font-[Rye] font-bold text-[40px] w-[496px] leading-tight">
      <b>IMPECCABLE CRAFTSMANSHIP AND FINESSE</b>
    </h1>
    <p className="text-[30px] w-[902px]  font-[Libre Bodoni] font-[300] text-[#787054]  me-80  space-y-3 mt-9 mb-9">
      An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
    </p>
    <button className=" bg-[#A29875] w-[247.67px] h-[49.2px] t-[710.32px] p-[8.6px] r-[8.6px] rounded text-white font-[Rye] font-medium text-2xl"
>Explore Now</button>
    </div>

  <div className="w-1/2 flex justify-center item-center">
  <div className="flex-shrink-0 border border-white border-solid ml-18 w-[380px] h-[525.43px]rounded-[128.99px] ">
    <Image 
      src={pictire} 
      alt="this is prc" 
      width={490} 
      height={667} 
      className="w-[421.38px] h-[573.59px] rounded-br-[107px] rounded-tl-[107px] object-cover"
    />
  </div>
</div>
</div>

    </div> 
  );
}
