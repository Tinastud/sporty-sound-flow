
import React from "react";
import { ArrowLeft, Activity, BookOpen, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RoutineCardProps {
  title: string;
  duration: string;
  category: string;
  level: string;
  icon: React.ReactNode;
}

const RoutineCard = ({ title, duration, category, level, icon }: RoutineCardProps) => {
  return (
    <div className="bg-white/5 rounded-xl p-4 flex items-start gap-3 mb-3">
      <div className="rounded-full h-10 w-10 flex items-center justify-center bg-app-orange/20 text-app-orange">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-white font-medium">{title}</h3>
        <div className="flex items-center text-xs text-white/60 gap-2 mt-1">
          <span>{duration}</span>
          <span>•</span>
          <span>{category}</span>
          <span>•</span>
          <span>{level}</span>
        </div>
      </div>
    </div>
  );
};

const Routines = () => {
  const workoutRoutines = [
    {
      title: "Morning Energy Boost",
      duration: "15 min",
      category: "Cardio",
      level: "Beginner",
      icon: <Activity size={18} />
    },
    {
      title: "Full Body Strength",
      duration: "30 min",
      category: "Strength",
      level: "Intermediate",
      icon: <Activity size={18} />
    },
    {
      title: "HIIT Workout",
      duration: "20 min",
      category: "High Intensity",
      level: "Advanced",
      icon: <Activity size={18} />
    }
  ];

  const wellbeingRoutines = [
    {
      title: "Morning Meditation",
      duration: "10 min",
      category: "Mindfulness",
      level: "All Levels",
      icon: <BookOpen size={18} />
    },
    {
      title: "Evening Wind Down",
      duration: "15 min",
      category: "Relaxation",
      level: "All Levels",
      icon: <BookOpen size={18} />
    },
    {
      title: "Stress Relief",
      duration: "20 min",
      category: "Breathing",
      level: "Beginner",
      icon: <BookOpen size={18} />
    }
  ];

  return (
    <div className="min-h-screen bg-app-background pb-24">
      <div className="pt-12 px-5">
        <div className="flex items-center mb-6">
          <Link to="/workout" className="mr-4">
            <ArrowLeft className="text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Routines</h1>
        </div>

        <Tabs defaultValue="workout" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 text-white">
            <TabsTrigger value="workout" className="data-[state=active]:bg-app-orange data-[state=active]:text-white">
              Workout
            </TabsTrigger>
            <TabsTrigger value="wellbeing" className="data-[state=active]:bg-app-orange data-[state=active]:text-white">
              Well-being
            </TabsTrigger>
          </TabsList>
          <TabsContent value="workout" className="mt-4">
            <div className="space-y-3">
              {workoutRoutines.map((routine, index) => (
                <RoutineCard
                  key={index}
                  title={routine.title}
                  duration={routine.duration}
                  category={routine.category}
                  level={routine.level}
                  icon={routine.icon}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="wellbeing" className="mt-4">
            <div className="space-y-3">
              {wellbeingRoutines.map((routine, index) => (
                <RoutineCard
                  key={index}
                  title={routine.title}
                  duration={routine.duration}
                  category={routine.category}
                  level={routine.level}
                  icon={routine.icon}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <Link 
            to="/routines/create" 
            className="w-full bg-app-orange text-white py-3 px-4 rounded-lg flex items-center justify-center"
          >
            <Timer size={18} className="mr-2" />
            Create New Routine
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Routines;
