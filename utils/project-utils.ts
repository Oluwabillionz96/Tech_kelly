import { Film, Palette, Sparkles } from "lucide-react";

export const categoryConfig = {
  graphics: {
    title: "Graphics",
    icon: Palette,
    color: "emerald",
    description:
      "Visual identity, brand design, and stunning graphics for social media and marketing campaigns.",
    projects: [
      {
        id: 1,
        title: "DxSale Visual Identity",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        tags: ["Branding", "Logo Design", "Visual Identity"],
      },
      {
        id: 2,
        title: "Cutoshi Brand Visuals",
        image:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
        tags: ["Social Media", "Graphics", "Marketing"],
      },
      {
        id: 3,
        title: "Social Media Graphics Pack",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        tags: ["Social Media", "Templates", "Brand Assets"],
      },
      {
        id: 4,
        title: "Web3 Marketing Visuals",
        image:
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800",
        tags: ["Web3", "Marketing", "Digital Art"],
      },
      {
        id: 5,
        title: "Event Promotional Graphics",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
        tags: ["Events", "Promotions", "Design"],
      },
      {
        id: 6,
        title: "Infographic Designs",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["Infographics", "Data Viz", "Education"],
      },
    ],
  },
  "video-edits": {
    title: "Content & Video Edits",
    icon: Film,
    color: "blue",
    description:
      "Professional video editing, content curation, and high-retention video production for various platforms.",
    projects: [
      {
        id: 1,
        title: "DxSale YouTube Series",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
        tags: ["YouTube", "Content", "Editing"],
      },
      {
        id: 2,
        title: "Educational Web3 Series",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
        tags: ["Education", "Web3", "Tutorial"],
      },
      {
        id: 3,
        title: "Promotional Campaign Videos",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster:
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
        tags: ["Marketing", "Promo", "Commercial"],
      },
      {
        id: 4,
        title: "Social Media Shorts",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster:
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800",
        tags: ["Shorts", "Social Media", "Viral"],
      },
    ],
  },
  "video-animations": {
    title: "Video Animations",
    icon: Sparkles,
    color: "purple",
    description:
      "High-end 2D & 3D animations, motion graphics, and cinematic teasers for product launches.",
    projects: [
      {
        id: 1,
        title: "DxSale Launch Teaser",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster:
          "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
        tags: ["3D Animation", "Launch", "Cinematic"],
      },
      {
        id: 2,
        title: "Roburrna Animation Series",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster:
          "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        tags: ["Motion Graphics", "Promo", "Partnership"],
      },
      {
        id: 3,
        title: "Explainer Animation",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        tags: ["2D Animation", "Explainer", "Education"],
      },
      {
        id: 4,
        title: "Logo Animation Pack",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        tags: ["Logo Animation", "Branding", "Motion"],
      },
      {
        id: 5,
        title: "Product Showcase Animation",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster:
          "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
        tags: ["3D", "Product", "Visualization"],
      },
      {
        id: 6,
        title: "Social Media Motion Graphics",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=800",
        tags: ["Motion Graphics", "Social", "Animated"],
      },
    ],
  },
};

export const getColorClasses = (currentCategory: { color: string }) => {
  switch (currentCategory.color) {
    case "emerald":
      return {
        bg: "bg-emerald-500/10",
        text: "text-emerald-500",
        hover: "hover:text-emerald-500",
      };
    case "blue":
      return {
        bg: "bg-blue-500/10",
        text: "text-blue-500",
        hover: "hover:text-blue-500",
      };
    case "purple":
      return {
        bg: "bg-purple-500/10",
        text: "text-purple-500",
        hover: "hover:text-purple-500",
      };
    default:
      return {
        bg: "bg-emerald-500/10",
        text: "text-emerald-500",
        hover: "hover:text-emerald-500",
      };
  }
};
