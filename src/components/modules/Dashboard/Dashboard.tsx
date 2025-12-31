"use client";

import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Users,
  Shield,
  DollarSign,
  Map,
  Plane,
  MessageSquare,
} from "lucide-react";

interface MetaData {
  travelerCount: number;
  adminCount: number;
  subscriberCount: number;
  travelPlanCount: number;
  tripCount: number;
  buddyRequestCount: number;
  subscriptionPlanDistribution: {
    planId: string;
    planName: string;
    color: string;
    count: number;
  }[];
  barChartData: {
    month: string;
    count: number;
  }[];
  pieChartData: {
    status: string;
    count: number;
  }[];
}

interface DashboardProps {
  metaData: MetaData;
}

const Dashboard: React.FC<DashboardProps> = ({ metaData }) => {
  const statCards = [
    {
      icon: Users,
      label: "Total Travelers",
      value: metaData.travelerCount,
      color: "oklch(61.422% 0.10271 203.354)",
    },
    {
      icon: Shield,
      label: "Admins",
      value: metaData.adminCount,
      color: "oklch(78.613% 0.16327 76.949)",
    },
    {
      icon: DollarSign,
      label: "Active Subscribers",
      value: metaData.subscriberCount,
      color: "oklch(0.646 0.222 41.116)",
    },
    {
      icon: Map,
      label: "Travel Plans",
      value: metaData.travelPlanCount,
      color: "oklch(0.6 0.118 184.704)",
    },
    {
      icon: Plane,
      label: "Total Trips",
      value: metaData.tripCount,
      color: "oklch(0.828 0.189 84.429)",
    },
    {
      icon: MessageSquare,
      label: "Buddy Requests",
      value: metaData.buddyRequestCount,
      color: "oklch(0.769 0.188 70.08)",
    },
  ];

  // Format month for bar chart
  const formattedBarChartData = metaData.barChartData.map((item) => ({
    month: new Date(item.month).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }),
    count: item.count,
  }));

  // Colors for pie chart
  const pieColors: { [key: string]: string } = {
    COMPLETED: "oklch(0.646 0.222 41.116)",
    ACTIVE: "oklch(0.6 0.118 184.704)",
    PENDING: "oklch(0.828 0.189 84.429)",
    CANCELLED: "oklch(0.577 0.245 27.325)",
  };

  const formattedPieData = metaData.pieChartData.map((item) => ({
    ...item,
    color: pieColors[item.status] || "oklch(0.556 0 0)",
  }));

  // Calculate total subscribers for percentage
  const totalSubscribers = metaData.subscriptionPlanDistribution.reduce(
    (sum, plan) => sum + plan.count,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "oklch(1 0 0)",
        padding: "2rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "oklch(37.678% 0.02564 228.44/1)",
              marginBottom: "0.5rem",
            }}
          >
            Dashboard Overview
          </h1>
          <p style={{ color: "oklch(0.556 0 0)", fontSize: "0.95rem" }}>
            Welcome back! Here's what's happening with your travel community.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                style={{
                  background: "oklch(1 0 0)",
                  border: "1px solid oklch(0.922 0 0)",
                  borderRadius: "0.625rem",
                  padding: "1.5rem",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = stat.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(0,0,0,0.05)";
                  e.currentTarget.style.borderColor = "oklch(0.922 0 0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "oklch(0.556 0 0)",
                        fontSize: "0.875rem",
                        marginBottom: "0.5rem",
                        fontWeight: "500",
                      }}
                    >
                      {stat.label}
                    </p>
                    <h3
                      style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        color: "oklch(37.678% 0.02564 228.44/1)",
                        margin: 0,
                      }}
                    >
                      {stat.value}
                    </h3>
                  </div>
                  <div
                    style={{
                      background: stat.color,
                      borderRadius: "0.5rem",
                      padding: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={24} color="white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Bar Chart */}
          <div
            style={{
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0.922 0 0)",
              borderRadius: "0.625rem",
              padding: "1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              minWidth: 0,
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1rem, 3vw, 1.25rem)",
                fontWeight: "600",
                color: "oklch(37.678% 0.02564 228.44/1)",
                marginBottom: "1rem",
              }}
            >
              Travel Plans Created
            </h3>
            <div
              style={{
                width: "100%",
                height: "clamp(250px, 40vw, 350px)",
                minHeight: "250px",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={formattedBarChartData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="oklch(0.922 0 0)"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="oklch(0.556 0 0)"
                    style={{ fontSize: "clamp(0.7rem, 2vw, 0.875rem)" }}
                    tickMargin={8}
                  />
                  <YAxis
                    stroke="oklch(0.556 0 0)"
                    style={{ fontSize: "clamp(0.7rem, 2vw, 0.875rem)" }}
                    tickMargin={8}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(1 0 0)",
                      border: "1px solid oklch(0.922 0 0)",
                      borderRadius: "0.5rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                    }}
                  />
                  <Bar
                    dataKey="count"
                    fill="oklch(61.422% 0.10271 203.354)"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={80}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div
            style={{
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0.922 0 0)",
              borderRadius: "0.625rem",
              padding: "1rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              minWidth: 0,
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1rem, 3vw, 1.25rem)",
                fontWeight: "600",
                color: "oklch(37.678% 0.02564 228.44/1)",
                marginBottom: "1rem",
              }}
            >
              Trip Status Distribution
            </h3>
            <div
              style={{
                width: "100%",
                height: "clamp(250px, 40vw, 350px)",
                minHeight: "250px",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={formattedPieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry: any) => {
                      // Hide labels on very small screens
                      if (window.innerWidth < 640) {
                        return "";
                      }
                      return `${entry.status}: ${entry.count}`;
                    }}
                    outerRadius="70%"
                    fill="#8884d8"
                    dataKey="count"
                    nameKey="status"
                  >
                    {formattedPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "oklch(1 0 0)",
                      border: "1px solid oklch(0.922 0 0)",
                      borderRadius: "0.5rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}
                    iconSize={12}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div
          style={{
            background: "oklch(1 0 0)",
            border: "1px solid oklch(0.922 0 0)",
            borderRadius: "0.625rem",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "oklch(37.678% 0.02564 228.44/1)",
              marginBottom: "1.5rem",
            }}
          >
            Subscription Plan Distribution
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
            }}
          >
            {metaData.subscriptionPlanDistribution.map((plan) => {
              const percentage =
                totalSubscribers > 0
                  ? Math.round((plan.count / totalSubscribers) * 100)
                  : 0;

              return (
                <div
                  key={plan.planId}
                  style={{
                    background: "oklch(0.97 0 0)",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                    border: plan.color.includes("border-primary")
                      ? "2px solid oklch(61.422% 0.10271 203.354)"
                      : "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div>
                    <p
                      style={{
                        color: "oklch(0.556 0 0)",
                        fontSize: "0.875rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {plan.planName}
                    </p>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "oklch(37.678% 0.02564 228.44/1)",
                        margin: 0,
                      }}
                    >
                      {plan.count}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: `conic-gradient(oklch(61.422% 0.10271 203.354) ${percentage}%, oklch(0.922 0 0) 0)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        background: "oklch(1 0 0)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "oklch(61.422% 0.10271 203.354)",
                      }}
                    >
                      {percentage}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
