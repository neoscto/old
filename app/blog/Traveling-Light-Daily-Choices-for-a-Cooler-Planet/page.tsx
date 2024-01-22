import Image from "next/image";

export default function page() {
  return (
    <div className=" w-full">
      <Image
        src={"/blogs/bike.jpeg"}
        alt="asdf"
        width={1000}
        height={500}
        className="w-full z-[1] h-auto pt-20 lg:pt-0"
      />

      <div className="max-w-screen-lg relative py-20 mx-5 lg:mx-auto rounded-xl bg-white shadow-xl lg:-mt-96 z-50 px-4 md:px-6 lg:px-12 flex flex-col gap-4 mb-20">
        <h1 className="text-3xl mb-10 font-bold text-center">Traveling Light: Daily Choices for a Cooler Planet</h1>
        <p>
          Travel is an integral part of our lives, whether it's the daily
          commute, business trips, or dream vacations. However, the way we
          travel has a profound impact on the environment and contributes
          significantly to global climate change. Fortunately, by making
          thoughtful choices and adopting sustainable practices, we can minimize
          our carbon footprint, even while on the go.
        </p>
        <h2 className="mt-10 font-semibold text-xl">The Carbon Footprint of Travel</h2>
        <p>
          Before delving into how we can make sustainable travel choices, it's
          crucial to understand the impact of our current habits. The
          transportation sector accounts for approximately 14% of global
          greenhouse gas emissions, with road transportation being the primary
          contributor.
        </p>
        <h2 className="mt-10 font-semibold text-xl">Ways to Reduce Your Travel Carbon Footprint</h2>
        <h3>1. Embrace Public Transport</h3>
        <p>
          Using public transportation such as buses, trains, and subways can
          significantly reduce individual carbon emissions compared to private
          vehicles. Moreover, as cities continue to upgrade their public
          transport systems to be more eco-friendly, opting for them can become
          an even more sustainable choice.
        </p>
        <h3>2. Consider Carpooling or Ridesharing</h3>
        <p>
          Sharing rides with others reduces the number of vehicles on the road,
          leading to fewer emissions and less traffic congestion. Services like
          carpooling platforms and ridesharing apps make it convenient to find
          and share rides.
        </p>
        <h3>3. Walk or Cycle for Short Distances</h3>
        <p>
          For shorter distances, consider walking or cycling. Not only do these
          options emit zero carbon, but they're also great for your health and
          often save money. Many cities are now promoting bike-sharing programs
          and improving infrastructure to make cycling more accessible.
        </p>
        <h3>4. Choose Direct Flights</h3>
        <p>
          While flying is often unavoidable, especially for long distances,
          opting for direct flights can reduce the carbon emissions associated
          with takeoffs and landings. Additionally, packing light can slightly
          reduce the weight of the aircraft, leading to minimal fuel savings.
        </p>
        <h3>5. Rent Electric or Hybrid Vehicles</h3>
        <p>
          When renting a car, look for electric or hybrid options. These
          vehicles emit significantly less CO2 and can be more fuel-efficient,
          saving money in the long run.
        </p>
        <h3>6. Stay In Eco-Friendly Accommodations</h3>
        <p>
          Many hotels and lodgings are now adopting eco-friendly practices. By
          choosing such accommodations, you support businesses that prioritize
          sustainability.
        </p>
        <h3>7. Limit Use of Air Conditioning and Heating</h3>
        <p>
          While traveling, be mindful of using air conditioning and heating
          sparingly, as these consume energy and contribute to your carbon
          footprint.
        </p>
        <h2 className="mt-10 font-semibold text-xl">Developing Sustainable Travel Habits</h2>
        <p>
          Building a sustainable travel habit involves a combination of
          awareness, planning, and action. Start small, be consistent, and
          remember that every effort counts.
        </p>
        <ul>
          <li>
            <strong>Plan Ahead:</strong> Research your destinations and
            available transportation options to make eco-friendly choices.
          </li>
          <li>
            <strong>Stay Educated:</strong> The world of sustainable travel is
            continually evolving. Stay updated with the latest technologies and
            practices.
          </li>
          <li>
            <strong>Offset Your Carbon Emissions:</strong> If you must fly or
            drive, consider carbon offset programs that fund projects aimed at
            reducing or capturing CO2.
          </li>
          <li>
            <strong>Advocate for Change:</strong> Encourage friends, family, and
            colleagues to adopt sustainable travel habits and support policies
            that promote eco-friendly transportation.
          </li>
        </ul>
        <p>
          In conclusion, while our love for travel and exploration is innate,
          it's essential to adapt to the changing climate (literally) and make
          choices that benefit our planet. After all, to continue enjoying the
          beauty of our world, we must actively play a part in preserving it.
        </p>

      </div>
    </div>
  );
}
