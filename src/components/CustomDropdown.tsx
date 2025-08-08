"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, CheckIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  variant?: "navbar" | "form";
  disabled?: boolean;
  error?: string;
  multiSelect?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  className = "",
  variant = "form",
  disabled = false,
  error,
  multiSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedValues = Array.isArray(value) ? value : [value];
  const selectedOptions = options.filter((option) =>
    selectedValues.includes(option.value)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setIsFocused(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string) => {
    if (multiSelect) {
      const currentValues = Array.isArray(value) ? value : [value];
      const isSelected = currentValues.includes(optionValue);

      if (isSelected) {
        // Remove from selection
        const newValues = currentValues.filter((v) => v !== optionValue);
        onChange(newValues);
      } else {
        // Add to selection
        const newValues = [...currentValues, optionValue];
        onChange(newValues);
      }
      // Don't close dropdown for multi-select
    } else {
      onChange(optionValue);
      setIsOpen(false);
      setIsFocused(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  // Variant-specific styles
  const getVariantStyles = () => {
    if (variant === "navbar") {
      return {
        container: "relative",
        button:
          "flex items-center text-white hover:text-lightblue transition-colors focus:outline-none font-medium cursor-pointer",
        dropdown:
          "absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl py-2 z-10 border border-gray-100",
        option:
          "flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150",
        selected: "text-lightblue font-medium",
        placeholder: "text-white",
      };
    } else {
      return {
        container: "relative",
        button: `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all duration-200 ${
          error
            ? "border-red-500 focus:ring-red-200"
            : isFocused
            ? "border-teal focus:ring-teal/20"
            : "border-gray-300 focus:border-teal"
        } ${
          disabled
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-white cursor-pointer"
        }`,
        dropdown:
          "absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200 max-h-60 overflow-y-auto",
        option:
          "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 cursor-pointer",
        selected: "text-teal font-medium bg-teal/5",
      };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`${styles.container} ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
      )}

      <div
        className={styles.button}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`dropdown-${label || "default"}`}
        aria-label={label || "Dropdown"}
      >
        <div className={variant === "navbar" ? "" : "flex-1 text-left"}>
          {selectedOptions.length > 0 ? (
            <div className="flex items-center">
              {multiSelect ? (
                <span className="text-sm">
                  {selectedOptions.length === 1
                    ? selectedOptions[0].label
                    : `${selectedOptions.length} services selected`}
                </span>
              ) : (
                <>
                  {selectedOptions[0].icon && (
                    <span className="mr-2">{selectedOptions[0].icon}</span>
                  )}
                  <span className={styles.selected}>
                    {selectedOptions[0].label}
                  </span>
                </>
              )}
            </div>
          ) : (
            <span
              className={variant === "navbar" ? "text-white" : "text-gray-500"}
            >
              {placeholder}
            </span>
          )}
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ChevronDownIcon
            size={16}
            className={`ml-2 flex-shrink-0 ${
              variant === "navbar" ? "text-white" : ""
            }`}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`dropdown-${label || "default"}`}
            className={styles.dropdown}
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95,
              transformOrigin: "top",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {options.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.2,
                }}
                whileHover={
                  variant === "navbar"
                    ? {}
                    : {
                        x: 5,
                        transition: { duration: 0.1 },
                      }
                }
              >
                <div
                  className={`${styles.option} ${
                    selectedValues.includes(option.value) ? styles.selected : ""
                  }`}
                  onClick={() => handleOptionClick(option.value)}
                  role="option"
                  aria-selected={selectedValues.includes(option.value)}
                >
                  <div className="flex items-center flex-1">
                    {multiSelect && (
                      <input
                        type="checkbox"
                        checked={selectedValues.includes(option.value)}
                        readOnly
                        className="mr-2 h-4 w-4 text-teal focus:ring-teal border-gray-300 rounded"
                      />
                    )}
                    {option.icon && <span className="mr-2">{option.icon}</span>}
                    <span>{option.label}</span>
                  </div>
                  {selectedValues.includes(option.value) && !multiSelect && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckIcon size={16} className="text-teal" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default CustomDropdown;
