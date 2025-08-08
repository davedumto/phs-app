"use client";
import { useEffect, useState, useRef } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import React, { JSX } from "react";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  id: number;
}

export interface TestimonialCarouselProps {
  items?: TestimonialItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "David Ejere",
    role: "Homeowner",
    content:
      "Working with this team was an absolute pleasure. They transformed our living room into a beautiful, functional space that perfectly reflects our style. Their attention to detail is unmatched!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "The cleaning services provided were exceptional. The team was professional, thorough, and used eco-friendly products as requested. Our office has never looked better!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Academy Student",
    content:
      "The interior design course exceeded my expectations. The instructors are knowledgeable and passionate, and the hands-on experience was invaluable. I highly recommend their academy!",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
  },
  {
    id: 4,
    name: "Precious Igwealor",
    role: "Property Developer",
    content:
      "I've worked with many interior designers over the years, but this team stands out. Their ability to blend aesthetics with functionality is impressive. They delivered on time and within budget.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    name: "Sophia Patel",
    role: "Restaurant Owner",
    content:
      "The fumigation service was thorough and effective. They explained the process clearly, used safe products, and followed up to ensure our pest issues were resolved. Highly professional!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Hotel Manager",
    content:
      "The interior design team transformed our hotel lobby into a stunning space that wows our guests. Their attention to detail and understanding of hospitality design is exceptional.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function TestimonialCarousel({
  items = DEFAULT_TESTIMONIALS,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}: TestimonialCarouselProps): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [responsiveCurrentIndex, setResponsiveCurrentIndex] =
    useState<number>(0);
  const [responsiveIsResetting, setResponsiveIsResetting] =
    useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Mobile 3D carousel logic
  const containerPadding = 16;
  const baseWidth = 300;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === carouselItems.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    carouselItems.length,
    pauseOnHover,
  ]);

  // Create responsive groups and items for desktop/tablet
  const createResponsiveGroups = () => {
    const groups = [];
    if (isTablet) {
      // Tablet: 2 cards per slide
      for (let i = 0; i < items.length; i += 2) {
        groups.push(items.slice(i, i + 2));
      }
    } else {
      // Desktop: 3 cards per slide
      for (let i = 0; i < items.length; i += 3) {
        groups.push(items.slice(i, i + 3));
      }
    }
    return groups;
  };

  const groupedItems = createResponsiveGroups();
  const responsiveCarouselItems = loop
    ? [...groupedItems, groupedItems[0]]
    : groupedItems;

  // Autoplay for responsive carousel
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setResponsiveCurrentIndex((prev) => {
          if (prev === groupedItems.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === responsiveCarouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    groupedItems.length,
    responsiveCarouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <StarIcon
          key={index}
          size={16}
          className={
            index < count ? "text-orange fill-orange" : "text-gray-300"
          }
        />
      ));
  };

  // Create transform hooks for mobile 3D effect (always create them)
  // Mobile 3D carousel
  if (isMobile) {
    return (
      <div
        ref={containerRef}
        className="relative overflow-hidden p-4 rounded-[24px] border border-teal/20 bg-gradient-to-br from-teal/5 to-lightblue/10"
        style={{ width: `${baseWidth}px`, height: "320px" }}
      >
        <motion.div
          className="flex"
          drag="x"
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${
              currentIndex * trackItemOffset + itemWidth / 2
            }px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative shrink-0 flex flex-col items-start justify-between bg-white border border-teal/20 rounded-[12px] overflow-hidden cursor-grab active:cursor-grabbing"
              style={{
                width: itemWidth,
                height: "100%",
              }}
              transition={effectiveTransition}
            >
              <div className="p-4 flex-1 flex flex-col">
                {/* Stars */}
                <div className="flex mb-3">{renderStars(item.rating)}</div>

                {/* Content */}
                <p className="text-gray-700 text-sm mb-4 flex-1 italic leading-relaxed">
                  "{item.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-teal/20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-teal text-sm">{item.name}</h4>
                    <p className="text-gray-600 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-orange"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Handle responsive carousel animation completion
  const handleResponsiveAnimationComplete = () => {
    if (loop && responsiveCurrentIndex === groupedItems.length) {
      setResponsiveIsResetting(true);
      setResponsiveCurrentIndex(0);
      setTimeout(() => setResponsiveIsResetting(false), 50);
    }
  };

  // Handle responsive carousel drag end
  const handleResponsiveDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -50 || velocity < -500) {
      // Swipe left - go to next
      if (responsiveCurrentIndex === groupedItems.length - 1 && loop) {
        // If at last real group and looping, go to duplicate first group
        setResponsiveCurrentIndex(groupedItems.length);
      } else {
        setResponsiveCurrentIndex((prev) =>
          Math.min(prev + 1, groupedItems.length)
        );
      }
    } else if (offset > 50 || velocity > 500) {
      // Swipe right - go to previous
      if (responsiveCurrentIndex === 0 && loop) {
        // If at first group and looping, go to last real group
        setResponsiveCurrentIndex(groupedItems.length - 1);
      } else {
        setResponsiveCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden p-5 rounded-2xl border border-teal/20 bg-gradient-to-br from-teal/5 to-lightblue/10 w-full max-w-7xl mx-auto"
      style={{ height: "400px" }}
    >
      <div className="overflow-hidden w-full h-full">
        <motion.div
          className="flex h-full"
          drag="x"
          onDragEnd={handleResponsiveDragEnd}
          animate={{ x: `-${responsiveCurrentIndex * 100}%` }}
          transition={
            responsiveIsResetting
              ? { duration: 0 }
              : { type: "spring", stiffness: 300, damping: 30 }
          }
          onAnimationComplete={handleResponsiveAnimationComplete}
        >
          {responsiveCarouselItems.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex gap-4 md:gap-6 shrink-0 w-full h-full"
            >
              {group.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative flex flex-col items-start justify-between bg-white border border-teal/20 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    {/* Stars */}
                    <div className="flex mb-3 md:mb-4">
                      {renderStars(item.rating)}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 text-sm mb-4 md:mb-6 flex-1 italic leading-relaxed">
                      "{item.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 md:mr-4 border-2 border-teal/20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-teal text-sm">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 text-xs">{item.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-orange"></div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
