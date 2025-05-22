
import React from "react";
import { Activity, TrendingUp, Flame, ArrowLeft, Route } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WorkoutStat {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

const Workout = () => {
  const stats: WorkoutStat[] = [
    {
      icon: <Activity size={18} />,
      label: "Steps",
      value: "8,246",
      color: "#FF6B35",
    },
    {
      icon: <TrendingUp size={18} />,
      label: "Distance",
      value: "5.8 km",
      color: "#4CAF50",
    },
    {
      icon: <Flame size={18} />,
      label: "Calories",
      value: "368",
      color: "#F44336",
    },
  ];

  const goalProgress = 65;

  return (
    <div className="min-h-screen bg-app-background pb-24">
      <div className="pt-12 px-5">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft className="text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Workout</h1>
        </div>

        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 text-white">
            <TabsTrigger value="daily" className="data-[state=active]:bg-app-orange data-[state=active]:text-white">
              Daily Progress
            </TabsTrigger>
            <TabsTrigger value="routines" className="data-[state=active]:bg-app-orange data-[state=active]:text-white">
              Routines
            </TabsTrigger>
          </TabsList>
          <TabsContent value="daily">
            <div className="mb-5 mt-3">
              <div className="relative pt-1">
                <Progress value={goalProgress} className="h-2 bg-white/10" />
                <div className="flex items-center justify-between text-xs text-white/70 mt-2">
                  <span>0%</span>
                  <span className="text-app-orange font-semibold">{goalProgress}%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 rounded-xl p-3 flex flex-col items-center"
                >
                  <div 
                    className="rounded-full h-8 w-8 flex items-center justify-center mb-2"
                    style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-white/60 text-xs">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-3">Recent Workouts</h3>
              <div className="space-y-3">
                {["Morning Run", "Weight Training", "Evening Yoga"].map((workout, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div 
                        className={`rounded-full h-10 w-10 flex items-center justify-center mr-3 ${
                          index === 0 ? "bg-app-orange/20 text-app-orange" : "bg-white/10 text-white/60"
                        }`}
                      >
                        <Activity size={18} />
                      </div>
                      <div className="text-white">{workout}</div>
                    </div>
                    <div className="text-white/60 text-sm">
                      {index === 0 ? "Today" : index === 1 ? "Yesterday" : "2 days ago"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="routines" className="mt-4">
            <Link to="/routines" className="w-full">
              <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="rounded-full h-10 w-10 flex items-center justify-center mr-3 bg-app-orange/20 text-app-orange">
                    <Route size={18} />
                  </div>
                  <div className="text-white">Browse All Routines</div>
                </div>
                <ArrowLeft className="text-white/60 rotate-180" size={16} />
              </div>
            </Link>
            <div className="space-y-3">
              <h3 className="text-white text-lg font-semibold mt-4 mb-2">Popular Routines</h3>
              {["Morning Energy", "Full Body", "Cardio Blast"].map((routine, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="rounded-full h-10 w-10 flex items-center justify-center mr-3 bg-white/10 text-white/60">
                      <Route size={18} />
                    </div>
                    <div>
                      <div className="text-white">{routine}</div>
                      <div className="text-white/60 text-xs">
                        {index === 0 ? "15 min • Beginner" : index === 1 ? "30 min • Intermediate" : "20 min • Advanced"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Workout;
