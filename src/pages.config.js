/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import Blog from './pages/Blog';
import BlogAdmin from './pages/BlogAdmin';
import BlogEditor from './pages/BlogEditor';
import BlogPost from './pages/BlogPost';
import ContactAdmin from './pages/ContactAdmin';
import ContactUs from './pages/ContactUs';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import HumanAssist from './pages/HumanAssist';
import HumanAssistCopy from './pages/HumanAssistCopy';
import HumanCulture from './pages/HumanCulture';
import HumanCultureCopy from './pages/HumanCultureCopy';
import HumanDesign from './pages/HumanDesign';
import HumanDesignCopy2 from './pages/HumanDesignCopy2';
import HumanInsight from './pages/HumanInsight';
import NewsletterAdmin from './pages/NewsletterAdmin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ResetPassword from './pages/ResetPassword';
import Services from './pages/Services';
import TermsOfService from './pages/TermsOfService';
import UserManagement from './pages/UserManagement';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AdminDashboard": AdminDashboard,
    "AdminLogin": AdminLogin,
    "Blog": Blog,
    "BlogAdmin": BlogAdmin,
    "BlogEditor": BlogEditor,
    "BlogPost": BlogPost,
    "ContactAdmin": ContactAdmin,
    "ContactUs": ContactUs,
    "ForgotPassword": ForgotPassword,
    "Home": Home,
    "HumanAssist": HumanAssist,
    "HumanAssistCopy": HumanAssistCopy,
    "HumanCulture": HumanCulture,
    "HumanCultureCopy": HumanCultureCopy,
    "HumanDesign": HumanDesign,
    "HumanDesignCopy2": HumanDesignCopy2,
    "HumanInsight": HumanInsight,
    "NewsletterAdmin": NewsletterAdmin,
    "PrivacyPolicy": PrivacyPolicy,
    "ResetPassword": ResetPassword,
    "Services": Services,
    "TermsOfService": TermsOfService,
    "UserManagement": UserManagement,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};