"use client";

type DashboardWidgetProps = {
  title: string;
  content: string;
};

export default function DashboardWidget({ title, content }: DashboardWidgetProps) {
  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
}