import { LoggedHabits } from "@/utils/interfaces";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

interface Props {
  loggedHabits: LoggedHabits[];
}

export default function StreakRadarChartComponent({ loggedHabits }: Props) {
  return (
    <div className="flex justify-center mt-10">
      <RadarChart
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1.518,
        }}
        responsive
        data={loggedHabits}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="loggedHabitName"
          tick={{ fill: "#ffffff", fontSize: 18, fontWeight: 600 }}
        />
        <PolarRadiusAxis />
        <Radar
          name="Streak-Data"
          dataKey="logAmount"
          stroke="#000"
          fill="#E877D9"
          fillOpacity={0.8}
        />
      </RadarChart>
    </div>
  );
}
