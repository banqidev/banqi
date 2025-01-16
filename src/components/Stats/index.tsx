import statsData from "@/components/Stats/statsData";

const ITStatistics = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="grid grid-cols-1 gap-y-6 gap-x-4 justify-center rounded-sm bg-gray-light px-4 py-6 dark:bg-gray-dark sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {statsData.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center text-center"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl">
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300 sm:text-base">
                    {stat.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleStat = ({ stat }: { stat: { name: string; value: string } }) => {
  const { name, value } = stat;

  return (
    <div className="flex flex-col items-center justify-center w-1/2 px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <h3 className="text-3xl font-extrabold text-black dark:text-white">{value}</h3>
      <p className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">{name}</p>
    </div>
  );
};

export default ITStatistics;
