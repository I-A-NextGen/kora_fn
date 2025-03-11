"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", income: 186 },
  { month: "February", income: 305 },
  { month: "March", income: 237 },
  { month: "April", income: 73 },
  { month: "May", income: 209 },
  { month: "June", income: 214 },
  { month: "July", income: 214 },
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
  return (
    <Card className={className}>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
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
      </CardContent>
    </Card>
  );
}
