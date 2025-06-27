import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../App.css";
import emailjs from "@emailjs/browser";
import ThankYouModal from "./ThankYouModal";

const PACKAGE_TABS = [
  { label: "Website", key: "website" },
  { label: "Logo", key: "logo" },
  { label: "Branding", key: "branding" },
  { label: "Ecommerce", key: "ecommerce" },
  { label: "SEO", key: "SEO" },
  { label: "Animation", key: "Animation" },
  { label: "Print", key: "Print" },
  { label: "WebPortal", key: "WebPortal" },
  { label: "SMM", key: "SMM" },
];

const PACKAGES = {
  website: [
    {
      name: "Beginner Website",
      now: "$199",
      was: "$796",
      features: [
        "3 Page Website",
        "3 Banner Design",
        "5 Stock Images",
        "1 jQuery Slider Banner",
        "Contact/Query Form",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "Complete Deployment",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
      ],
    },
    {
      name: "Startup Website",
      now: "$449",
      was: "$1796",
      features: [
        "5 Page Website",
        "5 Banner Design",
        "8 Stock Images",
        "1 jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
        "CMS will be Additional $250*",
      ],
    },
    {
      name: "Professional Website",
      now: "$999",
      was: "$3996",
      features: [
        "8 to 10 Unique Pages Website",
        "CMS / Admin Panel Support",
        "Online Booking Tool",
        "8 Stock images",
        "8 Banner Designs",
        "1 jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "Complete Deployment",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
        "Mobile Responsive will be Additional $200",
      ],
    },
    {
      name: "Corporate Website",
      now: "$1599",
      was: "$6396",
      features: [
        "15 to 20 Pages Website",
        "Custom Made, Interactive, Dynamic & High End Design",
        "Custom WP (or) Custom PHP Development",
        "1 jQuery Slider Banner",
        "Up to 10 Custom Made Banner Designs",
        "10 Stock Images",
        "Unlimited Revisions",
        "Special Hoover Effects",
        "Content Management System (CMS)",
        "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Multi Lingual (Optional)",
        "Custom Dynamic Forms (Optional)",
        "Signup Area (For Newsletters, Offers etc.)",
        "Search Bar",
        "Live Feeds of Social Networks integration (Optional)",
        "Mobile Responsive",
        "Free Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete W3C Certified HTML",
        "Industry Specified Team of Expert Designers and Developers",
        "Complete Deployment",
        "Dedicated Accounts Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
      ],
    },
    {
      name: "Business Website",
      now: "$2699",
      was: "$10796",
      features: [
        "15 Seconds 2D Explainer Video",
        "Voice - Over & Sound Effects",
        "Professional Script Writing",
        "Storyboard",
        "SEO Meta Tags",
        "15 to 20 Pages Website",
        "Custom Made, Interactive, Dynamic & High End Design",
        "Custom WP (or) Custom PHP Development",
        "1 jQuery Slider Banner",
        "Up to 10 Custom Made Banner Designs",
        "10 Stock Images",
        "Unlimited Revisions",
        "Special Hoover Effects",
        "Content Management System (CMS)",
        "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Multi Lingual (Optional)",
        "Custom Dynamic Forms (Optional)",
        "Signup Area (For Newsletters, Offers etc.)",
        "Search Bar",
        "Live Feeds of Social Networks integration (Optional)",
        "Mobile Responsive",
        "Free Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete W3C Certified HTML",
        "Industry Specified Team of Expert Designers and Developers",
        "Complete Deployment",
        "Dedicated Accounts Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
      ],
    },
    {
      name: "Corporate Web Portal",
      now: "$4999",
      was: "$19996",
      features: [
        "Unlimited Website Pages",
        "Custom Content Management System (CMS)",
        "Unique UI / UX Design",
        "Conceptual & Dynamic Website",
        "News Feed Integration",
        "Social Media Plugin Integration",
        "Complete Custom Development",
        "Upto 40 Stock Images",
        "10 Unique Banner Designs",
        "Voice - Over & Sound Effects",
        "Professional Script Writing",
        "Storyboard",
        "SEO Meta Tags",
        "Custom Made, Interactive, Dynamic & High End Design",
        "Custom WP (or) Custom PHP Development",
        "1 jQuery Slider Banner",
        "Unlimited Revisions",
        "Special Hoover Effects",
        "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Multi Lingual (Optional)",
        "Custom Dynamic Forms (Optional)",
        "Signup Area (For Newsletters, Offers etc.)",
        "Search Bar",
        "Live Feeds of Social Networks integration (Optional)",
        "Mobile Responsive",
        "Free Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete W3C Certified HTML",
        "Industry Specified Team of Expert Designers and Developers",
        "Complete Deployment",
        "Dedicated Accounts Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
  ],
  logo: [
    {
      name: "Logo Special",
      now: "$35",
      was: "$117",
      features: [
        "4 Original Logo Concepts",
        "2 Dedicated Logo Designer",
        "4 Revisions",
        "With Grey Scale Format",
        "Free Icon Design",
        "Formats: JPEG Only",
        "24 - 48 Business Hours Turn Around Time",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
      ],
    },
    {
      name: "Logo Plus",
      now: "$199",
      was: "$397",
      features: [
        "12 Original Logo Concepts",
        "4 Dedicated Logo Designer (Industry Specific)",
        "Unlimited Revisions",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Email Signature Design",
        "With Grey Scale Format",
        "Free Icon Design",
        "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
        "24 - 48 Business Hours Turn Around Time",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
        "24/7 Support (Email, Chat, Call, SMS, Whatsapp)",
      ],
    },
    {
      name: "Logo Platinum",
      now: "$399",
      was: "$997",
      features: [
        "Unlimited Original Logo Concepts",
        "8 Dedicated Logo Designer (Industry Specific)",
        "Unlimited Revisions",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "500 Business Cards",
        "Email Signature Design",
        "With Grey Scale Format",
        "Free Icon Design",
        "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
        "24 - 48 Business Hours Turn Around Time",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
      ],
    },
    {
      name: "Logo Infinite",
      now: "$999",
      was: "$3330",
      features: [
        "Unlimited Original Logo Concepts",
        "12 Dedicated Logo Designer (Industry Specific)",
        "Unlimited Revisions",
        "5 Page Informative Website",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Brand Book",
        "500 Business Cards",
        "Email Signature Design",
        "Social Media Designs (Facebook, Twitter, Instagram)",
        "2 Sided Flyer OR Bi-Fold Brochure Design",
        "With Grey Scale Format",
        "Free Icon Design",
        "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
        "24 - 48 Business Hours Turn Around Time",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
      ],
    },
    {
      name: "Mascot Logo",
      now: "$599",
      was: "$1996.7",
      features: [
        "2 Mascot Logo Concepts",
        "Unlimited Revisions",
        "Hand drawn Sketch",
        "Presentation on mockup",
        "24 - 48 Business Hours Turn Around Time",
        "File Formats: Ai, Eps, Png, Jpeg, pdf",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
      ],
    },
    {
      name: "3D Logo",
      now: "$349",
      was: "",
      features: [
        "3 Unique 3D Logo Concepts",
        "Light Effects and VFX",
        "Fully Rendered",
        "Multiple 3D Angles",
        "3 Dedicated Designers",
        "72 Business Hours Turn Around Time",
        "UNLIMITED Revisions",
        "MORE FEATURES",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
      ],
    },
  ],
  branding: [
    {
      name: "Branding Startup",
      now: "$499",
      was: "$3333",
      features: [
        "Logo Design",
        "6 Unique Logo Concepts",
        "FREE Icon",
        "FREE Grayscale Copy",
        "Unlimited Revisions",
        "100% Ownership Right",
        "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
        "Print Media",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Website Design",
        "5 Pages Custom Business Website",
        "Complete Deployment",
      ],
    },
    {
      name: "Branding Plus",
      now: "$999",
      was: "$1663",
      features: [
        "Logo Design",
        "12 Unique Logo Concepts",
        "FREE Icon",
        "FREE Grayscale Copy",
        "Unlimited Revisions",
        "100% Ownership Right",
        "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
        "Print Material",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design / Label Design",
        "Website Design",
        "Custom 5 Pages Professional Website",
        "Content Management System (WordPress)",
        "Responsive Design (Mobile Compatible)",
        "Complete Deployment",
        "Social Media Design",
        "Facebook Fanpage Splash Page + Cover Photo",
      ],
    },
    {
      name: "Branding Classic",
      now: "$1499",
      was: "$4993",
      features: [
        "Logo Design",
        "12 Unique Logo Concepts",
        "FREE Icon",
        "FREE Grayscale Copy",
        "Unlimited Revisions",
        "100% Ownership Right",
        "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
        "Print Material",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Any Product of your Choice: Bi-fold/Tri-fold Brochure / Menu Card / Corporate Profile",
        "Website Design",
        "10+ Page Website",
        "Content Management System (WordPress/Joomla)",
        "Complete Deployment",
        "Search Engine Submission",
        "Google, Bing, Yahoo and More",
        "Social Media Design",
        "Facebook Fanpage Splash Page + Cover Photo",
        "Twitter Background Design",
        "Google+ Profile Banner",
      ],
    },
    {
      name: "Branding Ultimate",
      now: "$1999",
      was: "$6663",
      features: [
        "Logo Design",
        "Infinite Unique Logo Concepts",
        "FREE Icon",
        "FREE Grayscale Copy",
        "Unlimited Revisions",
        "100% Ownership Right",
        "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
        "Print Material",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "500 Business Cards, Letterhead, Envelop Prints",
        "Any Product of your Choice: Bi-fold/Tri-fold Brochure / Menu Card / Corporate Profile",
        "Website Design",
        "10+ Page Website",
        "Content Management System (WordPress/Joomla)",
        "Responsive Design (Mobile Compatible)",
        "Complete Deployment",
        "Social Media Design",
        "Facebook Fanpage Splash Page + Cover Photo",
        "Twitter Background Design",
        "Google+ Profile Banner",
        "Complete Storyboard, VoiceOver & Animation",
      ],
    },
  ],
  ecommerce: [
    {
      name: "E-Commerce Professional",
      now: "$750",
      was: "$3000",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Theme Based Design",
        "7 Banner Designs",
        "Sliding Banner",
        "7 Stock Photos",
        "Unlimited Revisions",
        "Hover Effects",
        "Up to 50 Products",
        "Up to 5 Categories",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Wishlist",
        "Social Media Pages Integration",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "– Value Added Services -",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "E-Commerce Elite",
      now: "$1230",
      was: "$4920",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, Unique Design",
        "10 Banner Designs",
        "Sliding Banner",
        "10 Stock Photos",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Up to 200 Products",
        "Up to 10 Categories",
        "Product Reviews & Ratings",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Wishlist",
        "Social Media Pages Integration",
        "Blog page (If Required)",
        "Sitemap",
        "Complete W3C Validation",
        "Complete Deployment",
        "– Value Added Services -",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "E-Commerce Identity",
      now: "$1650",
      was: "$6600",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, Interactive, Dynamic, Unique Design",
        "User-friendly Navigation",
        "15 Banner Designs",
        "Sliding Banner",
        "15 Stock Photos",
        "48 to 72 hours TAT",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "500 Products",
        "Upto 20 Categories",
        "Product Reviews & Ratings",
        "Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date",
        "Product Detail with Similar Product Range",
        "Product Comparison",
        "Discounted Products Showcase",
        "New Arrival Products Showcase",
        "Discount Coupons",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Wishlist",
        "Bulk Product Upload From Excel Sheet",
        "Export order into excel sheet",
        "Social Media Pages Integration",
        "Blog page (If Required)",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "– Value Added Services -",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "E-Commerce Corporate",
      now: "$3650",
      was: "$14600",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, Interactive, Dynamic, Unique Design",
        "User-friendly Navigation",
        "20 Banner Designs",
        "Sliding Banner",
        "20 Stock Photos",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "1000 Products",
        "Unlimited Categories",
        "Product Reviews & Ratings",
        "Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date",
        "Product Rating",
        "Product Detail with Similar Product Range",
        "Product Comparison",
        "Discounted Products Showcase",
        "New Arrival Products Showcase",
        "Discount Coupons",
        "Easy Product Search Bar",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Wishlist",
        "Bulk Product Upload From Excel Sheet",
        "Export order into excel sheet",
        "Social Media Pages Integration",
        "Facebook Shop Setup",
        "Blog page (If Required)",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "– Value Added Services -",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "InteractiveE-Commerce Business",
      now: "$6999",
      was: "$27996",
      features: [
        "Unlimited Website Pages",
        "Conceptual & Dynamic Website",
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, Interactive, Dynamic, Unique Design",
        "User-friendly Navigation",
        "30 Banner Designs",
        "Sliding Banner",
        "30 Stock Photos",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Unlimited Products",
        "Unlimited Categories",
        "Product Reviews & Ratings",
        "Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date",
        "Product Rating",
        "Product Detail with Similar Product Range",
        "Product Comparison",
        "Discounted Products Showcase",
        "New Arrival Products Showcase",
        "Discount Coupons",
        "Easy Product Search Bar",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Wishlist",
        "Bulk Product Upload From Excel Sheet",
        "Export order into excel sheet",
        "Social Media Pages Integration",
        "Facebook Shop Setup",
        "Blog page (If Required)",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "– Value Added Services -",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "InteractiveE-Commerce Business",
      now: "$14999",
      was: "$59996",
      features: [
        "1 Year Hosting",
        "1 Year Domain (Upto $1000 Value)",
        "1 Year SEO",
        "Unlimited Website Pages",
        "Conceptual & Dynamic Website",
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, Interactive, Dynamic, Unique Design",
        "User-friendly Navigation",
        "Unlimited Banner Designs",
        "Sliding Banner",
        "Unlimited Stock Photos",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Unlimited Products",
        "Unlimited Categories",
        "Product Reviews & Ratings",
        "Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date",
        "Product Rating",
        "Product Detail with Similar Product Range",
        "Product Comparison",
        "Discounted Products Showcase",
        "New Arrival Products Showcase",
        "Discount Coupons",
        "Easy Product Search Bar",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign up Checkout",
        "Wishlist",
        "Bulk Product Upload From Excel Sheet",
        "Export order into excel sheet",
        "Social Media Pages Integration",
        "Facebook Shop Setup",
        "Blog page (If Required)",
        "Sitemap",
        "Complete W3C Validation",
        "Dedicated Team of Designers and Developers",
        "Complete Deployment",
        "– Value Added Services -",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
  ],
  SEO: [
    {
      name: "Basic",
      now: "$299",
      was: "$599",
      features: [
        "10 Keywords Optimization",
        "4 Keywords in top 10",
        "Search Engine Submissions",
        "2 Blogs Writing",
        "4 Blog Posting Links",
        "10 Blogs Social Bookmarking Links",
        "1 Press Release Writing",
        "2 Press Release Links",
      ],
    },
    {
      name: "Standard",
      now: "$499",
      was: "$1399",
      features: [
        "25 Keywords Optimization",
        "10 Keywords in Top 10",
        "Search Engine Submissions",
        "6 Blogs Writing",
        "12 Blog Posting Links",
        "20 Blogs Social Bookmarking Links",
        "2 Press Release Writing",
        "4 Press Release Links",
      ],
    },
    {
      name: "Professional",
      now: "$799",
      was: "$1599",
      features: [
        "50 Keywords Optimization",
        "20 Keywords in Top 10",
        "14 Blogs Writing",
        "28 Blog Posting Links",
        "30 Blogs Social Bookmarking Links",
        "4 Press Release Writing",
        "8 Press Release Links",
        "4 Guest Blogging Links",
      ],
    },
    {
      name: "Enterprise",
      now: "$1499",
      was: "$2999",
      features: [
        "100 Keywords Optimization",
        "40 Keywords in Top 10",
        "30 Blogs Writing",
        "60 Blog Posting Links",
        "40 Blogs Social Bookmarking Links",
        "8 Press Release Writing",
        "8 Press Release Links",
        "8 Guest Blogging Links",
      ],
    },
  ],
  Animation: [
    {
      name: "Teaser",
      now: "$499",
      was: "$1000",
      features: [
        "30sec Duration",
        "Script Writing",
        "Custom Artwork",
        "Background Music",
        "HD Format Video",
        "Dedicated Support",
        "100% Ownership Rights",
        "100% Money-back Guarantee",
      ],
    },
    {
      name: "Startup",
      now: "$799",
      was: "$1650",
      features: [
        "30sec Duration",
        "Script Writing",
        "Professional Voice-over & SFX",
        "Hand-drawn Illustrations",
        "Unlimited Revisions",
        "HD Format Video",
        "Dedicated Support",
        "100% Ownership Rights",
        "100% Money-back Guarantee",
      ],
    },
    {
      name: "Classic",
      now: "$999",
      was: "$2500",
      features: [
        "30sec Duration",
        "Script Writing",
        "Professional Voice-over & SFX",
        "Custom 2D Characters",
        "Unlimited Revisions",
        "HD Format Video",
        "Dedicated Support",
        "100% Ownership Rights",
        "100% Money-back Guarantee",
      ],
    },
    {
      name: "3D Video",
      now: "$3999",
      was: "$5500",
      features: [
        "2 3D Object Models",
        "Unlimited Storyboard Revisions",
        "Professional Voice - Over",
        "Background Music",
        "Exotic Animations",
        "HD Video Format",
        "6 Weeks Delivery Time",
        "100% Ownership Rights",
        "100% Money-back Guarantee",
      ],
    },
  ],
  Print: [
    {
      name: "Basic",
      now: "$249",
      was: "$430",
      features: [
        "Print Media Design",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design/Postcard (any one)",
        "Printing Service",
        "500 x Business Card Prints OR 250 x Flyer Prints",
        "Multiple File Format (Ai, PNG, JPEG, etc)",
        "Turn around time 24 - 48 Hours",
        "100% Satisfaction Guaranteed*",
        "Add on: $30 for 24 - 48 Hours Rush Delivery",
      ],
    },
    {
      name: "Plus",
      now: "$499",
      was: "$1663",
      features: [
        "Print Media Design",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design/Postcard/Menu Card (any one)",
        "Printing Service",
        "500 x Business Card Prints",
        "500 x Letterhead Prints",
        "500 x Envelop Prints",
        "100 x Flyer Prints",
        "Add on: $60 for 24 - 48 Hours Rush Delivery",
      ],
    },
    {
      name: "Classic",
      now: "$1299",
      was: "$4330",
      features: [
        "Print Media Design",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design/Postcard/Menu Card (any one)",
        "Brochure/Product Packaging Design (any one)",
        "Apparel Design (T-Shirt, Cap, Bumper Sticker)",
        "Printing Service",
        "1000 Prints Each (Business Card, Letterhead, Envelope)",
        "250 x Flyer/Brochure/Menu Card Prints",
        "50 x T-Shirt Prints",
        "Turn around time 24 - 48 Hours",
        "Multiple Files Format Ai, PSD, Png, Jpeg Etc",
        "100% Satisfaction Guaranteed*",
        "Add on: $90 for 24 - 48 Hours Rush Delivery",
      ],
    },
  ],
  WebPortal: [
    {
      name: "Startup Web Portal",
      now: "$4999",
      was: "$16663",
      features: [
        "Web portal Startup",
        "Dating Portal",
        "Job Portal",
        "Professional Network",
        "Social Network",
        "Real Estate Portal",
        "Medical Portal",
        "News Portal",
        "Enterprise Portal",
        "Custom Coding",
        "Module-wise Architecture",
        "Extensive Admin Panel",
        "Complete Deployment",
        "100% Custom Designs – No Templates",
        "Free 12 month Hosting & Domain Registration",
      ],
    },
    {
      name: "Plus",
      now: "$7999",
      was: "$26663",
      features: [
        // Logo Design
        "12 Unique Logo Concepts",
        "Unlimited Revisions",
        "100% Ownership Right",
        "AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats",
        // Print Material
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design",
        "Email Signature",
        // Comprehensive Web Portal (any one of your choice*)",
        "Comprehensive Web Portal (any one of your choice*)",
        "  * Dating Portal",
        "  * Job Portal",
        "  * Professional Network",
        "  * Social Network",
        "  * Media Portal (Photos/Videos)",
        "  * Real Estate Portal",
        "  * Medical Portal",
        "  * News Portal",
        "  * Enterprise Portal",
        "100% Custom Designs – No Templates",
        "Custom Coding",
        "Module-wise Architecture",
        "Extensive Admin Panel",
        "Complete Deployment",
        // Search Engine Optimization
        "3 Months SEO Plan",
        "10 Keywords",
        "Top Ranking on Google",
        // Social Media Design
        "Facebook Fanpage Splash Page + Cover Photo",
        "Twitter Background Design",
        "Google+ Profile Banner",
        // Explainer Video
        "30 Second HD Explainer Video",
        "Complete Storyboard, VoiceOver & Animation",
        // Value-added Services
        "Discounted Price",
        "Dedicated Account Manager",
        "Satisfaction Guarantee",
        "30-days Moneyback Guarantee",
        "Free 12 month Hosting & Domain Registration",
      ],
    },
  ],
  SMM: [
    {
      name: "Bronze - Monthly",
      now: "$397",
      was: "$794",
      features: [
        "Optimize FB Page",
        "1 Social Cover",
        "Engagement",
        "Reviews",
        "Check-ins",
        "Posts",
        "3 Posts per Week",
        "1 Facebook Event",
        "Monthly Reporting",
        "Ad spend - Up to $50",
        "Module-wise Architecture",
        "Extensive Admin Panel",
        "Complete Deployment",
        "100% Custom Designs – No Templates",
        "Free 12 month Hosting & Domain Registration",
      ],
    },
    {
      name: "Silver - Monthly",
      now: "$1194",
      was: "$26663",
      features: [
        "Optimize FB Page",
        "1 Social Cover",
        "Engagement",
        "Reviews",
        "Check-ins",
        "Posts",
        "Shares",
        "Mentions",
        "Invite to Like",
        "Inbox Responses",
        "4 Posts per Week",
        "2 Facebook Events",
        "Monthly Reporting",
        "Ad Spend - Up to $65",
      ],
    },
    {
      name: "Gold - Monthly",
      now: "$997",
      was: "$1994",
      features: [
        "Optimize FB Page",
        "1 Social Cover",
        "Engagement",
        "Reviews",
        "Check-ins",
        "Posts",
        "Shares",
        "Mentions",
        "Invite to Like",
        "Inbox Responses",
        "2 Facebook Events",
        "5 Posts per Week",
        "1 Lead Generation Campaign",
        "Monthly Reporting",
        "Ad Spend - Up to $120",
      ],
    },
    {
      name: "Platinum - Monthly",
      now: "$1497",
      was: "$2994",
      features: [
        "Optimize FB Page",
        "1 Social Cover + Holiday Covers",
        "Engagement",
        "Reviews",
        "Check-ins",
        "Posts",
        "Shares",
        "Mentions",
        "Invite to Like",
        "Inbox Responses",
        "6 Posts per Week",
        "2 Facebook Events",
        "1 Lead Generation Campaign",
        "Monthly Reporting",
        "Ad Spend - Up to $170",
      ],
    },
  ],
};

const OurPackage = () => {
  const [activePackageTab, setActivePackageTab] = useState("website");
  const [showFormModal, setShowFormModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const handleOrderNow = () => {
    setShowFormModal(true);
  };

  const handleFormClose = () => {
    setShowFormModal(false);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_meniodp", // Replace with your EmailJS service ID
        "template_a1hkfvq", // Replace with your EmailJS template ID
        formRef.current,
        "UYoaxcSkke-Lmw0Zi" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          formRef.current.reset();
          setIsSending(false);
          setShowFormModal(false);
          setShowThankYou(true);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          formRef.current.reset();
          setIsSending(false);
        }
      );
  };

  return (
    <motion.section
      className="packages-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="about-dot-row"
        style={{ justifyContent: "center", marginBottom: "1rem" }}
        variants={itemVariants}
      >
        <span className="about-dot"></span>
        <span className="about-label">Our Packages</span>
      </motion.div>
      <motion.h2 className="packages-title" variants={itemVariants}>
        Smart Solutions. Seamlessly Packaged.
      </motion.h2>
      <motion.div
        className="packages-tabs"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {PACKAGE_TABS.map((tab) => (
          <motion.button
            key={tab.key}
            className={`packages-tab${
              activePackageTab === tab.key ? " active" : ""
            }`}
            onClick={() => setActivePackageTab(tab.key)}
            variants={tabVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {tab.label}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        className="packages-list container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {PACKAGES[activePackageTab].map((pkg, idx) => (
          <motion.div
            className="package-card"
            key={pkg.name + idx}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="package-header">
              <span className="package-name">{pkg.name}</span>
              <div className="package-prices">
                <span className="package-now">{pkg.now}</span>
                <span className="package-was">{pkg.was}</span>
              </div>
            </div>
            <div className="package-features-scroll">
              <ul className="package-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <motion.button
              className="order-now-btn"
              onClick={handleOrderNow}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Order Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
      {/* Order Form Modal */}
      {showFormModal && (
        <motion.div
          className="order-modal-overlay"
          onClick={handleFormClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="order-modal-content"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <button className="order-modal-close" onClick={handleFormClose}>
              ×
            </button>
            <motion.h1
              className="form_heading"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Order Package
            </motion.h1>
            <motion.p
              className="form_subheading"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Fill the form to get started
            </motion.p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="order-modal-form"
            >
              <input type="text" placeholder="Name" name="user_name" required />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="number"
                placeholder="Phone No"
                name="user_phone"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSending ? "Sending..." : "Order Now"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
      <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
    </motion.section>
  );
};

export default OurPackage;
