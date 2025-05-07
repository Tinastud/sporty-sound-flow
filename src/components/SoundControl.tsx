
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Volume, Volume1, Volume2, VolumeX, Music, Heart, Users } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const presets = [
  { 
    name: "Bass Boost", 
    id: "bass",
    equalizer: { bass: 85, mid: 50, treble: 40 }
  },
  { 
    name: "Vocal", 
    id: "vocal",
    equalizer: { bass: 40, mid: 85, treble: 60 }
  },
  { 
    name: "Treble Boost", 
    id: "treble",
    equalizer: { bass: 30, mid: 55, treble: 90 }
  },
  { 
    name: "Balanced", 
    id: "balanced",
    equalizer: { bass: 50, mid: 50, treble: 50 }
  },
  { 
    name: "Podcast", 
    id: "podcast",
    equalizer: { bass: 45, mid: 75, treble: 65 }
  },
];

const soundModes = [
  { name: "Default Mode", id: "default", icon: <Volume className="h-4 w-4" /> },
  { name: "Soothing environment sound", id: "environment", icon: <Music className="h-4 w-4" /> },
  { name: "Heartbeat sound", id: "heartbeat", icon: <Heart className="h-4 w-4" /> },
  { name: "Cheering sounds", id: "cheering", icon: <Users className="h-4 w-4" /> },
];

const SoundControl = () => {
  const [volume, setVolume] = useState(75);
  const [activePreset, setActivePreset] = useState("balanced");
  const [activeSoundMode, setActiveSoundMode] = useState("default");
  const [equalizer, setEqualizer] = useState({
    bass: 50,
    mid: 50,
    treble: 50,
  });

  useEffect(() => {
    // When a preset is selected, update the equalizer values
    const selectedPreset = presets.find(preset => preset.id === activePreset);
    if (selectedPreset) {
      setEqualizer(selectedPreset.equalizer);
    }
  }, [activePreset]);

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const handleEqualizerChange = (type: "bass" | "mid" | "treble", value: number[]) => {
    setEqualizer({ ...equalizer, [type]: value[0] });
    // When manually adjusting equalizer, deselect any preset
    setActivePreset("");
  };

  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX size={22} />;
    if (volume < 35) return <Volume size={22} />;
    if (volume < 70) return <Volume1 size={22} />;
    return <Volume2 size={22} />;
  };

  return (
    <div className="w-full px-2">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white text-lg font-semibold">Volume</h3>
          <div className="bg-app-background/30 rounded-full h-8 w-8 flex items-center justify-center">
            <VolumeIcon />
          </div>
        </div>
        <div className="px-1 flex items-center">
          <div className="text-white/60 w-8">{volume}%</div>
          <div className="flex-1 mx-3">
            <Slider
              value={[volume]}
              min={0}
              max={100}
              step={1}
              onValueChange={handleVolumeChange}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-4">Sound Modes</h3>
        <RadioGroup 
          value={activeSoundMode}
          onValueChange={setActiveSoundMode}
          className="space-y-2"
        >
          {soundModes.map((mode) => (
            <div key={mode.id} className="flex items-center space-x-2 bg-black/20 p-3 rounded-lg">
              <RadioGroupItem value={mode.id} id={mode.id} className="border-app-orange text-app-orange" />
              <div className="flex items-center flex-1">
                <label htmlFor={mode.id} className="flex items-center gap-2 text-white cursor-pointer">
                  <div className="bg-app-orange/20 rounded-full h-8 w-8 flex items-center justify-center text-app-orange">
                    {mode.icon}
                  </div>
                  <span>{mode.name}</span>
                </label>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-4">Sound Presets</h3>
        <div className="flex gap-2 overflow-x-auto pb-2 flex-nowrap">
          {presets.map((preset) => (
            <Button
              key={preset.id}
              variant={activePreset === preset.id ? "default" : "outline"}
              className={
                activePreset === preset.id
                  ? "bg-app-orange text-white border-none rounded-full whitespace-nowrap"
                  : "bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border-white/20 rounded-full whitespace-nowrap"
              }
              onClick={() => setActivePreset(preset.id)}
            >
              {preset.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-white text-lg font-semibold mb-4">Equalizer</h3>
        
        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="text-white/80 text-sm">Bass</span>
            <span className="text-white/60 text-xs">{equalizer.bass}%</span>
          </div>
          <Slider
            value={[equalizer.bass]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value) => handleEqualizerChange("bass", value)}
            className="cursor-pointer"
          />
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="text-white/80 text-sm">Mid</span>
            <span className="text-white/60 text-xs">{equalizer.mid}%</span>
          </div>
          <Slider
            value={[equalizer.mid]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value) => handleEqualizerChange("mid", value)}
            className="cursor-pointer"
          />
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="text-white/80 text-sm">Treble</span>
            <span className="text-white/60 text-xs">{equalizer.treble}%</span>
          </div>
          <Slider
            value={[equalizer.treble]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value) => handleEqualizerChange("treble", value)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SoundControl;
