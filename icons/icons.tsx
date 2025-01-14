import { SvgIcons } from "./svgIcons";
import { LuClipboardList } from "react-icons/lu";
import { FaCheck, FaListUl, FaPlus, FaRegCircleDot, FaRegHourglass } from "react-icons/fa6";
import {
  RiAttachmentLine,
  RiDashboardHorizontalLine,
  RiEmojiStickerLine,
  RiFlag2Fill,
  RiFlag2Line,
} from "react-icons/ri";
import { HiMiniSignal, HiOutlineCalendar, HiOutlineEnvelope } from "react-icons/hi2";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosMore,
  IoIosPlay,
  IoMdClose,
  IoMdCheckmark,
} from "react-icons/io";
import { FiCheckSquare, FiColumns, FiCopy, FiPlusCircle, FiSearch } from "react-icons/fi";
import {
  LuArchive,
  LuBox,
  LuCircleSlash,
  LuImage,
  LuSettings,
  LuTableProperties,
} from "react-icons/lu";
import {
  BsArrowsAngleExpand,
  BsFillPeopleFill,
  BsInfoCircle,
  BsLayoutTextSidebar,
  BsPersonPlus,
  BsThreeDots,
} from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import {
  IoCalendarClearOutline,
  IoCloudOutline,
  IoListOutline,
  IoPeopleOutline,
  IoSearchOutline,
  IoRadioButtonOn,
  IoCheckmarkCircle,
} from "react-icons/io5";
import {
  PiArrowLineDownRight,
  PiBell,
  PiCalendarCheck,
  PiListPlus,
  PiMagicWandLight,
  PiSquaresFour,
  PiStarBold,
  PiTagBold,
  PiWind,
} from "react-icons/pi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { AiOutlineClose, AiOutlineTeam } from "react-icons/ai";
import {
  HiOutlineArrowLeft,
  HiOutlineChartSquareBar,
  HiOutlineDocument,
  HiOutlineDocumentAdd,
  HiOutlineLogout,
  HiOutlineMinusCircle,
  HiOutlinePlus,
  HiOutlineStar,
} from "react-icons/hi";
import {
  MdOutlineEmojiEmotions,
  MdOutlineStars,
  MdOutlineWaterDrop,
  MdDoNotDisturbAlt,
} from "react-icons/md";
import {
  TbArrowsDoubleNeSw,
  TbFlag3,
  TbFolderPlus,
  TbFolderShare,
  TbGridDots,
  TbPlanet,
  TbSquareArrowUp,
  TbSwitch,
} from "react-icons/tb";
import { VscHome, VscLayoutCentered } from "react-icons/vsc";
import { GoCodeSquare, GoDotFill, GoMention, GoPencil, GoRepoForked, GoStop } from "react-icons/go";
import { CiHome, CiImageOn, CiShare2, CiTrophy } from "react-icons/ci";
import { FaRegCheckCircle, FaRegTrashAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { RiDraggable } from "react-icons/ri";
import { LuCalendarPlus } from "react-icons/lu";
import { CgFlagAlt } from "react-icons/cg";
import { MdOutlineModeComment } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import { FiLayers } from "react-icons/fi";
import { LuListFilter, LuUsers2 } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiViewColumn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { ImArrowDownRight2 } from "react-icons/im";
import { GrEmptyCircle } from "react-icons/gr";
import { TiMediaPlay } from "react-icons/ti";
import { BiBuildings, BiHide, BiImport } from "react-icons/bi";

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
  IoMdArrowDropdown: IoMdArrowDropdown,
  IoMdArrowDropright: IoMdArrowDropright,
  RiDraggable: RiDraggable,
  LuCalendarPlus: LuCalendarPlus,
  CgFlagAlt: CgFlagAlt,
  MdOutlineModeComment: MdOutlineModeComment,
  PiDotsThreeBold: PiDotsThreeBold,
  HiOutlineUserAdd: HiOutlineUserAdd,
  IoMdCloseCircle: IoMdCloseCircle,
  RiFlag2Fill,
  RiFlag2Line,
  IoMdCheckmark,
  MdDoNotDisturbAlt,
  IoRadioButtonOn,
  IoCheckmarkCircle,

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
  ListOutline: IoListOutline,
  PlayWorkspace: TiMediaPlay,
  Pencil: GoPencil,
  Drop: MdOutlineWaterDrop,
  PlusNew: HiOutlinePlus,
  StarNew: HiOutlineStar,
  Hide: BiHide,
  Copy: FiCopy,
  WindArrow: PiWind,
  Info: BsInfoCircle,
  Box: LuBox,
  Envelope: HiOutlineEnvelope,
  Archive: LuArchive,
  Trash: FaRegTrashAlt,
  DocAdd: HiOutlineDocumentAdd,
  From: LuClipboardList,
  FolderPlus: TbFolderPlus,
  FolderShare: TbFolderShare,
  Import: BiImport,
  House: CiHome,
  FullScreen: BsArrowsAngleExpand,
  Forked: GoRepoForked,
  TbPlanet: TbPlanet,
  BiBuildings: BiBuildings,
  PiBell: PiBell,
  Cloud: IoCloudOutline,
  PersonPlus: BsPersonPlus,

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
