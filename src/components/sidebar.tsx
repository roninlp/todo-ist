import { AiOutlineInbox, AiOutlineFilter } from "react-icons/ai";
import { BsCalendar2Date, BsThreeDots } from "react-icons/bs";
import { SlCalender, SlGrid, SlDrawer, SlEvent } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-[calc(100vh-3.5rem)] w-60 bg-gray-200">
        <ul className="mt-8 ml-4 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <SlDrawer className="text-blue-500" />
            <span className="text-sm text-gray-900">Inbox</span>
          </li>
          <li className="flex items-center gap-2">
            <SlEvent className="text-green-600" />
            <span className="text-sm text-gray-900">Today</span>
          </li>
          <li className="flex items-center gap-2">
            <SlCalender className="text-purple-600" />
            <span className="text-sm text-gray-900">Upcoming</span>
          </li>
          <li className="flex items-center gap-2">
            <SlGrid className="text-orange-600" />
            <span className="text-sm text-gray-900">Filters & Labels</span>
          </li>
        </ul>
        <div className="mt-4">
          <h4 className=" ml-3">Projects</h4>
          <div className="ml-5 mt-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <p className="text-sm">Personal</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <p className="text-sm">Shopping</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <p className="text-sm">Work</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-500"></div>
              <p className="text-sm">Errands</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
              <p className="text-sm">Movies to watch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
