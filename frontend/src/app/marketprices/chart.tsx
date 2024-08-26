"use client";

import React, { useEffect, useState } from "react";
import { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";

interface Price {
  id: number;
  name: string;
  price: number;
  updatedAt: string;
  createdAt: string;
}

const ChartOne: React.FC<{ }> = ({ }) => {
  const [series, setSeries] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/api/prices/all");
      const data: Price[] = await response.json();
  
      const currentDate = new Date();
      const startDate = new Date(currentDate);
      startDate.setDate(currentDate.getDate() - 6); // One week ago
      const endDate = new Date(currentDate);
      endDate.setDate(currentDate.getDate() + 6); // Next day
  
      const categories = Array.from({ length: 10 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        return date.toLocaleDateString("en-US", { weekday: "short" });
      });
  
      const orderedCategories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // Adjust as needed
      setCategories(orderedCategories);
  
      const filteredData = data.filter((item) => {
        const createdAt = new Date(item.createdAt);
        return createdAt >= startDate && createdAt <= endDate;
      });
  
      const groupedData = filteredData.reduce((acc, item) => {
        const createdAt = new Date(item.createdAt);
        const dayOfWeek = createdAt.toLocaleDateString("en-US", { weekday: "short" });
  
        if (!acc[item.name]) {
          acc[item.name] = { name: item.name, data: new Array(8).fill(null) }; // Adjust to accommodate future dates
        }
  
        const dayIndex = orderedCategories.indexOf(dayOfWeek);
        acc[item.name].data[dayIndex] = item.price;
  
        return acc;
      }, {} as Record<string, { name: string; data: (number | null)[] }>);
  
      const seriesData = Object.values(groupedData).map((item, index) => ({
        name: item.name,
        type: "line",
        data: item.data,
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: `hsl(${(index * 60) % 360}, 70%, 50%)`,
          borderWidth: 2,
        },
      }));
  
      setSeries(seriesData);
    };
  
    fetchData();
  }, []);
  const getOption = (): EChartsOption => ({
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        return params
          .map(
            (param: any) =>
              `${param.marker} ${param.seriesName}: TND${param.value || "N/A"}`
          )
          .join("<br/>");
      },
    },
    legend: {
      show: true,
      top: "top",
      left: "left",
    },
    xAxis: {
      type: "category",
      data: categories,
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 5000,
    },
    grid: {
      containLabel: true,
    },
    series: series,
  });

  return (
    <div className="col-span-12 rounded-sm border p-20 border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Variation</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Week
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactECharts
            option={getOption()}
            style={{ height: 350, width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;