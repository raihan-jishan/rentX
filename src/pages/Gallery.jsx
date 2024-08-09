import { Heading, ModelCard } from "../components";

import { carModels } from "../constants";

const Gallery = () => {
  return (
    <section
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
      id="gallery"
    >
      <Heading text={"gallery"} />

      <div
        className="grid grid-cols-3   max-lg:grid-cols-1
            max-sm:flex-col   mt-20 "
      >
        {carModels.map((data, index) => {
          return (
            <ModelCard
              key={index}
              imageUrl={data.image}
              title={data.name}
              description={data.description}
              riderName={data.riderName}
              status={data.status ? data.status : "active"}
              source={data.source ? data.source : "rentalX"}
              data={data}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
