import { cn } from "@/lib/utils";
import {
  IconHome,
  IconBuildingFactory,
  IconBolt,
  IconBattery,
} from "@tabler/icons-react";

type ProjectFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function ProjectExperienceSection() {
  const features: ProjectFeature[] = [
    {
      title: "Residential Solar Projects",
      description:
        "We have installed rooftop solar systems for individual homes, helping families lower their electricity bills and achieve energy independence. These projects include on-grid, off-grid, and hybrid solar systems, customized as per household power requirements.",
      icon: <IconHome className="w-8 h-8" />,
    },
    {
      title: "Commercial & Industrial Solar Projects",
      description:
        "Our commercial projects support shops, offices, warehouses, and small industries by providing reliable solar power solutions. These installations help businesses reduce operational costs while ensuring uninterrupted power through advanced inverters and battery backup systems.",
      icon: <IconBuildingFactory className="w-8 h-8" />,
    },
    {
      title: "Off-Grid & Rural Electrification Projects",
      description:
        "We have executed off-grid solar installations in areas with limited or unreliable grid supply. These projects ensure continuous electricity for lighting, appliances, and essential equipment, improving quality of life and productivity.",
      icon: <IconBolt className="w-8 h-8" />,
    },
    {
      title: "Solar Inverter & Battery Installations",
      description:
        "Apart from solar panels, we have completed multiple projects involving solar inverters, batteries, and power backup systems, ensuring stable and long-lasting performance for our clients.",
      icon: <IconBattery className="w-8 h-8" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <ProjectFeature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const ProjectFeature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-200",
        (index === 0 || index === 4) && "lg:border-l border-gray-200",
        index < 4 && "lg:border-b border-gray-200"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#E9F6FF] to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#E9F6FF] to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 md:px-10 text-[#0A6FB0]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-[#0A6FB0] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 text-center lg:text-left">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-6 md:px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

