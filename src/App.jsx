import { useState } from "react"
import "./App.css"
const monthNames = [
  { title: "Jan", link: "/" },
  { title: "Feb", link: "/february" },
  { title: "Mar", link: "/march" },
  { title: "Apr", link: "/april" },
  { title: "May", link: "/may" },
  { title: "Jun", link: "/june" },
  { title: "Jul", link: "/july" },
  { title: "Aug", link: "/august" },
]

const ReminderData = [
  {
    ReminderTitle: "World Environment Day",
    desc: "Lorem ipsum, or lipsum as it is dummy text used in laying out print, graphic or web designs.",
    ReminderImg: "/Images/Reminder/Image1.png",
    ReminderDate: "June 4",
    ReminderLink: "/",
  },
  {
    ReminderTitle: "Father's Day",
    desc: "Lorem ipsum, or lipsum as it is dummy text used in laying out print, graphic or web designs.",
    ReminderImg: "/Images/Reminder/Image2.png",
    ReminderDate: "June 12",
    ReminderLink: "/",
  },
  {
    ReminderTitle: "Father's Day",
    desc: "Lorem ipsum, or lipsum as it is dummy text used in laying out print, graphic or web designs.",
    ReminderImg: "/Images/Reminder/Image2.png",
    ReminderDate: "June 12",
    ReminderLink: "/",
  },
  {
    ReminderTitle: "Father's Day",
    desc: "Lorem ipsum, or lipsum as it is dummy text used in laying out print, graphic or web designs.",
    ReminderImg: "/Images/Reminder/Image2.png",
    ReminderDate: "June 12",
    ReminderLink: "/",
  },
  {
    ReminderTitle: "Father's Day",
    desc: "Lorem ipsum, or lipsum as it is dummy text used in laying out print, graphic or web designs.",
    ReminderImg: "/Images/Reminder/Image2.png",
    ReminderDate: "June 12",
    ReminderLink: "/",
  },
  {
    ReminderTitle: "Father's Day",
    desc: "Lorem ipsum, or lipsum as it is dummy text used in laying out print, graphic or web designs.",
    ReminderImg: "/Images/Reminder/Image2.png",
    ReminderDate: "June 12",
    ReminderLink: "/",
  },
]

function App() {
  const [monthActive, setMonthActive] = useState(4)
  return (
    <div className="flex-1 overflow-hidden">
      <div className="">
        <div className="flex gap-8 px-6  py-12">
          {monthNames.map((value, index) => (
            <div
              onClick={() => setMonthActive(index)}
              className={`border-2 cursor-pointer px-8 rounded-md text-center  border-[rgba(248,192,0,1)] ${
                monthActive === index ? "bg-[rgba(248,192,0,1)]" : ""
              }`}
            >
              <h3 className="not-italic font-medium text-xl leading-[29px] text-black">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="px-4 py-4">
          {ReminderData.map((value, index) => (
            <div className="bg-white mb-4 shadow-xl px-6 py-6 rounded-2xl">
              <div className="max-w-sm px-4 w-full lg:max-w-full lg:flex">
                <div className=" flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  <img
                    className="w-[160px] h-[160px] object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    alt=""
                  />
                </div>
                <div className=" lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="not-italic font-semibold text-xl leading-6 text-black mb-2">
                      World Environment Day
                    </div>
                    <p className="not-italic font-normal text-xs leading-[15px] text-black">
                      Lorem ipsum, or lipsum as it is dummy text used in laying
                      out print, graphic or web designs.
                    </p>
                  </div>
                  <button className="flex not-italic font-medium text-xl leading-6 text-black justify-between items-center">
                    <h4>June 5</h4>
                    <div className="bg-[rgba(248,192,0,1)] p-1 rounded-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="flex items-center justify-center py-8 px-4">
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
            <div className="max-w-sm w-full  ">
              <div className="md:p-8 p-5 !text-black bg-white rounded-t">
                <div className="px-4 flex items-center justify-between">
                  <span
                    tabIndex={0}
                    className="focus:outline-none  text-base font-bold  text-gray-800"
                  >
                    October 2020
                  </span>
                  <div className="flex items-center">
                    <button
                      aria-label="calendar backward"
                      className="focus:text-gray-400 hover:text-gray-400 text-gray-800 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-left"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                    </button>
                    <button
                      aria-label="calendar forward"
                      className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler  icon-tabler-chevron-right"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-12 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th>
                          <div className="w-full flex justify-center">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Mo
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="w-full flex justify-center">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Tu
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="w-full flex justify-center">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              We
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="w-full flex justify-center">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Th
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="w-full flex justify-center">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Fr
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="w-full flex justify-center">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Sa
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="w-full flex justify-center">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Su
                            </p>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pt-6">
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                        </td>
                        <td className="pt-6">
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                        </td>
                        <td className="pt-6">
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              1
                            </p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              2
                            </p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500 ">3</p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500 ">4</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              5
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              6
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              7
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <a
                                role="link"
                                tabIndex={0}
                                className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                              >
                                8
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              9
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500 ">10</p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500 ">11</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              12
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              13
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              14
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              15
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              16
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500 ">17</p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500 ">18</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              19
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              20
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              21
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              22
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              23
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500 ">24</p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500 ">25</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              26
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              27
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              28
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              29
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-500  font-medium">
                              30
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
