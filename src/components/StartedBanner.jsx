import { Banner } from "flowbite-react";
import { FaBookOpen } from "react-icons/fa";
import { HiArrowRight, HiX } from "react-icons/hi";

export default function StartedBanner() {
  return (
    <Banner className="my-12 px-4">
      <div className="flex w-full flex-col justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 md:flex-row">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
            How to improve typing speed?
          </h2>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            Yes, for sure, there is nothing better than taking daily typing lessons. Repeating ten minutes typing practice will have a significant impact on your writing skills. TheTypingCat is made to reinforce continuous learning of how to type. We track your progress so you can see how your typing speed and accuracy increase over time. Regular activities are a critical factor in achieving professional typing skills.
          </p>
        </div>
        <div className="flex shrink-0 items-center">
          <a
            href="/typing-speed-test"
            className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            <FaBookOpen className="mr-2 h-4 w-4" />
            Learn more
          </a>
          <a
            href="/typing-speed-test"
            className="mr-2 inline-flex items-center justify-center rounded-lg bg-cyan-700 px-3 py-2 text-xs font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Get started
            <HiArrowRight className="ml-2 h-4 w-4" />
          </a>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </div>
    </Banner>
  )
}
