import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-10 md:py-16 lg:py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form Section */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-10 rounded-sm bg-white p-6 shadow-md dark:bg-gray-dark sm:p-8 md:p-10 lg:p-12"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-3xl">
                Ai nevoie de ajutor? Deschide un Ticket
              </h2>
              <p className="mb-6 text-base sm:text-lg font-medium text-body-color">
                Echipa noastră de suport te va contacta cât mai curând prin e-mail.
              </p>

              <div className=" text-base sm:text-lg font-semibold text-black dark:text-white">
                <div className="mb-3">
                  Email: <a href="mailto:banqi.dev@gmail.com"
                            className="text-body-color hover:underline">banqi.dev@gmail.com</a>
                </div>
                <div>
                  Telefon: <a href="tel:+37367633265" className="text-body-color hover:underline">+373 67 633 265</a>
                </div>
              </div>

              <div className="w-full flex justify-center my-12">
                <div className="w-full border-t border-gray-600"></div>
              </div>

              <form>
                <div className="flex flex-wrap -mx-2">
                  {/* Name Input */}
                  <div className="w-full px-2 sm:w-1/2">
                    <div className="mb-4">
                      <label className="mb-2 block text-base font-medium text-dark dark:text-white">
                        Numele tău
                      </label>
                      <input
                        type="text"
                        placeholder="Introdu numele tău"
                        className="w-full rounded-sm border border-gray-300 bg-gray-100 px-4 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="w-full px-2 sm:w-1/2">
                    <div className="mb-4">
                      <label className="mb-2 block text-base font-medium text-dark dark:text-white">
                        Email-ul tău
                      </label>
                      <input
                        type="email"
                        placeholder="Introdu email-ul tău"
                        className="w-full rounded-sm border border-gray-300 bg-gray-100 px-4 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="w-full px-2">
                    <div className="mb-4">
                      <label className="mb-2 block text-base font-medium text-dark dark:text-white">
                        Mesajul tău
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Introdu mesajul tău"
                        className="w-full resize-none rounded-sm border border-gray-300 bg-gray-100 px-4 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-sm"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-2">
                    <button
                      className="w-full rounded-sm bg-primary px-6 py-4 text-base font-medium text-white shadow-md transition duration-300 hover:bg-primary/90 dark:shadow-md"
                    >
                      Trimite Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter Box Section */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

// @ts-ignore
export default Contact;
