"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { x: 1, y: 3 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 7 },
  { x: 5, y: 6 },
  { x: 6, y: 8 },
]

export default function LinearRegressionChart() {
  return (
    <ChartContainer
      config={{
        data: {
          label: "Data Points",
          color: "hsl(280, 100%, 70%)",
        },
        regression: {
          label: "Regression Line",
          color: "hsl(320, 100%, 70%)",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart accessibilityLayer data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 30%)" />
          <XAxis dataKey="x" stroke="hsl(220, 13%, 70%)" />
          <YAxis stroke="hsl(220, 13%, 70%)" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="y" stroke="hsl(280, 100%, 70%)" name="Data Points" />
          <Line type="linear" dataKey="y" stroke="hsl(320, 100%, 70%)" name="Regression Line" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

