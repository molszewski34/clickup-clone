import { SvgIcons } from "./svgIcons";
import {
  FaCheck,
  FaListUl,
  FaPlus,
  FaRegCircleDot,
  FaRegHourglass,
} from "react-icons/fa6";
import {
  RiAttachmentLine,
  RiDashboardHorizontalLine,
  RiEmojiStickerLine,
} from "react-icons/ri";
import { HiMiniSignal, HiOutlineCalendar } from "react-icons/hi2";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosMore,
  IoIosPlay,
  IoMdClose,
} from "react-icons/io";
import {
  FiCheckSquare,
  FiColumns,
  FiPlusCircle,
  FiSearch,
} from "react-icons/fi";
import {
  LuCircleSlash,
  LuImage,
  LuSettings,
  LuTableProperties,
} from "react-icons/lu";
import {
  BsFillPeopleFill,
  BsLayoutTextSidebar,
  BsThreeDots,
} from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import {
  IoCalendarClearOutline,
  IoPeopleOutline,
  IoSearchOutline,
} from "react-icons/io5";
import {
  PiArrowLineDownRight,
  PiCalendarCheck,
  PiListPlus,
  PiMagicWandLight,
  PiSquaresFour,
  PiStarBold,
  PiTagBold,
} from "react-icons/pi";
import { AiOutlineClose, AiOutlineTeam } from "react-icons/ai";
import {
  HiOutlineArrowLeft,
  HiOutlineChartSquareBar,
  HiOutlineDocument,
  HiOutlineLogout,
  HiOutlineMinusCircle,
} from "react-icons/hi";
import { MdOutlineEmojiEmotions, MdOutlineStars } from "react-icons/md";
import {
  TbArrowsDoubleNeSw,
  TbFlag3,
  TbGridDots,
  TbSquareArrowUp,
  TbSwitch,
} from "react-icons/tb";
import { VscHome, VscLayoutCentered } from "react-icons/vsc";
import { GoCodeSquare, GoDotFill, GoMention, GoStop } from "react-icons/go";
import { CiImageOn, CiShare2, CiTrophy } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { LuListFilter, LuUsers2 } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiViewColumn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { ImArrowDownRight2 } from "react-icons/im";
import { GrEmptyCircle } from "react-icons/gr";

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
  ArrowUpIcon: IoIosArrowUp,
  SearchIcon: FiSearch,
  SettingsIcon: LuSettings,
  SidebarExpandIcon: BsLayoutTextSidebar,
  HomePageIndicatorIcon: FiHome,
  DotsIcon: HiOutlineDotsHorizontal,
  LayersIcon: FiLayers,
  CollapseIcon: SvgIcons.TwoDotsWithArc,
  ColumnsIcon: CiViewColumn,
  FilterIcon: LuListFilter,
  PersonIcon: GoPerson,
  UsersIcon: LuUsers2,
  CheckIcon: FaRegCheckCircle,
  CloseXIcon: CgClose,
  TeamIcon: AiOutlineTeam,
  Logout: HiOutlineLogout,
  IoIosMore: IoIosMore,
  Star: PiStarBold,
  LayoutCentered: VscLayoutCentered,
  Close: IoMdClose,
  CodeSquare: GoCodeSquare,
  PiArrowLineDownRight: PiArrowLineDownRight,
  FaRegCircleDot: FaRegCircleDot,
  CiImageOn: CiImageOn,
  CiShare2: CiShare2,

  // added new Icons
  AttachmentIcon: RiAttachmentLine,
  CalendarTopIcon: IoCalendarClearOutline,
  CalendarChackedIcon: PiCalendarCheck,
  CloseIcon: AiOutlineClose,
  ColumnIcon: FiColumns,
  DashboardTopIcon: HiOutlineChartSquareBar,
  EmotionIcon: MdOutlineEmojiEmotions,
  EmptyDocIcon: HiOutlineDocument,
  FlagIcon: TbFlag3,
  HouseIcon: VscHome,
  ListPlusIcon: PiListPlus,
  MagicWandIcon: PiMagicWandLight,
  MentionIcon: GoMention,
  MentionArrowIcon: TbSquareArrowUp,
  PeopleIcon: IoPeopleOutline,
  PlusIcon: FaPlus,
  PlusCircleIcon: FiPlusCircle,
  SearchTopIcon: IoSearchOutline,
  SignalIcon: HiMiniSignal,
  SlashCircleIcon: LuCircleSlash,
  TrophyIcon: CiTrophy,
  TableIcon: LuTableProperties,
  TagIcon: PiTagBold,
  ThreeDotsIcon: BsThreeDots,
  GridDotsIcon: TbGridDots,
  CheckCircleIcon: FaRegCheckCircle,
  Emoji: RiEmojiStickerLine,
  Check: FaCheck,
  ArrowLeft: HiOutlineArrowLeft,
  People: BsFillPeopleFill,
  ArrowHorizontal: ImArrowDownRight2,
  Switch: TbSwitch,
  ImageImg: LuImage,
  EmptyCircle: GrEmptyCircle,
  Play: IoIosPlay,
  Hourglass: FaRegHourglass,
  Relationship: TbArrowsDoubleNeSw,
  CircleStar: MdOutlineStars,
  ArrowForward: IoIosArrowForward,
  DotFill: GoDotFill,
  SquaresFour: PiSquaresFour,
  CheckboxOutline: FiCheckSquare,
  Blocked: HiOutlineMinusCircle,
  Stop: GoStop,

  // New icons SVG
  AiIcon: SvgIcons.Ai,
  AlarmIcon: SvgIcons.Alarm,
  AppsIcon: SvgIcons.Apps,
  CommentIcon: SvgIcons.Comment,
  CreateDocIcon: SvgIcons.CreateDoc,
  DocIcon: SvgIcons.Doc,
  DocMenuIcon: SvgIcons.DocMenu,
  DotIcon: SvgIcons.Dot,
  HomeIcon: SvgIcons.Home,
  InboxIcon: SvgIcons.Inbox,
  NotePadIcon: SvgIcons.NotePad,
  RingingIcon: SvgIcons.Ringing,
  SortIcon: SvgIcons.Sort,
  StopWatchIcon: SvgIcons.StopWatch,
  WhiteboardIcon: SvgIcons.Whiteboard,
  TabIcon: SvgIcons.Tab,
  NewTabIcon: SvgIcons.NewTab,
  EnterIcon: SvgIcons.Enter,
  AttachIcon: SvgIcons.Attach,
};
