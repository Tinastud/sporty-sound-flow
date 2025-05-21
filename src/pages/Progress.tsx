
import React from "react";
import { ArrowLeft, TrendingUp, BarChart2, Activity, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const progressData = [
  { day: "Mon", workouts: 2, calories: 340 },
  { day: "Tue", workouts: 1, calories: 280 },
  { day: "Wed", workouts: 3, calories: 520 },
  { day: "Thu", workouts: 0, calories: 120 },
  { day: "Fri", workouts: 2, calories: 350 },
  { day: "Sat", workouts: 4, calories: 580 },
  { day: "Sun", workouts: 1, calories: 250 },
];

const monthlyGoals = [
  { name: "Workouts", completed: 15, target: 20, progress: 75 },
  { name: "Calories", completed: 8500, target: 12000, progress: 70 },
  { name: "Distance", completed: 42, target: 60, progress: 70 },
  { name: "Active Days", completed: 18, target: 25, progress: 72 },
];

const achievements = [
  { title: "7 Day Streak", date: "May 15, 2025", status: "achieved" },
  { title: "10K Steps", date: "May 10, 2025", status: "achieved" },
  { title: "1000 Calories", date: "May 3, 2025", status: "achieved" },
  { title: "Marathon Ready", date: "June 1, 2025", status: "pending" },
];

const ProgressPage = () => {
  return (
    <div className="min-h-screen bg-app-background pb-24">
      <div className="pt-12 px-5">
        <div className="flex items-center mb-6">
          <Link to="/profile" className="mr-4">
            <ArrowLeft className="text-white hover:rotate-90 transition-transform duration-300" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Your Progress</h1>
        </div>

        {/* Activity Overview */}
        <div className="mb-10"> {/* Increased bottom margin from mb-6 to mb-10 */}
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Activity className="mr-2 text-app-orange" size={20} />
                Weekly Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-60"> {/* Reduced height from h-64 to h-60 */}
                <ChartContainer 
                  config={{
                    workouts: { 
                      color: "#FF6B35", 
                      label: "Workouts" 
                    },
                    calories: { 
                      color: "#4CAF50", 
                      label: "Calories" 
                    }
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={progressData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="day" stroke="#999" />
                      <YAxis yAxisId="right" orientation="right" stroke="#999" />
                      <YAxis yAxisId="left" stroke="#999" />
                      <ChartTooltip
                        content={<ChartTooltipContent nameKey="day" />}
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="workouts"
                        name="workouts"
                        stroke="#FF6B35"
                        strokeWidth={2}
                        dot={{ r: 4, strokeWidth: 0, fill: "#FF6B35" }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="calories"
                        name="calories"
                        stroke="#4CAF50"
                        strokeWidth={2}
                        dot={{ r: 4, strokeWidth: 0, fill: "#4CAF50" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Goals */}
        <div className="mb-8"> {/* Increased bottom margin from mb-6 to mb-8 */}
          <h2 className="text-white text-lg font-semibold mb-4 flex items-center"> {/* Increased bottom margin from mb-3 to mb-4 */}
            <BarChart2 className="mr-2 text-app-orange" size={20} />
            Monthly Goals
          </h2>
          <div className="space-y-4">
            {monthlyGoals.map((goal, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">{goal.name}</span>
                  <span className="text-white">
                    {goal.completed}/{goal.target}
                  </span>
                </div>
                <div className="relative pt-1">
                  <Progress value={goal.progress} className="h-2 bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h2 className="text-white text-lg font-semibold mb-4 flex items-center"> {/* Increased bottom margin from mb-3 to mb-4 */}
            <TrendingUp className="mr-2 text-app-orange" size={20} />
            Achievements
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{achievement.title}</h3>
                  <div className="flex items-center mt-1">
                    <Calendar size={14} className="text-white/60 mr-1" />
                    <p className="text-white/60 text-xs">{achievement.date}</p>
                  </div>
                </div>
                <Badge 
                  variant={achievement.status === "achieved" ? "default" : "secondary"}
                  className={`${
                    achievement.status === "achieved" 
                      ? "bg-app-orange/20 text-app-orange hover:bg-app-orange/30" 
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  {achievement.status === "achieved" ? "Completed" : "Pending"}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
