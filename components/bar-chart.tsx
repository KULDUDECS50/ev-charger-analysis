"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "A", value: 10 },
  { name: "B", value: 15 },
  { name: "C", value: 8 },
  { name: "D", value: 12 },
]

export default function BarChartComponent() {
  return (
    <ChartContainer
      config={{
        bar: {
          label: "Value",
          color: "hsl(300, 100%, 70%)",
        },
      }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart accessibilityLayer data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 30%)" />
          <XAxis dataKey="name" stroke="hsl(220, 13%, 70%)" />
          <YAxis stroke="hsl(220, 13%, 70%)" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="hsl(300, 100%, 70%)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

