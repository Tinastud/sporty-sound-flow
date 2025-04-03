
import React from "react";
import { Apple, Coffee, Utensils } from "lucide-react";

interface MealItem {
  title: string;
  time: string;
  calories: number;
  icon: React.ReactNode;
}

const Nutrition = () => {
  const meals: MealItem[] = [
    {
      title: "Breakfast",
      time: "07:30 AM",
      calories: 380,
      icon: <Coffee size={18} />,
    },
    {
      title: "Lunch",
      time: "12:30 PM",
      calories: 620,
      icon: <Utensils size={18} />,
    },
    {
      title: "Snack",
      time: "03:45 PM",
      calories: 150,
      icon: <Apple size={18} />,
    },
  ];

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const goalCalories = 2200;
  const remainingCalories = goalCalories - totalCalories;

  return (
    <div className="w-full px-2">
      <div className="bg-white/5 rounded-xl p-4 mb-6">
        <div className="flex justify-between mb-3">
          <div>
            <h3 className="text-white font-semibold">Calorie Intake</h3>
            <p className="text-white/60 text-sm">Daily goal: {goalCalories}</p>
          </div>
          <div className="text-right">
            <p className="text-white font-semibold">{totalCalories}</p>
            <p className="text-white/60 text-sm">consumed</p>
          </div>
        </div>
        
        <div className="w-full bg-white/10 rounded-full h-2.5 mb-1">
          <div 
            className="bg-app-orange h-2.5 rounded-full" 
            style={{ width: `${(totalCalories / goalCalories) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs">
          <span className="text-white/60">0</span>
          <span className="text-app-orange font-medium">{remainingCalories} calories remaining</span>
          <span className="text-white/60">{goalCalories}</span>
        </div>
      </div>

      <h3 className="text-white text-lg font-semibold mb-3">Today's Meals</h3>
      <div className="space-y-3 mb-6">
        {meals.map((meal, index) => (
          <div 
            key={index}
            className="bg-white/5 rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="bg-app-peach/30 rounded-full h-10 w-10 flex items-center justify-center mr-3 text-app-orange">
                {meal.icon}
              </div>
              <div>
                <h4 className="text-white font-medium">{meal.title}</h4>
                <p className="text-white/60 text-sm">{meal.time}</p>
              </div>
            </div>
            <div className="text-white/80">
              {meal.calories} <span className="text-white/60 text-sm">kcal</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full rounded-xl bg-app-orange/20 text-app-orange py-3 font-medium">
        + Add Meal
      </button>
    </div>
  );
};

export default Nutrition;
