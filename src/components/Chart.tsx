import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: any[];
  xDataKey: string;
  yDataKey: string;
  xTickFormatter?: (value: any) => string;
  yTickFormatter?: (value: any) => string;
}

const Chart: React.FC<ChartProps> = ({
  data,
  xDataKey,
  yDataKey,
  xTickFormatter,
  yTickFormatter,
}) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xDataKey}
          tickFormatter={xTickFormatter}
          stroke={theme.palette.text.primary}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          tickFormatter={yTickFormatter}
          stroke={theme.palette.text.primary}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.primary,
          }}
          labelFormatter={(value) =>
            xTickFormatter ? xTickFormatter(value) : value
          }
        />
        <Legend />
        <Line
          type="monotone"
          dataKey={yDataKey}
          stroke={theme.palette.primary.main}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
