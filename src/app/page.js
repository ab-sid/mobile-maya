import Homepage from "@/components/Homepage/Homepage";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <>
      <div className="bg-[#F2F3F5] pb-4">
        <Homepage></Homepage>
      </div>
      <div className="bg-[#F2F3F5]">
        <NewsLetter></NewsLetter>
      </div>
    </>
  );
}
