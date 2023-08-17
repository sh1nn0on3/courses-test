const Slider = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full mb-5 border-gray-900 border-solid border-1 rounded-sm"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=1060&t=st=1686646689~exp=1686647289~hmac=25343863a8905ba6b8b05754ca29ca6217cdfe1bff2f8646e791f887eb289335"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://img.freepik.com/free-photo/peak-bamboo-lijiang-rural-mist_1417-410.jpg?w=996&t=st=1686646749~exp=1686647349~hmac=8c950ca120b8de8be74afc6437d45530520d89088da0222f94d4d375d81d178a"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://img.freepik.com/free-photo/flat-lay-hands-holding-photos_23-2149617657.jpg?w=996&t=st=1686646780~exp=1686647380~hmac=6d676947876e410536c5659d87489f6c772d041dee7f4e9d19e78ccda51aba89"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://img.freepik.com/free-photo/travel-discovering-places-with-love-ones_23-2149065020.jpg?w=996&t=st=1686646800~exp=1686647400~hmac=c0fc8c237b4137451407078c6cd434655baa61bc2b2796bfba47eb6eddce9589"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://img.freepik.com/free-photo/view-hands-holding-smartphone_23-2149617638.jpg?w=996&t=st=1686646814~exp=1686647414~hmac=2efb0070873518b653c6f63927e886c736906c03ef695e55f52c926611c5aa0b"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
