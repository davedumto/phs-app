import React from "react";
import { ArrowRightIcon } from "lucide-react";
interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  subservices: string[];
}
const ServiceCard = ({
  id,
  title,
  description,
  icon,
  subservices,
}: ServiceCardProps) => {
  return (
    <div
      id={id}
      className="bg-teal text-white rounded-lg overflow-hidden shadow-md h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="border-2 border-white p-4 rounded-md mr-5">
            <div className="text-white">{icon}</div>
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white/90 mb-4">{description}</p>
        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-semibold text-white mb-2">
            Services Include:
          </h4>
          <ul className="space-y-1">
            {subservices.map((subservice, index) => (
              <li
                key={index}
                className="text-sm text-white/80 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-orange rounded-full mr-2"></span>
                {subservice}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <a
            href={`/services/${id}`}
            className="inline-flex items-center text-orange font-medium hover:text-white transition-colors"
          >
            Learn More <ArrowRightIcon size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
