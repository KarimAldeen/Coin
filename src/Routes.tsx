import { ReactNode, lazy } from "react";

// Icons Import 

import { Home } from "react-feather";
import { AiFillQuestionCircle, AiFillStar} from "react-icons/ai"
import {FaUserFriends , FaUser, FaHome, FaSadCry, FaProductHunt } from "react-icons/fa"
import { MdOutlineCategory, MdPrivacyTip } from "react-icons/md";
import {DiDatabase} from "react-icons/di"
import { FiMail } from "react-icons/fi";
import {CgUnavailable} from "react-icons/cg"
import {BsCode, BsInfoCircle} from "react-icons/bs"
import {AiOutlineTransaction ,AiFillSetting ,AiFillGift} from "react-icons/ai"
import { IoIosNotificationsOutline, IoIosPaper, } from "react-icons/io";
import { BiCategory, BiLockAlt } from "react-icons/bi";
import { RiCouponFill } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";
import { BsPersonFillAdd } from "react-icons/bs";

// Pages Import

import HomePage from "./Pages/Home/HomePage";
import PrivacyPage from "./Pages/Informaition/Privacy/PrivacyPage";
import AboutUsPage from "./Pages/Informaition/AboutUs/AboutUsPage";
import SocialMediaPage from "./Pages/SocialMedia/SocialMediaPage";
import CategoryPage from "./Pages/category/CategoryPage";
import AdsPage from "./Pages/ads/AdsPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import ViewProduct from "./Pages/Products/View/Page";


interface RoutesLinksType {
    name?: string,
    href?: string,
    element?: ReactNode,
    icon?: any,
    Viewelement?: ReactNode,
    Viewhref?: string
    children?: any
    // Hidden the route from the navigation sidebar
    hidden?: boolean
}
export const RoutesLinks: RoutesLinksType[] = [

    {
        name: "Home",
        element: <HomePage />,
        icon: <FaHome />,
        href: "/",
    },
    {
        name: "Ads",
        
        icon: <FiMail size={20} />,
        href: "/ads",
        element: <AdsPage/>,
    },
    {
        name: "Products",
        
        icon: <FaProductHunt size={20} />,
        href: "/products",
        element: <ProductsPage/>,
    },
     {
        name: "ViewProduct",
        icon: <FaProductHunt size={20} />,
        href: "/products/:id",
        element: <ViewProduct/>,
        hidden : true,
    },
    
    {
        name: "category",
        
        icon: <MdOutlineCategory  size={20} />,
        href: "/category",
        element: <CategoryPage/>,
    },
    {
        name: "social_media",
        
        icon: <FiMail size={20} />,
        href: "/SocialMedia",
        element: <SocialMediaPage/>,
    },
    
    {
        name: "information",
        icon: <BsInfoCircle size={20} />,
        element: <></>,
        children :[
        {
        name: "privacy",
        icon: <MdPrivacyTip size={20} />,
        href: "/Information/privacy",
        element: <PrivacyPage/>
        },
        {
        name: "about_us",
        icon: <AiFillQuestionCircle size={20} />,
        href: "/Information/AboutUs",
        element: <AboutUsPage />
        },
      ],
    },
]