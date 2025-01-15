import statsData from "@/components/Stats/statsData";

const ITStatistics = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {statsData.map((stat) => (
                <SingleStat key={stat.id} stat={stat} />
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
