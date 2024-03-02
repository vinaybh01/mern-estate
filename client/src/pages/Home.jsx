import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingItems from "../components/ListingItems";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      <div className="relative">
        <img
          src="https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/10618/files/2021/12/HP-c57aa7f5540255d530afb43a83dfdab3f2998fde-scaled.jpg"
          alt=""
          className="mb-4"
        />
        <div className="absolute top-[120px] md:top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-['Roboto']">
          <Link to={"/search"}>
            <p className="font-semibold sm:font-bold mb-1 sm:mb-4 text-lg sm:text-5xl text-[#A40D2C]">
              Search. See. Love.
            </p>
            <p className="text-xs sm:text-xl text-[#02174A] font-normal sm:font-semibold w-[300px] sm:w-[550px]">
              Your new home is just a virtual tour away. Browse all homes on the
              market today and connect safely with a landlord.
            </p>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-1 sm:mx-auto p-[10px] sm:p-3 flex flex-col gap-8 my-1 sm:my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-2 sm:my-5 flex justify-between ">
              <h2 className="text-base sm:text-2xl  font-semibold text-slate-600">
                Our Featured Listings
              </h2>
              <Link className="" to={"/search?offer=true"}>
                <button className="text-white sm:w-[128px] sm:h-[38px] w-[100px] h-[28px] sm:text-base text-xs font-semibold bg-[#A40D2C] p-1.5  border border-[#A40D2C] hover:text-[#A40D2C] uppercase hover:bg-white">
                  Show More {">"}
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((list) => (
                <ListingItems list={list} key={list._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-2 sm:my-5 flex justify-between">
              <h2 className="text-base sm:text-2xl  font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                <button className="text-white sm:w-[128px] sm:h-[38px] w-[100px] h-[28px] sm:text-base text-xs font-semibold bg-[#A40D2C] p-1.5  border border-[#A40D2C] hover:text-[#A40D2C] uppercase hover:bg-white">
                  Show More {">"}
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((list) => (
                <ListingItems list={list} key={list._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-2 sm:my-5 flex justify-between">
              <h2 className="text-base sm:text-2xl  font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                <button className="text-white sm:w-[128px] sm:h-[38px] w-[100px] h-[28px] sm:text-base text-xs font-semibold bg-[#A40D2C] p-1.5  border border-[#A40D2C] hover:text-[#A40D2C] uppercase hover:bg-white">
                  Show More {">"}
                </button>{" "}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((list) => (
                <ListingItems list={list} key={list._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
