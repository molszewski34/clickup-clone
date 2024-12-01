import { SvgIcons } from "./svgIcons";
import { FaListUl, FaPlus } from "react-icons/fa6";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { HiOutlineCalendar } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch, FiLayers } from "react-icons/fi";
import { LuSettings, LuListFilter, LuUsers2 } from "react-icons/lu";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiViewColumn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export const Icons = {
  ListUlicon: FaListUl,
  CalendarIcon: HiOutlineCalendar,
  DashboardIcon: RiDashboardHorizontalLine,
  BoardIcon: SvgIcons.Board,
  TeableIcon: SvgIcons.Table,
  GantIcon: SvgIcons.HorizontalChart,
  PlusIco: FaPlus,
  SliderHorizontal: SvgIcons.SlidersHorizontal,
  ArrowDownIcon: IoIosArrowDown,
  SearchIcon: FiSearch,
  SettingsIcon: LuSettings,
  SidebarExpandIcon: BsLayoutTextSidebar,
  HomePageIndicatorIcon: FiHome,
  DotsIcon: HiOutlineDotsHorizontal,
  LayersIcon: FiLayers,
  CollapseIcon: SvgIcons.TwoDotsWithArc,
  ColumnIcon: CiViewColumn,
  FilterIcon: LuListFilter,
  PersonIcon: GoPerson,
  UsersIcon: LuUsers2,
  CheckIcon: FaRegCheckCircle,
  CloseIcon: CgClose,
};
