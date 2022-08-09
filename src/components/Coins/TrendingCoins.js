import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrendingCoins,
  getTrendingCoins,
} from "../../features/coins/trendingSlice";

function TrendingCoins() {
  const dispatch = useDispatch();

  const allCoinsTrendingToSlice = useSelector(getTrendingCoins);
  const allCoinsTrending = allCoinsTrendingToSlice.slice(0, 6);
  useEffect(() => {
    dispatch(fetchTrendingCoins());
  }, [dispatch]);

  return (
    <>
      <div className="pt-14 pb-3 px-10 sm:px-5">
        <h2 className="text-2xl font-extrabold">TRENDING</h2>
        <div className="mt-6 grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-5 lg:grid-cols-7 xl:gap-x-8">
          {allCoinsTrending.map((item) => (
            <div
              key={item.id}
              className="group relative grid justify-center items-center"
            >
              <div className="w-14 sm:w-24 lg:w-full min-h-60 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-20 lg:aspect-square">
                <img
                  src={item.large}
                  alt={item.large}
                  className="w-full h-full border-2 border-black object-center object-cover lg:w-full lg:h-full"
                />
              </div>

              <div className="mt-4">
                <h3 className="">
                  <a href={item.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </a>
                </h3>

                <div>
                  <span className="text-xs mr-1">Rank</span>
                  <span className="text-xs bg-yellow-400 text-black ">
                    {item.market_cap_rank}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingCoins;
