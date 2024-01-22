import Image from "next/image";

export default function Item({ icon, title }: any) {
  return (
    <div
      className="w-full lg:h-[85px] flex  text-center items-center justify-center px-5 border-[1px] border-gray-200 bg-white rounded-lg py-7"
      style={{ boxShadow: " 0px 4px 24px 0px rgba(0, 0, 0, 0.09)" }}
    >
      <Image src={icon} alt={title} width={23} height={23} className={"mr-3"} />
      <span className="text-md text-center">{title}</span>
    </div>
  );
}
