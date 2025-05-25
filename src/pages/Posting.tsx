
import React, { useState } from "react";
import { ArrowLeft, Camera, Image, MapPin, Clock, Flame, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Posting = () => {
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [distance, setDistance] = useState("");
  const [location, setLocation] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    // Handle posting logic here
    console.log("Posting:", { caption, selectedImage, activityType, duration, calories, distance, location });
  };

  return (
    <div className="min-h-screen bg-app-background">
      <div className="pt-12 px-5 pb-6">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-white hover:text-app-orange">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-xl font-bold text-white">Share Your Activity</h1>
          <div className="w-6" />
        </div>

        <div className="space-y-6">
          {/* Image Upload Section */}
          <div className="bg-white/5 rounded-2xl p-4">
            <Label className="text-white text-sm font-medium mb-3 block">Add Photo</Label>
            {selectedImage ? (
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Selected" 
                  className="w-full h-48 object-cover rounded-xl"
                />
                <Button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 h-8 w-8"
                >
                  ×
                </Button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-white/20 border-dashed rounded-xl cursor-pointer hover:border-app-orange/50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Camera className="w-8 h-8 mb-4 text-white/60" />
                  <p className="mb-2 text-sm text-white/60">
                    <span className="font-semibold">Click to upload</span> a photo
                  </p>
                  <p className="text-xs text-white/40">PNG, JPG or GIF</p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>

          {/* Caption Section */}
          <div className="bg-white/5 rounded-2xl p-4">
            <Label className="text-white text-sm font-medium mb-3 block">Caption</Label>
            <Textarea
              placeholder="Share your experience..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none min-h-[100px]"
            />
          </div>

          {/* Activity Stats Section */}
          <div className="bg-white/5 rounded-2xl p-4">
            <Label className="text-white text-sm font-medium mb-4 block">Activity Details</Label>
            
            <div className="space-y-4">
              <div>
                <Label className="text-white/70 text-xs mb-2 block">Activity Type</Label>
                <Input
                  placeholder="e.g., Running, Yoga, Cycling"
                  value={activityType}
                  onChange={(e) => setActivityType(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-white/70 text-xs mb-2 block flex items-center gap-1">
                    <Clock size={12} />
                    Duration (min)
                  </Label>
                  <Input
                    placeholder="30"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <Label className="text-white/70 text-xs mb-2 block flex items-center gap-1">
                    <Flame size={12} />
                    Calories
                  </Label>
                  <Input
                    placeholder="200"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>

              <div>
                <Label className="text-white/70 text-xs mb-2 block flex items-center gap-1">
                  <Target size={12} />
                  Distance (km)
                </Label>
                <Input
                  placeholder="5.2"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <Label className="text-white/70 text-xs mb-2 block flex items-center gap-1">
                  <MapPin size={12} />
                  Location
                </Label>
                <Input
                  placeholder="Central Park, New York"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            </div>
          </div>

          {/* Post Button */}
          <Button
            onClick={handlePost}
            className="w-full button-gleam text-white font-semibold py-3 rounded-xl"
          >
            Share with Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Posting;
