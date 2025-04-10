"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMediaQuery } from "react-responsive";

const chartData = [
  // { month: "", income: 0 },
  { month: "January", income: 886 },
  { month: "February", income: 305 },
  { month: "March", income: 237 },
  { month: "April", income: 173 },
  { month: "May", income: 209 },
  { month: "June", income: 214 },
  { month: "July", income: 114 },
  { month: "August", income: 214 },
  { month: "September", income: 214 },
  { month: "October", income: 714 },
  { month: "November", income: 214 },
  { month: "December", income: 214 },
];

const chartConfig = {
  income: {
    label: "income",
    color: "blue",
  },
} satisfies ChartConfig;

export function Areachart({ className }: { className?: string }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  return (
    <div className={`${className}`}>
      <ChartContainer className="h-[90%] w-[104%]" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          className="-ml-5"
          margin={{}}
        >
          <CartesianGrid stroke="#e5e7eb" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: string) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} scale="linear" axisLine={false} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="income"
            type="natural"
            fill="var(--color-income)"
            fillOpacity={0.4}
            stroke="var(--color-income)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
