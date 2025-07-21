import {
  Tabs as TabBar,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/tabs";
import type { ReactNode } from "react";

type Tab = {
  title: string;
  content: ReactNode;
};

type TabsProps = {
  dataSource: Tab[];
};

export default function Tabs({ dataSource }: TabsProps) {
  const tabs = [...dataSource];
  return (
    <TabBar defaultValue={tabs[0].title} className="mt-3">
      <TabsList className="w-full">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.title}
            value={tab.title}
            className="cursor-pointer"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.title} value={tab.title}>
          {tab.content}
        </TabsContent>
      ))}
    </TabBar>
  );
}
