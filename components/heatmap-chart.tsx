"use client"

import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { x: 1, y: 2, z: 10 },
  { x: 2, y: 3, z: 15 },
  { x: 3, y: 1, z: 5 },
  { x: 4, y: 4, z: 20 },
  { x: 5, y: 2, z: 8 },
]

export default function HeatmapChart() {
  return (
    <ChartContainer
      config={{
        heatmap: {
          label: "Charger Density",
          color: "hsl(260, 100%, 70%)",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart accessibilityLayer margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="x" name="X Coordinate" stroke="hsl(220, 13%, 70%)" />
          <YAxis dataKey="y" name="Y Coordinate" stroke="hsl(220, 13%, 70%)" />
          <ZAxis dataKey="z" range={[0, 100]} name="Density" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Scatter data={data} fill="hsl(260, 100%, 70%)" />
        </ScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

