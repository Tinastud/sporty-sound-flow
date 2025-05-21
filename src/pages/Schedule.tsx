
import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface WorkoutEvent {
  time: string;
  title: string;
  duration: string;
}

const todaysWorkouts: WorkoutEvent[] = [
  {
    time: "06:30",
    title: "Morning Run",
    duration: "45 min",
  },
  {
    time: "12:00",
    title: "Lunch Break Walk",
    duration: "30 min",
  },
  {
    time: "18:30",
    title: "Evening Workout",
    duration: "60 min",
  },
];

const Schedule = () => {
  const [date, setDate] = useState<Date>(new Date());
  const formattedDate = format(date, "EEEE, MMMM d");

  return (
    <div className="min-h-screen bg-app-background pb-24">
      <div className="pt-12 px-5">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <ArrowLeft className="text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Schedule</h1>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 text-app-orange" size={20} />
            <h3 className="text-white/90 text-base">{formattedDate}</h3>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-white/5 text-white border-white/10 hover:bg-white/10 hover:text-white"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Select Date
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white/10 border-white/10">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                className="bg-app-background text-white pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-4">
          {todaysWorkouts.map((workout, index) => (
            <div 
              key={index} 
              className="bg-white/5 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="bg-app-orange/20 rounded-full h-10 w-10 flex items-center justify-center mr-4">
                  <Clock className="text-app-orange" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">{workout.title}</h4>
                  <p className="text-white/60 text-sm">{workout.duration}</p>
                </div>
              </div>
              <div className="text-app-orange font-semibold">
                {workout.time}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 rounded-xl bg-app-orange/20 text-app-orange py-3 font-medium">
          + Add Workout
        </button>
      </div>
    </div>
  );
};

export default Schedule;
