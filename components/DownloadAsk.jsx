export default function DownloadAsk() {
  return (
    <section id="download-boxes">
      {/* <!-- Boxes Container --> */}
      <div
        ClassName="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row"
      >
        {/* <!-- Box 1 --> */}
        <div
          ClassName="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"
        >
          {/* <!-- Image --> */}
          <div ClassName="flex justify-center">
            <img src="images/logo-chrome.svg" alt="" />
          </div>
          {/* <!-- Text --> */}
          <h5 ClassName="pt-6 text-xl font-bold">Add to Chrome</h5>
          <p ClassName="text-gray-400">Minimum Version 62</p>

          {/* <!-- Dots --> */}
          <div ClassName="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="#"
              ClassName="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
              >Add & Install Extension</a
            >
          </div>
        </div>

        {/* <!-- Box 2 --> */}
        <div ClassName="w-full md:w-1/3">
          <div
            ClassName="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"
          >
            {/* <!-- Image --> */}
            <div ClassName="flex justify-center">
              <img src="images/logo-firefox.svg" alt="" />
            </div>
            {/* <!-- Text --> */}
            <h5 ClassName="pt-6 text-xl font-bold">Add to Firefox</h5>
            <p ClassName="text-gray-400">Minimum Version 55</p>

            {/* <!-- Dots --> */}
            <div ClassName="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                ClassName="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >Add & Install Extension</a
              >
            </div>
          </div>
        </div>

        {/* <!-- Box 3 --> */}
        <div ClassName="w-full md:w-1/3">
          <div
            ClassName="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16"
          >
            {/* <!-- Image --> */}
            <div ClassName="flex justify-center">
              <img src="images/logo-opera.svg" alt="" />
            </div>
            {/* <!-- Text --> */}
            <h5 ClassName="pt-6 text-xl font-bold">Add to Opera</h5>
            <p ClassName="text-gray-400">Minimum Version 46</p>

            {/* <!-- Dots --> */}
            <div ClassName="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                ClassName="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >Add & Install Extension</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}