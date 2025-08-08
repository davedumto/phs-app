"use client";
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FeaturedWorks = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 2,
      title: "Minimalist Kitchen",
      category: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    },
    {
      id: 3,
      title: "Luxurious Bedroom",
      category: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    category: string;
  } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  // Handle mouse/touch events for dragging
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
  };
  const handleDragMove = (clientX: number) => {
    if (!isDragging || !isMobile) return;
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const newOffset = clientX - dragStartX;
    const maxOffset = containerWidth * 0.15; // Limit drag to 15% of container width
    // Limit the offset to a reasonable range
    const boundedOffset = Math.max(Math.min(newOffset, maxOffset), -maxOffset);
    setDragOffset(boundedOffset);
  };
  const handleDragEnd = () => {
    if (!isDragging || !isMobile) return;
    const threshold = 50; // Minimum drag distance to trigger slide change
    if (dragOffset > threshold) {
      // Dragged right - go to previous
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else if (dragOffset < -threshold) {
      // Dragged left - go to next
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
    setIsDragging(false);
    setDragOffset(0);
  };
  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return;
    handleDragStart(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) return;
    handleDragMove(e.clientX);
  };
  const handleMouseUp = () => {
    if (!isMobile) return;
    handleDragEnd();
  };
  const handleMouseLeave = () => {
    if (!isMobile || !isDragging) return;
    handleDragEnd();
  };
  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    handleDragStart(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    handleDragMove(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!isMobile) return;
    handleDragEnd();
  };

  const openModal = (project: {
    image: string;
    title: string;
    category: string;
  }) => {
    setSelectedImage({
      src: project.image,
      title: project.title,
      category: project.category,
    });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const getTransformStyle = () => {
    const baseTransform = -currentIndex * 100;
    const dragPercent =
      (dragOffset / (carouselRef.current?.offsetWidth || 1)) * 100;
    return `translateX(${baseTransform + dragPercent}%)`;
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Featured Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Explore our portfolio of stunning projects that showcase our
              expertise and attention to detail.
            </p>
          </div>
          <a
            href="/gallery"
            className="mt-4 md:mt-0 bg-teal text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
        {isMobile ? (
          // Mobile view with draggable carousel
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <div className="overflow-hidden touch-pan-y" ref={carouselRef}>
              <div
                className={`flex transition-transform ${
                  isDragging ? "duration-0" : "duration-300 ease-out"
                }`}
                style={{
                  transform: getTransformStyle(),
                  cursor: isDragging ? "grabbing" : "grab",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {projects.map((project) => (
                  <div key={project.id} className="min-w-full px-4">
                    <div className="group relative overflow-hidden rounded-lg shadow-md h-80">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => openModal(project)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                        <span className="text-orange text-sm font-medium">
                          {project.category}
                        </span>
                        <h3 className="text-white text-xl font-bold">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          // Desktop view with grid
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-md h-80"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => openModal(project)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                  <span className="text-orange text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        )}
        {selectedImage && (
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <XIcon size={32} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
                  <p className="text-orange text-sm font-medium mb-1">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
export default FeaturedWorks;
