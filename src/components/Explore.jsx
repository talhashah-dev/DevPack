import { Computer, Mobile, Storage, Support, Deals } from "../assets/export";

const Explore = () => {
  const categories = [
    {
      icon: Computer,
      title: "PCs & Laptops",
    },
    {
      icon: Mobile,
      title: "Mobiles",
    },
    {
      icon: Storage,
      title: "Storage",
    },
    {
      icon: Support,
      title: "Deals",
    },
    {
        icon: Deals,
        title: "Support",
    },
  ];
  return (
    <div className="mt-10 flex items-center justify-between flex-wrap gap-y-3">
      {categories.map((value, index) => {
        return (
            <div key={index} className="rounded-full h-28 w-26 w-28 p-5 flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300">
                <img src={value.icon} alt={value.title} className="h-8" />
                <p className="text-center">{value.title}</p>
            </div>
        );
      })}
    </div>
  );
};

export default Explore;
