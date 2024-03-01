import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItems({ list }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden  w-full sm:w-[300px] border border-gray-400 hover:bg-[#E8EFFD]">
      <Link to={`/listing/${list._id}`}>
        <img
          src={list.imageUrls[0]}
          alt="list cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <p className="truncate text-[12px] sm:text-[15px] py-0.5 text-center text-white bg-[#02174A] box-border">
          {list.name}
        </p>
        <div className="p-3 flex flex-col gap-2 w-full ">
          <p className="text-black text-[18px] sm:text-[23px] mt-2 font-semibold ">
            $
            {list.offer
              ? (list.regularPrice - list.discountPrice).toLocaleString("en-US")
              : list.regularPrice.toLocaleString("en-US")}
            {list.type === "rent" && " / month"}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm font-semibold text-gray-800 truncate w-full">
              {list.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {list.description}
          </p>
          <div className="text-slate-700 flex gap-4 p-2">
            <div className="font-bold text-xs">
              {list.bedrooms > 1
                ? `${list.bedrooms} BEDS `
                : `${list.bedrooms} BED `}
            </div>
            <div className="font-bold text-xs">
              {list.bathrooms > 1
                ? `${list.bathrooms} BATHS `
                : `${list.bathrooms} BATH `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
