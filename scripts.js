// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Project data for reuse across pages
const projectsData = [
  {
    id: "custom-battery-business",
    title: "Custom Lithium Battery Pack Business",
    description:
      "Building a complete business around custom lithium-ion battery pack design and manufacturing for specialized applications.",
    status: "in-progress",
    category: "Business",
    tags: ["Business", "Battery", "Manufacturing", "Custom"],
    coverImage:
      "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    startDate: "2023-06-01",
    technologies: [
      "Lithium-ion",
      "BMS Design",
      "CAD",
      "Manufacturing",
      "Testing",
    ],
    challenges: [
      "Regulatory compliance for battery manufacturing",
      "Quality control at small scale",
      "Supply chain management",
      "Safety protocols and insurance",
    ],
  },
  {
    id: "lithium-pack-tester",
    title: "Lithium Battery Pack Load Tester",
    description:
      "Programmable load tester for safely discharging lithium battery packs to storage voltage before long-term storage.",
    status: "completed",
    category: "Tool",
    tags: ["Battery", "Testing", "Arduino", "Safety"],
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    startDate: "2023-11-01",
    completedDate: "2024-01-15",
    technologies: [
      "Arduino",
      "Power Electronics",
      "Sensors",
      "Data Logging",
      "Safety Systems",
    ],
    challenges: [
      "Heat dissipation in high-current loads",
      "Precision voltage measurement across wide range",
      "Safety system redundancy",
      "User interface design for complex parameters",
    ],
  },
  {
    id: "spot-welder-controller",
    title: "Spot Welder Controller for Battery Assembly",
    description:
      "Precision timing controller for microwave transformer-based spot welder to reliably join nickel strips in battery pack construction.",
    status: "completed",
    category: "Tool",
    tags: ["Welding", "Battery", "Arduino", "Assembly"],
    coverImage:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    startDate: "2023-10-15",
    completedDate: "2024-01-08",
    technologies: [
      "Microcontroller",
      "Power Electronics",
      "Zero-crossing Detection",
      "Safety Systems",
    ],
    challenges: [
      "High-voltage safety implementation",
      "Precise timing with AC power",
      "Heat management in transformer",
      "Consistent energy delivery across voltage variations",
    ],
  },
  {
    id: "modular-case-system",
    title: "Modular Battery Case System",
    description:
      "Flexible enclosure system for custom battery packs with standardized mounting and connection interfaces.",
    status: "in-progress",
    category: "Mechanical",
    tags: ["3D Print", "Design", "Mechanical", "Battery"],
    coverImage:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    startDate: "2024-01-20",
    technologies: [
      "3D Printing",
      "CAD Design",
      "Materials Engineering",
      "Manufacturing",
    ],
    challenges: [
      "Balancing flexibility with structural integrity",
      "Standardizing interfaces while maintaining customization",
      "Material selection for various environments",
      "Cost optimization for small production runs",
    ],
  },
  {
    id: "reflow-oven-build",
    title: "SMD Reflow Oven Conversion",
    description:
      "Converting a standard toaster oven into a precision reflow oven for surface-mount PCB assembly with PID temperature control.",
    status: "completed",
    category: "Tool",
    tags: ["Reflow", "SMD", "Arduino", "Temperature"],
    coverImage:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    startDate: "2023-09-01",
    completedDate: "2023-12-22",
    technologies: [
      "Temperature Control",
      "PID Control",
      "Thermocouples",
      "Safety Systems",
      "PCB Assembly",
    ],
    challenges: [
      "Achieving temperature uniformity in modified oven",
      "PID tuning for large thermal mass system",
      "Safety system integration without compromising performance",
      "Profile optimization for various solder paste types",
    ],
  },
];

// Project categories and statuses for filtering
const projectCategories = ["Business", "Tool", "Mechanical"];
const projectStatuses = ["planning", "in-progress", "completed", "paused"];

// Gallery images data
const galleryImagesData = [
  {
    id: "bms-pcb-top",
    title: "BMS PCB Top Layer",
    description:
      "Top layer view of custom Battery Management System PCB with protection circuits and balancing",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["PCB", "BMS", "Battery", "Protection"],
    category: "PCBs",
    uploadDate: "2024-01-15",
  },
  {
    id: "load-tester-board",
    title: "Load Tester Control Board",
    description:
      "Arduino-based control board for the lithium battery pack load tester",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["PCB", "Arduino", "Testing", "Control"],
    category: "PCBs",
    uploadDate: "2024-01-10",
  },
  {
    id: "welder-controller-pcb",
    title: "Spot Welder Controller PCB",
    description:
      "High-voltage isolation PCB for spot welder timing control with optoisolated drivers",
    url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    tags: ["PCB", "Welding", "Isolation", "Safety"],
    category: "PCBs",
    uploadDate: "2024-01-05",
  },
  {
    id: "battery-assembly-station",
    title: "Battery Pack Assembly Station",
    description:
      "Complete workstation setup for lithium battery pack assembly with spot welder and testing equipment",
    url: "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    tags: ["Assembly", "Workstation", "Battery", "Tools"],
    category: "Photos",
    uploadDate: "2024-01-20",
  },
  {
    id: "reflow-oven-interior",
    title: "Reflow Oven Interior View",
    description:
      "Interior view of converted toaster oven showing temperature sensor placement and heating elements",
    url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    tags: ["Reflow", "Temperature", "SMD", "Assembly"],
    category: "Photos",
    uploadDate: "2023-12-22",
  },
  {
    id: "cell-testing-setup",
    title: "Battery Cell Testing Setup",
    description:
      "Individual cell testing and characterization setup with load tester and data logging",
    url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    tags: ["Testing", "Battery", "Characterization", "Data"],
    category: "Photos",
    uploadDate: "2024-01-18",
  },
  {
    id: "case-system-cad",
    title: "Modular Case System CAD",
    description:
      "3D CAD model of modular battery case system showing component interfaces and assembly",
    url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
    tags: ["CAD", "3D Print", "Design", "Mechanical"],
    category: "Designs",
    uploadDate: "2024-01-25",
  },
  {
    id: "pack-schematic",
    title: "Battery Pack Schematic",
    description:
      "Electrical schematic for 7S lithium battery pack with integrated BMS and protection",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["Schematic", "Battery", "BMS", "Design"],
    category: "Designs",
    uploadDate: "2024-01-12",
  },
  {
    id: "battery-pack-render",
    title: "Custom Battery Pack Render",
    description:
      "3D render of completed custom battery pack showing final form factor and connection interfaces",
    url: "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    tags: ["Render", "Battery", "3D", "Visualization"],
    category: "Mockups",
    uploadDate: "2024-01-08",
  },
  {
    id: "welder-assembly-render",
    title: "Spot Welder Assembly Render",
    description:
      "Complete spot welder assembly showing transformer, controller, and safety enclosure",
    url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    tags: ["Render", "Welding", "Assembly", "3D"],
    category: "Mockups",
    uploadDate: "2023-12-15",
  },
  {
    id: "lithium-cells-18650",
    title: "High-Quality 18650 Lithium Cells",
    description:
      "Premium 18650 lithium-ion cells used in custom battery pack construction",
    url: "https://images.unsplash.com/photo-1609392553633-ba5e73b09cca?w=800&h=600&fit=crop",
    tags: ["Battery", "18650", "Lithium", "Components"],
    category: "Parts",
    uploadDate: "2024-01-22",
  },
  {
    id: "nickel-strips-pure",
    title: "Pure Nickel Welding Strips",
    description:
      "0.15mm pure nickel strips for battery pack interconnection and spot welding",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["Nickel", "Welding", "Strips", "Components"],
    category: "Parts",
    uploadDate: "2024-01-20",
  },
  {
    id: "mosfet-modules",
    title: "High-Power MOSFET Modules",
    description:
      "Power MOSFET modules used in load tester for high-current discharge applications",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["MOSFET", "Power", "Electronics", "Components"],
    category: "Parts",
    uploadDate: "2024-01-15",
  },
];

// Utility functions
function getStatusColor(status) {
  switch (status) {
    case "completed":
      return "status-completed";
    case "in-progress":
      return "status-in-progress";
    case "planning":
      return "status-planning";
    case "paused":
      return "status-paused";
    default:
      return "status-paused";
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateForm(formData) {
  const errors = [];

  if (!formData.name || formData.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.push("Please enter a valid email address");
  }

  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.push("Subject must be at least 5 characters long");
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }

  return errors;
}

// Download functionality
function downloadImage(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Local storage utilities
function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn("Could not save to localStorage:", error);
  }
}

function loadFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn("Could not load from localStorage:", error);
    return null;
  }
}

// Search and filter utilities
function normalizeString(str) {
  return str.toLowerCase().trim();
}

function matchesSearch(item, searchQuery, searchFields) {
  if (!searchQuery) return true;

  const query = normalizeString(searchQuery);
  return searchFields.some((field) => {
    const value = item[field];
    if (Array.isArray(value)) {
      return value.some((v) => normalizeString(v).includes(query));
    }
    return normalizeString(String(value || "")).includes(query);
  });
}

function matchesFilter(item, filterValue, filterField) {
  if (!filterValue) return true;

  const value = item[filterField];
  if (Array.isArray(value)) {
    return value.includes(filterValue);
  }
  return value === filterValue;
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    projectsData,
    galleryImagesData,
    projectCategories,
    projectStatuses,
    getStatusColor,
    formatDate,
    validateForm,
    downloadImage,
    saveToLocalStorage,
    loadFromLocalStorage,
    matchesSearch,
    matchesFilter,
  };
}
