("");
import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);

  return [
    {
      items: [
        {
          title: "Dashboard",
          href: defaultDashboard,
          icon: "LayoutDashboard",
          roles: ["TRAVELER", "SUPER_ADMIN", "ADMIN"],
        },
        {
          title: "My Profile",
          href: `/my-profile`,
          icon: "User",
          roles: ["TRAVELER", "SUPER_ADMIN", "ADMIN"],
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Change Password",
          href: "/change-password",
          icon: "Settings", // ✅ String
          roles: ["TRAVELER"],
        },
      ],
    },
  ];
};

export const travelerNavItems: NavSection[] = [
  {
    title: "Subscription",
    items: [
      {
        title: "My Subscription",
        href: "/dashboard/my-subscription",
        icon: "Subscription", // ✅ String
        roles: ["TRAVELER"],
      },
      {
        title: "My Travel Plans",
        href: "/dashboard/my-travelPlans",
        icon: "ClipboardList", // ✅ String
        roles: ["TRAVELER"],
      },
    ],
  },
  {
    title: "Medical Records",
    items: [
      {
        title: "My Prescriptions",
        href: "/dashboard/my-prescriptions",
        icon: "FileText", // ✅ String
        roles: ["TRAVELER"],
      },
      {
        title: "Health Records",
        href: "/dashboard/health-records",
        icon: "Activity", // ✅ String
        roles: ["TRAVELER"],
      },
    ],
  },
];

export const adminNavItems: NavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Admins",
        href: "/admin/dashboard/admins-management",
        icon: "Shield", // ✅ String
        roles: ["ADMIN"],
      },

      {
        title: "Travelers",
        href: "/admin/dashboard/travelers-management",
        icon: "Users", // ✅ String
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Product Management",
    items: [
      {
        title: "Travel Plans",
        href: "/admin/dashboard/travel-plans",
        icon: "Calendar", // ✅ String
        roles: ["ADMIN"],
      },
      {
        title: "Schedules",
        href: "/admin/dashboard/schedules-management",
        icon: "Clock", // ✅ String
        roles: ["ADMIN"],
      },
      {
        title: "Subscription Plan",
        href: "/admin/dashboard/subscriptionPlans-management",
        icon: "Hospital", // ✅ String
        roles: ["ADMIN"],
      },
    ],
  },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const commonNavItems = getCommonNavItems(role);

  switch (role) {
    case "SUPER_ADMIN":
      return [...commonNavItems, ...adminNavItems];
    case "ADMIN":
      return [...commonNavItems, ...adminNavItems];
    case "TRAVELER":
      return [...commonNavItems, ...travelerNavItems];
    default:
      return [];
  }
};
