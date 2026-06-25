import { Layers, Layers3, Wrench, Droplets } from "lucide-react";
import greenpanel from "../assets/greenpanel.jpg";
// import egPly from "../assets/eg-ply-certified-polywoods.jpg";
// import fevicol from "../assets/fevicol.png";
// import sleekimg from "../assets/sleek.jpeg";
import egmarkimg from "../assets/product-images/EG Mark.webp";
import egbondimg from "../assets/product-images/EG Bond.webp";
import egbondBWBimg from "../assets/product-images/EG Bond BWB.webp";
import egbondMRimg from "../assets/product-images/EG PLY ( MR ).webp";
import egedgeply from "../assets/product-images/EG EDGE.webp";
import egplybsl from "../assets/product-images/EG Ply ( BSL ).webp";
import vitomrimg from "../assets/product-images/NC Vito (MR).webp";
import vitobwrimg from "../assets/product-images/NC Vito ( BWR ).webp";
import vitobslimg from "../assets/product-images/NC Vito ( BSL ).webp";
import ncmrimg from "../assets/product-images/NC Vito Ply ( MR ).webp";
import wbcblockimg from "../assets/product-images/WBC Blockboard.webp";
import shutteringimg from "../assets/product-images/Shuttering Plywood.webp";
import hdmrimg from "../assets/product-images/HDMR.webp";
import interiormdfimg from "../assets/product-images/Interior MDF.webp";
import exteriormdfimg from "../assets/product-images/Exterior MDF.webp";
import jainsonLogo from "../assets/our-brand/jainson.png";
import ebcoLogo from "../assets/our-brand/ebco.webp";
import sleekLogo from "../assets/our-brand/sleek.jpeg";
import habloLogo from "../assets/our-brand/hablologo.png";
import woodsLogo from "../assets/our-brand/woods.png";
import yaleLogo from "../assets/our-brand/yale.webp";
import godrejLogo from "../assets/our-brand/godrej.webp";
import europaLogo from "../assets/our-brand/europa.webp";
import newmikaLogo from "../assets/our-brand/newmika.jpeg";
import centurylamLogo from "../assets/our-brand/centurylaminates.webp";
import greenlamLogo from "../assets/our-brand/greenlam_laminates.png";
import ivasLogo from "../assets/our-brand/ivas.jpg";
import sharonLogo from "../assets/our-brand/sharon.png";
import centuryvenLogo from "../assets/our-brand/century.png";
import greenplyLogo from "../assets/our-brand/greenply.png";
import realplyLogo from "../assets/our-brand/realply.jpeg";
// import greenpanelLogo from "../assets/our-brand/logo-Greenpanel.png";
import egplyLogo from "../assets/our-brand/eg-ply-certified-polywoods.jpg";
import fevicolLogo from "../assets/our-brand/fevicol.png";

export const PRODUCT_CATEGORIES = [
  { id: "plywood", name: "EG Plywood", icon: Layers },
  { id: "laminates", name: "Decorative Laminates", icon: Layers3 },
  { id: "veneers", name: "Natural Veneers", icon: Layers },
  { id: "hardware", name: "Architectural Hardware", icon: Wrench },
  { id: "adhesives", name: "Strong Adhesives", icon: Droplets },
  { id: "mdf", name: "MDF & HDF", icon: Layers3 },
];

export const BRANDS = [
  // Plywood, MDF & HDF
  {
    id: "egply",
    name: "EG Ply",
    logo: egplyLogo,
    category: "plywood_mdf",
    description:
      "Our in-house premium partner providing high-specification IS:710 Marine Boiling Water Proof calibrated plywood.",
    details:
      "EG Mark 710 calibrated marine plywood, EG Bond premium MR/BWP boards, both-side pre-laminated boards, and high-density shuttering sheets.",
  },
  {
    id: "greenpanel",
    name: "Greenpanel",
    logo: greenpanel,
    category: "plywood_mdf",
    description:
      "India's largest manufacturer of MDF and HDF, producing ultra-flat and dense calibrated panels.",
    details:
      "HDWR water-resistant boards, calibrated premium plywood, interior MDF sheets, and pre-laminated office boards.",
  },
  // Hardwares
  {
    id: "century-laminates",
    name: "Century Laminates",
    logo: centurylamLogo,
    category: "laminates",
    description:
      "India's trusted name for virus-proof, highly durable laminates with excellent surface stability.",
    details:
      "Lucida super-gloss panels, ViroKill antibacterial sheets, matte textures, and designer cabinet sheets.",
  },
  {
    id: "century-veneers",
    name: "Century Veneers",
    logo: centuryvenLogo,
    category: "veneers",
    description:
      "Flawless recon wood panels and premium timber faces designed for premium interior applications.",
    details:
      "Senzura recon veneers, fumed oak sheets, book-matched teak, and eco-certified backing fleeces.",
  },
  {
    id: "sharon",
    name: "Sharon",
    logo: sharonLogo,
    category: "veneers",
    description:
      "Exquisite natural wood veneers backed with durable marine substrates for premium wall paneling.",
    details:
      "Sharon Gold teak veneers, reconstituted designer sheets, fumed wood, and moisture-free timber overlays.",
  },
  {
    id: "ebco",
    name: "Ebco",
    logo: ebcoLogo,
    category: "hardware",
    description:
      "India's leading brand for smart office and home furniture hardware systems and sliding fittings.",
    details:
      "Precision soft-close slides, heavy drawer runners, hydraulic hinges, modular workdesk elements, and wardrobe rails.",
  },
  {
    id: "jainson",
    name: "Jainson",
    logo: jainsonLogo,
    category: "hardware",
    description:
      "Renowned for designer cabinet pulls and furniture hardware that add a touch of classic elegance.",
    details:
      "Premium cabinet handles, solid brass knobs, utility locks, and sleek metal hinges with anti-tarnish protection.",
  },
  {
    id: "sleek",
    name: "Sleek",
    logo: sleekLogo,
    category: "hardware",
    description:
      "An Asian Paints venture, Sleek is the hallmark of modern modular kitchens and space-saving organizers.",
    details:
      "Rust-resistant kitchen wire baskets, pull-outs, corner carousels, tall units, and modular steel framework.",
  },
  {
    id: "hablo",
    name: "Hablo",
    logo: habloLogo,
    category: "hardware",
    description:
      "Delivers Italian-inspired luxury handles, high-end knobs, and sleek architectural fittings.",
    details:
      "Zinc alloy handles, glass sliding locks, designer doors pulls, and premium concealed cabinet fittings.",
  },
  {
    id: "woods",
    name: "Woods",
    logo: woodsLogo,
    category: "hardware",
    description:
      "Pioneers in high-load sliding wardrobe systems, silent runners, and heavy-duty hinges.",
    details:
      "Wardrobe sliding door fittings, soft-close roller channels, glass doors clips, and heavy architectural hinges.",
  },
  {
    id: "yale",
    name: "Yale",
    logo: yaleLogo,
    category: "hardware",
    description:
      "A world-famous pioneer in smart security systems, biometric locks, and high-tensile brass padlocks.",
    details:
      "Fingerprint digital locks, numeric main door locks, RFID card locks, safe deposit lockers, and door closers.",
  },
  {
    id: "godrej",
    name: "Godrej",
    logo: godrejLogo,
    category: "hardware",
    description:
      "The gold standard of household security in India, providing unpickable mechanical and digital locks.",
    details:
      "Ultra Tribolt rim locks, heavy deadbolt main locks, cupboard locks, biometric safes, and mechanical padlocks.",
  },
  {
    id: "europa",
    name: "Europa",
    logo: europaLogo,
    category: "hardware",
    description:
      "Celebrated for innovative locking designs, dimple key security, and high physical force resistance.",
    details:
      "Hexabolt central main locks, night latches, padlocks with localized LED lights, and shutter locks.",
  },
  // Laminates
  {
    id: "newmika",
    name: "New Mika",
    logo: newmikaLogo,
    category: "laminates",
    description:
      "A luxury brand by Greenlam, providing trendy high-pressure laminate designs and colors.",
    details:
      "1.0mm decorative laminates, scuff-resistant suede finishes, woodgrain overlays, and anti-fingerprint panels.",
  },

  {
    id: "greenlam",
    name: "Greenlam",
    logo: greenlamLogo,
    category: "laminates",
    description:
      "Asia's largest laminate manufacturer, delivering globally acclaimed textures and eco-friendly panels.",
    details:
      "Anti-fungal laminate sheets, HD wood designs, custom digital laminates, and compact structural sheets.",
  },
  {
    id: "ivas",
    name: "Ivas",
    logo: ivasLogo,
    category: "laminates",
    description:
      "Part of Goldmedal Group, providing premium modular kitchen surfaces and elegant PVC laminates.",
    details:
      "90-degree bendable PVC laminates, acrylic high-gloss overlays, metallic textures, and modern pastel sheets.",
  },
  // Veneers
  {
    id: "greenply",
    name: "Greenply Veneers",
    logo: greenplyLogo,
    category: "veneers",
    description:
      "Rich decorative veneers sourced from sustainable global forests, bringing raw nature into spaces.",
    details:
      "Wood Crest exotic veneers, American Walnut faces, European Dark Oak sheets, and calibrated backings.",
  },
  {
    id: "realply",
    name: "Realply",
    logo: realplyLogo,
    category: "veneers",
    description:
      "Renowned for eco-friendly, premium natural teak and fumed wood veneers with rich grain patterns.",
    details:
      "Premium teak veneers, crown-cut wood sheets, reconstituted designs, and matching edge strips.",
  },

  // Adhesives
  {
    id: "fevicol",
    name: "Fevicol",
    logo: fevicolLogo,
    category: "adhesives",
    description:
      "Pidilite's Fevicol is the ultimate standard for woodworking adhesives, guaranteeing lifelong bonding for wood-to-wood joinery and laminates.",
    details:
      "Fevicol SH (synthetic resin), Fevicol Marine (waterproof adhesive), D3 polyurethane wood adhesives, and rapid-curing aliphatic resins.",
  },
];

export const PRODUCTS = [
  // Plywood
  {
    id: "ply-eg-mark-710",
    category: "plywood",
    brand: "egply",
    name: "EG Mark 710 Plywood",
    tagline: "Premium IS:710 Marine Boiling Water Proof Plywood",
    description:
      "Our top-tier structural grade plywood. Crafted with selected high-density hardwood veneers and bonded with premium undiluted phenol-formaldehyde resin. Offers extraordinary moisture immunity for extreme conditions.",
    basePrice: 125,
    unit: "sq.ft",
    thicknesses: ["12mm", "18mm", "19mm"],
    stock: {
      "12mm": 64,
      "18mm": 23,
      "19mm": 91,
    },
    rating: 4.9,
    reviews: 185,
    image: egmarkimg,
    specs: {
      "Core Wood": "100% Selected Hardwood & Gurjan",
      Resin: "Phenol Formaldehyde (BWP Grade)",
      "Glue Shear Strength": "> 1380 N",
      "Moisture Content": "8% - 11%",
      Warranty: "20 Years Certified Warranty",
    },
    features: [
      "20 Years Warranty",
      "Boiling Water Proof (BWP)",
      "Termite & Borer Proof",
      "Zero Core Gap Calibrated",
    ],
  },
  {
    id: "ply-eg-bond-bwb",
    category: "plywood",
    brand: "egply",
    name: "EG Bond (BWB)",
    tagline: "High-Performance Waterproof Bonded Plywood",
    description:
      "Boasting optimal structural elasticity and outstanding water immunity. Crafted using high-quality synthetic phenolics to sustain extreme moisture levels without losing structural configuration.",
    basePrice: 110,
    unit: "sq.ft",
    thicknesses: ["16mm", "19mm"],
    stock: {
      "16mm": 46,
      "19mm": 85,
    },
    rating: 4.8,
    reviews: 142,
    image: egbondBWBimg,
    specs: {
      "Core Wood": "Gurjan & Hardwood Mix Core",
      Resin: "Fortified Phenolic Glue (BWP Grade)",
      "Glue Shear Strength": "> 1300 N",
      "Moisture Content": "8% - 12%",
      Warranty: "15 Years Certified Warranty",
    },
    features: [
      "15 Years Warranty",
      "Waterproof Phenol Bond",
      "Excellent Under-Sink Framework Stability",
      "Zero Warpage Guarantee",
    ],
  },
  {
    id: "ply-eg-bond",
    category: "plywood",
    brand: "egply",
    name: "EG Bond Plywood",
    tagline: "Premium Structural Synthetic Resin Bonded Plywood",
    description:
      "Specially engineered using optimized wood veneer layers bonded with premium synthetic adhesive. Delivers superb load-bearing capacity and durability for residential furniture frameworks.",
    basePrice: 98,
    unit: "sq.ft",
    thicknesses: ["6mm", "8mm", "12mm"],
    stock: {
      "6mm": 14,
      "8mm": 41,
      "12mm": 26,
    },
    rating: 4.7,
    reviews: 121,
    image: egbondimg,
    specs: {
      "Core Wood": "Eucalyptus & Selected Hardwoods",
      Resin: "Fortified Synthetic Resin",
      "Glue Shear Strength": "> 1200 N",
      "Moisture Content": "9% - 12%",
    },
    features: [
      "Excellent Mechanical Strength",
      "High Core Density",
      "Superior Surface Flatness",
    ],
  },
  {
    id: "ply-eg-ply-mr",
    category: "plywood",
    brand: "egply",
    name: "EG Ply (MR)",
    tagline: "Premium Moisture Resistant Commercial Plywood",
    description:
      "A stellar commercial interior grade plywood treated with protective additives to defend against borers. Perfect for home dry furniture, closets, and decorative panels.",
    basePrice: 68,
    unit: "sq.ft",
    thicknesses: ["8mm"],
    stock: {
      "8mm": 8,
    },
    rating: 4.6,
    reviews: 95,
    image: egbondMRimg,
    specs: {
      "Core Wood": "Selected Plantation Timber Mix",
      Resin: "Melamine Fortified MUF Glue",
      "Glue Shear Strength": "> 1000 N",
      "Moisture Content": "10% - 13%",
      Warranty: "5 Years Warranty",
    },
    features: [
      "5 Years Warranty",
      "Excellent Termite Defense",
      "Uniform Grain Alignment",
      "Highly Paintable & Polishable",
    ],
  },
  {
    id: "ply-eg-edge",
    category: "plywood",
    brand: "egply",
    name: "EG Edge Plywood",
    tagline: "Extreme Precision Calibrated Edging Board",
    description:
      "A special-dimension calibrated panel showcasing supreme edge-holding strength. Best suited for high-accuracy modern architectural framing where precise corner joints are paramount.",
    basePrice: 75,
    unit: "sq.ft",
    thicknesses: ["15mm"],
    stock: {
      "15mm": 101,
    },
    rating: 4.7,
    reviews: 104,
    image: egedgeply,
    specs: {
      "Core Wood": "Eucalyptus Broadleaf Wood",
      Resin: "Modified Phenolic Urea Bond",
      "Glue Shear Strength": "> 1150 N",
      "Moisture Content": "9% - 11%",
      Warranty: "8 Years Store Warranty",
    },
    features: [
      "8 Years Warranty",
      "Calibrated Flatness",
      "Excellent Edge Integrity",
      "Anti-fission Core Properties",
    ],
  },
  {
    id: "ply-eg-ply-bsl",
    category: "plywood",
    brand: "egply",
    name: "EG Ply (BSL)",
    tagline: "Both Side Laminated (BSL) Pre-Finished Wood Board",
    description:
      "Saves carpenter pressing costs and precious working hours. Comes laminated on both sides with high-quality pre-pressed design overlays, rendering it instantly ready for cabinets.",
    basePrice: 115,
    unit: "sq.ft",
    thicknesses: ["16mm"],
    stock: {
      "16mm": 14,
    },
    rating: 4.8,
    reviews: 79,
    image: egplybsl,
    specs: {
      "Core Wood": "High-Density Hardwood Fiber Core",
      Resin: "Fortified Melamine Binder",
      Overlay: "Double Side Decorative Shutter Sheet",
      "Moisture Content": "8% - 11%",
    },
    features: [
      "Double-Sided Protection",
      "Saves Pressed Laminate Costs",
      "Excellent Screw & Hinge Anchoring",
      "Scratch Resistant surface",
    ],
  },
  {
    id: "ply-vito-mr",
    category: "plywood",
    brand: "egply",
    name: "NC Vito Ply (MR)",
    tagline: "Reliable Moisture Resistant Interior Plywood",
    description:
      "Designed as a robust, cost-effective interior solution for home paneling, commercial room dividers, wardrobe backing, and generic architectural interior works.",
    basePrice: 65,
    unit: "sq.ft",
    thicknesses: ["8mm", "12mm", "18mm"],
    stock: {
      "8mm": 18,
      "12mm": 19,
      "18mm": 58,
    },
    rating: 4.6,
    reviews: 115,
    image: vitomrimg,
    specs: {
      "Core Wood": "Eucalyptus & Selected Poplar Core",
      Resin: "Urea Formaldehyde Adhesive",
      "Glue Shear Strength": "> 1000 N",
      "Moisture Content": "10% - 14%",
    },
    features: [
      "Excellent Cost-Benefit Ratio",
      "Carpenter Friendly Easy Cutting",
      "High Flatness Index",
    ],
  },
  {
    id: "ply-vito-bwr",
    category: "plywood",
    brand: "egply",
    name: "NC Vito Ply (BWR)",
    tagline: "Boiling Water Resistant Structural Grade Plywood",
    description:
      "Resilient and sturdy, Vito BWR is designed to withhold high humidity zones. Built using composite hardwood cross-bands to support reliable structural carpentry frameworks.",
    basePrice: 82,
    unit: "sq.ft",
    thicknesses: ["8mm", "12mm", "18mm"],
    stock: {
      "8mm": 10,
      "12mm": 47,
      "18mm": 0,
    },
    rating: 4.5,
    reviews: 98,
    image: vitobwrimg,
    specs: {
      "Core Wood": "Mixed Hardwood Core Wood",
      Resin: "Fortified Urea Phenolic Resin",
      "Glue Shear Strength": "> 1050 N",
      "Moisture Content": "9% - 13%",
    },
    features: [
      "Boiling Water Resistant (BWR)",
      "Borer Resistant Chemical Barrier",
      "Strong Core Adhesion",
    ],
  },
  {
    id: "ply-vito-bsl",
    category: "plywood",
    brand: "egply",
    name: "NC Vito Ply (BSL)",
    tagline: "Double Sided Pre-Laminated Economy Cabinet Board",
    description:
      "An excellent choice for sliding drawers, wardrobe inner shelves, and utility racks. Pre-laminated with durable layers on both sides for effortless maintenance and cleanliness.",
    basePrice: 88,
    unit: "sq.ft",
    thicknesses: ["8mm"],
    stock: {
      "8mm": 6,
    },
    rating: 4.4,
    reviews: 55,
    image: vitobslimg,
    specs: {
      "Core Wood": "Softwood & Poplar core veneer",
      Resin: "Commercial Binder",
      Overlay: "Melamine Impregnated Solid Suede Sheet",
      "Moisture Content": "10% - 13%",
    },
    features: [
      "Pre-finished Surfaces",
      "No Polish Work Required",
      "Perfect for Wardrobe Interiors",
      "Fungus Proof Outer Film",
    ],
  },
  {
    id: "ply-nc-mr",
    category: "plywood",
    brand: "egply",
    name: "NC (MR) Plywood",
    tagline: "Moisture Resistant General Interior Utility Board",
    description:
      "A flexible and cost-competitive plywood choice for generic commercial cabinets, modular interior partitions, and wardrobe backing frameworks.",
    basePrice: 68,
    unit: "sq.ft",
    thicknesses: ["8mm", "12mm", "25mm"],
    stock: {
      "8mm": 70,
      "12mm": 0,
      "25mm": 14,
    },
    rating: 4.3,
    reviews: 83,
    image: ncmrimg,
    specs: {
      "Core Wood": "Poplar core wood sheets",
      Resin: "Standard Urea adhesive",
      "Glue Shear Strength": "> 880 N",
      "Moisture Content": "10% - 14%",
    },
    features: [
      "Excellent Cost Efficiency",
      "Lightweight & easy-to-handle",
      "Nails easily with standard pins",
    ],
  },
  {
    id: "ply-wbc",
    category: "plywood",
    brand: "egply",
    name: "WBC Blockboard",
    tagline: "Waterproof Wood-Based Composite Plywood Board",
    description:
      "A special wood-based composite panel offering outstanding insulation properties and extreme moisture defense. Ideal for door panels and toilet partition backing.",
    basePrice: 95,
    unit: "sq.ft",
    thicknesses: ["8mm", "12mm"],
    stock: {
      "8mm": 5,
      "12mm": 3,
    },
    rating: 4.7,
    reviews: 58,
    image: wbcblockimg,
    specs: {
      "Core Wood": "High-Density Wood Fiber Batten board",
      Resin: "Hydrophobic Phenol Resin Matrix",
      "Moisture Content": "8% - 10%",
    },
    features: [
      "High Thermal Insulation",
      "Outstanding Hydrophobic Cover",
      "Anti-Fungal Core Formulation",
    ],
  },
  {
    id: "ply-shuttering",
    category: "plywood",
    brand: "egply",
    name: "Shuttering Plywood",
    tagline: "High Compression Structural Concrete Formwork Plywood",
    description:
      "Heavy structural formwork plywood built to withstand massive concrete pouring pressure. Specially coated on the surface with glossy phenolic film for perfect clean concrete mold release.",
    basePrice: 88,
    unit: "sq.ft",
    thicknesses: ["12mm"],
    stock: {
      "12mm": 30,
    },
    rating: 4.8,
    reviews: 91,
    image: shutteringimg,
    specs: {
      "Core Wood": "Dense Premium Eucalyptus Wood",
      Resin: "100% Phenol Formaldehyde Glue",
      Surface: "120 GSM Phenol Coated Film layer",
      "Moisture Content": "6% - 9%",
      Warranty: "Certified Concrete Reusable Cycles",
    },
    features: [
      "High Compression Rating",
      "Phenol Film Mirror Finish",
      "Perfect For Site Concrete Casting",
      "Resistant to chemical/cement alkaline solutions",
    ],
  },

  // Laminates
  {
    id: "lam-01",
    category: "laminates",
    brand: "greenlam",
    name: "Greenlam Suede Finish Decorative Laminates",
    tagline: "1.0mm Premium Suede & Matte Scratch-Resistant Sheets",
    description:
      "Bring sophisticated textures and deep pigments to your interior cabinetry. These high-pressure laminates are equipped with surface-defending properties protecting them from scuffs and moisture.",
    basePrice: 1400,
    unit: "sheet (8x4 ft)",
    sizes: ["8ft x 4ft"],
    finishes: ["Suede", "Ultra-Matte", "Textured Woodgrain"],
    rating: 4.8,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    specs: {
      Thickness: "1.0mm",
      "Standard Dimensions": "1220mm x 2440mm",
      "Heat Resistance": "Up to 180°C",
      Antibacterial: "Yes, Certified Silver-Ion technology",
      Resistances: "Scratch, Stain, and Water Splash resistant",
    },
    features: [
      "Vibrant colorfast pigments",
      "Non-porous hygienic surface",
      "Crack and craze resistant",
      "Easiest maintenance",
    ],
  },
  {
    id: "lam-02",
    category: "laminates",
    brand: "century-laminates",
    name: "Century High Gloss Acrylic Luxury Laminates",
    tagline: "Mirror-like Premium High Gloss Kitchen Laminates",
    description:
      "Turn your kitchen and vanity shutter panels into statements of pure luxury. Our premium high-gloss acrylic laminates provide absolute depth of color, UV protection, and supreme scratch shielding.",
    basePrice: 2800,
    unit: "sheet (8x4 ft)",
    sizes: ["8ft x 4ft"],
    finishes: ["High Gloss Mirror", "Glossy Metallic"],
    rating: 4.9,
    reviews: 83,
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
    specs: {
      Thickness: "1.2mm",
      "Gloss Level": "> 95 Gloss Units (GU)",
      "Core Material": "Premium Acrylic on PVC Backing",
      "Color Fastness": "Excellent (UV Resistant)",
      "Scratch Rating": "4H Hardness certified",
    },
    features: [
      "Zero Orange Peel reflection",
      "Scratch Resistant Coating",
      "Color stays vibrant for 15+ years",
      "Waterproof design",
    ],
  },
  {
    id: "lam-newmika-suede",
    category: "laminates",
    brand: "newmika",
    name: "NewMika Premium Matte Laminates",
    tagline:
      "1.0mm scratch-resistant decorative sheets with rich pigment depth",
    description:
      "Available in a wide range of sophisticated solids, textures, and wood patterns. Crafted to deliver premium scuff defense for modern residential kitchens and workspaces.",
    basePrice: 1650,
    unit: "sheet (8x4 ft)",
    sizes: ["8ft x 4ft"],
    finishes: ["Suede", "Matte", "Woodgrain"],
    rating: 4.7,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    specs: {
      Thickness: "1.0mm",
      Size: "1220mm x 2440mm",
      Finish: "Super Matte & Fine Suede",
      Resistance: "Impact, stain and boil resistant",
    },
    features: [
      "100% phenolic paper backing",
      "Vibrant UV-resistant pigments",
      "Anti-crack flexibility",
      "Easy maintenance and cleanability",
    ],
  },
  {
    id: "lam-century-antibac",
    category: "laminates",
    brand: "century-laminates",
    name: "CenturyLaminates Silver-Ion Antibacterial Sheets",
    tagline: "Hygienic 1.0mm high-pressure laminates with ViroKill technology",
    description:
      "Specially treated sheets that kill 99.9% of bacteria and viruses on touch. Highly recommended for dining tables, kitchen countertops, and kids' bedroom furniture.",
    basePrice: 1950,
    unit: "sheet (8x4 ft)",
    sizes: ["8ft x 4ft"],
    finishes: ["Suede", "Glossy"],
    rating: 4.9,
    reviews: 106,
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
    specs: {
      Technology: "ViroKill Nanotechnology",
      Thickness: "1.0mm",
      Size: "1220mm x 2440mm",
      Certification: "ISO 22196 Certified Antibacterial",
    },
    features: [
      "Kills 99.9% microbes on surface",
      "Excellent resistance to hot water spills",
      "Termite and borer resistant backing",
      "Scratch-resistant coating",
    ],
  },
  {
    id: "lam-ivas-gloss",
    category: "laminates",
    brand: "ivas",
    name: "IVAS Decorative PVC Laminates",
    tagline: "High-gloss scratch-resistant PVC laminate sheets for cabinetry",
    description:
      "IVAS laminate sheets offer high reflectivity and vibrant colors, making them perfect for sleek modular kitchen shutters, wardrobe doors, and modern cabinets.",
    basePrice: 2200,
    unit: "sheet (8x4 ft)",
    sizes: ["8ft x 4ft"],
    finishes: ["Acrylic High Gloss", "PVC Suede"],
    rating: 4.6,
    reviews: 31,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    specs: {
      Material: "Premium PVC Base",
      Thickness: "1.2mm",
      "Gloss Level": "90+ Gloss Units (GU)",
      Flexibility: "Can bend up to 90 degrees for post-forming",
    },
    features: [
      "Bends seamlessly for post-forming edges",
      "High UV-fade resistance",
      "Zero orange peel effect",
      "Completely waterproof and rustproof",
    ],
  },

  // Veneers
  {
    id: "ven-01",
    category: "veneers",
    brand: "realply",
    name: "Realply Exotic Teak Natural Wood Veneers",
    tagline: "Hand-picked Natural Lumber Face Veneers",
    description:
      "Each slice of veneer is a unique canvas of nature. Sourced from sustainable teak plantations in Burma, our Exotic Teak Veneers add real natural wealth, warmth, and unrivaled prestige to your high-end furniture.",
    basePrice: 220,
    unit: "sq.ft",
    thicknesses: ["0.55mm face thickness on MDF backing"],
    rating: 5.0,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
    specs: {
      "Wood Species": "Tectona grandis (Burma Teak)",
      "Grain Pattern": "Crown Cut / Quarter Cut options",
      "Backing Material": "FSC Certified Craft Paper or Fleece backing",
      "Moisture Level": "8% - 10%",
      "Splicing Method": "Book matched / Slip matched",
    },
    features: [
      "Rich Natural Golden Brown Hue",
      "Can be polished/stained infinitely",
      "Eco-friendly authentic wood",
      "Acoustically sound dampening qualities",
    ],
  },
  {
    id: "ven-02",
    category: "veneers",
    brand: "greenply",
    name: "Greenply Smoked Oak Luxury Veneer",
    tagline: "Fumed Dark Oak Premium Modern Veneers",
    description:
      "Achieve the sleek, ultra-premium dark charcoal/cocoa tones of contemporary Italian architecture. Fumed under high-pressure steam, this Oak veneer gains deep colors throughout the fibers, not just on the surface.",
    basePrice: 280,
    unit: "sq.ft",
    thicknesses: ["0.6mm face thickness"],
    rating: 4.9,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    specs: {
      "Wood Species": "Quercus robur (European Oak)",
      Process: "Deep Fuming / Smoking",
      "Grain Pattern": "Straight Rift Grain / Quilted",
      Flexibility: "High (fleeced back)",
      Application: "Wall panelling, Executive offices, Luxury cabinets",
    },
    features: [
      "Exotic dark tone with natural sheen",
      "Chemical-free coloring process",
      "Consistent tone over vast wall sections",
      "Extremely resilient to UV fade",
    ],
  },
  {
    id: "ven-sharon-gold",
    category: "veneers",
    brand: "sharon",
    name: "Sharon Gold Natural Burma Teak Veneer",
    tagline: "Genuine high-grade Burma teak veneer on thick Gurjan base",
    description:
      "Sharon Gold veneers display the ultimate rich golden grains of premium Burma teak logs. Exquisitely book-matched for luxury wall panels and high-end executive desks.",
    basePrice: 240,
    unit: "sq.ft",
    thicknesses: ["4mm total (0.6mm face)"],
    rating: 4.9,
    reviews: 35,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
    specs: {
      "Face Wood": "Genuine Burma Teak",
      Backing: "IS:303 Premium Gurjan Ply",
      Glue: "Melamine Urea Formaldehyde",
      Warranty: "10 Years Warpage Warranty",
    },
    features: [
      "Deep golden-brown woodgrains",
      "Rich natural oil content preserves luster",
      "Sanded and ready for polyurethane polish",
      "Eco-friendly lumber harvesting",
    ],
  },
  {
    id: "ven-century-senzura",
    category: "veneers",
    brand: "century-veneers",
    name: "Century Senzura Premium Recon Wood Veneer",
    tagline: "Reconstituted designer wood veneers with flawless uniform grains",
    description:
      "Perfect for matching large veneer panels in hotel lobbies and premium wardrobe suites. Senzura eliminates natural wood defects for continuous, flawless design paths.",
    basePrice: 210,
    unit: "sq.ft",
    thicknesses: ["3.5mm total"],
    rating: 4.8,
    reviews: 49,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    specs: {
      Type: "Reconstituted Wood Face",
      "Backing Layer": "Flexible non-woven fleece",
      "Adhesive Class": "E0 Eco-Emission certified",
      Size: "8ft x 4ft sheets",
    },
    features: [
      "Zero grain deviation across sheets",
      "Extremely easy to bend on curved surfaces",
      "No natural cracks or knots",
      "Perfect for modern minimalist panels",
    ],
  },

  // Hardware
  {
    id: "hw-01",
    category: "hardware",
    brand: "ebco",
    name: "Ebco Soft-Close Premium Hydraulic Hinges",
    tagline: "3D Adjustable Nickel-Plated Soft Close Cabinet Hinges",
    description:
      "Ensure absolute silence and smooth closing motion for every cabinet door in your household. Tested for over 200,000 cycles, these heavy-duty soft-close hinges prevent slamming and protect finger joints.",
    basePrice: 190,
    unit: "pair",
    rating: 4.8,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    specs: {
      Material: "Cold-rolled Steel & Solid Brass piston",
      Finish: "Triple Layer Anti-rust Nickel plating",
      "Opening Angle": "105°",
      Adjustment: "3D adjustments (Vertical, Horizontal, Depth)",
      "Cycle Test": "Certified 200,000 Open-Close Cycles",
    },
    features: [
      "Integrated hydraulic dampener",
      "Clip-on mechanism for easy door install",
      "Corrosion-proof build",
      "Heavy load capacity (up to 8kg per pair)",
    ],
  },
  {
    id: "hw-02",
    category: "hardware",
    brand: "ebco",
    name: "Ebco Heavy Duty Soft-Close Drawer Slides",
    tagline: "Full Extension Ball Bearing Kitchen & Wardrobe Runners",
    description:
      "Upgrade your drawers to professional level smooth gliding. Made of ultra-tough cold-rolled steel, these slides carry massive pots, heavy winter garments, and storage boxes with effortless, whisper-quiet action.",
    basePrice: 650,
    unit: "pair",
    sizes: ["12 inch", "14 inch", "16 inch", "18 inch", "20 inch", "22 inch"],
    rating: 4.7,
    reviews: 132,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    specs: {
      "Weight Capacity": "45 Kg dynamic load rating",
      Material: "High-tensile Cold Rolled Steel",
      Mechanism: "Double Row Solid Steel Ball Bearings",
      Extension: "100% Full Extension",
      "Closing system": "Double spring-loaded copper cylinder dampener",
    },
    features: [
      "Zero sagging at maximum weight",
      "Silent and continuous slide path",
      "Trigger disconnect lever for drawer removal",
      "Anti-dust self-cleaning bearing tracks",
    ],
  },
  {
    id: "hw-jainson-pulls",
    category: "hardware",
    brand: "jainson",
    name: "Jainson Brass Cabinet Pull Handles",
    tagline: "Solid designer brass pulls with anti-tarnish protective coating",
    description:
      "Handcrafted from premium brass, the Jainson Cabinet Pull handles elevate wardrobes and cabinets with a timeless antique metallic sheen.",
    basePrice: 450,
    unit: "piece",
    thicknesses: ["96mm", "128mm", "192mm"],
    rating: 4.8,
    reviews: 42,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    specs: {
      Material: "Premium Solid Brass",
      Finish: "Antique Brass Lacquered",
      "Available Sizes": "96mm to 192mm hole centers",
      Warranty: "5 Years Tarnish Warranty",
    },
    features: [
      "100% Solid Brass Construction",
      "Anti-Tarnish Protective Layer",
      "Includes Mounting Screws",
      "Elegant Traditional Design",
    ],
  },
  {
    id: "hw-hablo-mortise",
    category: "hardware",
    brand: "hablo",
    name: "Hablo Luxury Satin Mortise Handle Set",
    tagline: "Ergonomic zinc alloy mortise handles for interior doors",
    description:
      "Experience Italian design and smooth movement. The Hablo mortise sets feature high-precision return springs and sleek satin chrome finishes.",
    basePrice: 1850,
    unit: "set",
    rating: 4.7,
    reviews: 39,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    specs: {
      Material: "Zinc Alloy",
      Finish: "Satin Chrome Dual Tone",
      "Lock Cylinder": "Brass 60mm double key cylinder",
      Warranty: "7 Years Mechanical Warranty",
    },
    features: [
      "Heavy-duty return spring",
      "Corrosion resistant zinc body",
      "Computerized key system",
      "Silent latch operation",
    ],
  },
  {
    id: "hw-woods-sliding",
    category: "hardware",
    brand: "woods",
    name: "Woods Heavy-Duty Wardrobe Sliding System",
    tagline: "Top-hung silent sliding channels for wooden wardrobe doors",
    description:
      "Designed for seamless wardrobe door movements. The Woods sliding door system utilizes heavy-duty nylon rollers and solid aluminum top tracks to support heavy doors up to 80kg.",
    basePrice: 3200,
    unit: "set",
    rating: 4.9,
    reviews: 51,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    specs: {
      "Weight Capacity": "80 Kg per door panel",
      Material: "Extruded Aluminum & Ball Bearing Nylon Wheels",
      Warranty: "5 Years Wear Warranty",
    },
    features: [
      "Anti-jump safety guide wheels",
      "Ultra-silent ball bearing rollers",
      "Durable anodized track finish",
      "Adjustable height alignment",
    ],
  },
  {
    id: "hw-yale-smartlock",
    category: "hardware",
    brand: "yale",
    name: "Yale YDM 7116 GP Digital Smart Lock",
    tagline: "Biometric, PIN, RFID card and mechanical key smart handle",
    description:
      "Upgrade your main entrance with state-of-the-art security. Featuring multiple access methods, scramble PIN code capability, and intrusion alarm systems.",
    basePrice: 16500,
    unit: "unit",
    rating: 5.0,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    specs: {
      "Access Methods": "Fingerprint, PIN, RFID, Mechanical Key, Mobile App",
      Material: "Zinc Diecasting & ABS",
      "Battery Life": "Approx. 1 Year (10 uses/day)",
      Warranty: "2 Years Manufacturer Warranty",
    },
    features: [
      "Biometric scanner stores 100 prints",
      "Fake PIN code protection",
      "Intrusion & temperature alarm",
      "Low battery warning with emergency power port",
    ],
  },
  {
    id: "hw-godrej-rim",
    category: "hardware",
    brand: "godrej",
    name: "Godrej Ultra Tribolt Rim Lock",
    tagline:
      "Ultra-secure main door lock with triple deadbolts and pull-handle",
    description:
      "The legendary home security choice. Features three heavy-duty brass deadbolts and Godrej's signature Ultra technology with 14-pin computerized dimple keys.",
    basePrice: 2850,
    unit: "unit",
    rating: 4.8,
    reviews: 147,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    specs: {
      Mechanism: "14-Pin Computerized Key System",
      Deadbolts: "3 Heavy Solid Brass Bolts",
      Material: "High strength steel scratch-proof case",
      Warranty: "15 Years Mechanical Warranty",
    },
    features: [
      "Triple strength locking bolts",
      "Hold-back button prevents lock-out",
      "Includes solid brass safety pull-handle",
      "Unpickable dimple key lock cylinder",
    ],
  },
  {
    id: "hw-europa-hexabolt",
    category: "hardware",
    brand: "europa",
    name: "Europa Hexabolt Main Door Lock",
    tagline: "High-tensile steel 6-bolt lock for complete security",
    description:
      "Engineered to withstand extreme physical force. The Europa Hexabolt system anchors six independent deadbolts into a solid steel striker plate, backed by a dimpled key core.",
    basePrice: 3400,
    unit: "unit",
    rating: 4.9,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    specs: {
      Deadbolts: "6 High-tensile Steel Bolts",
      Keys: "4 Dimple Keys with Key LED Light",
      Finish: "Satin Nickel-plated finish",
      Warranty: "15 Years Warranty",
    },
    features: [
      "Six-bolt extreme anchorage",
      "Sturdy integrated steel pull-knob",
      "Built-in LED locator on key fob",
      "Rust-proof internal mechanism",
    ],
  },
  {
    id: "hw-sleek-basket",
    category: "hardware",
    brand: "sleek",
    name: "Sleek Stainless Steel Kitchen Drawer Organizer",
    tagline: "Heavy-duty wire basket pull-out drawer organizer",
    description:
      "Elevate kitchen utilities with Sleek's stainless steel wire pull-out baskets. Designed to roll on soft-close tracks, it handles pots, dinnerware, and pantry packs seamlessly.",
    basePrice: 2450,
    unit: "unit",
    rating: 4.8,
    reviews: 43,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    specs: {
      Material: "304 Grade Stainless Steel",
      "Weight Capacity": "30 Kg dynamic",
      Warranty: "10 Years Rust-Free Warranty",
    },
    features: [
      "Rust-free electroplated chrome finish",
      "Compatible with major telescopics runner systems",
      "Sturdy double wire framework",
      "Specially designed plate and cup separators included",
    ],
  },

  // Adhesives
  {
    id: "adh-01",
    category: "adhesives",
    brand: "fevicol",
    name: "Fevicol Marine Waterproof D3 PVA Adhesive",
    tagline: "The ultimate wood adhesive with 5x fast bond strength",
    description:
      "Designed specifically for wood-to-wood joinery, laminate pasting, and complex veneer pressing. Dries into a transparent layer, ensuring clean carpentry lines while providing unshakeable, water-resistant bonds.",
    basePrice: 280,
    unit: "kg",
    sizes: ["1 kg", "5 kg", "10 kg", "20 kg", "50 kg"],
    rating: 4.9,
    reviews: 175,
    image: fevicolLogo,
    specs: {
      "Base Chemistries": "Polyvinyl Acetate (PVA) dispersion",
      "Water Resistance": "EN 204 D3 certified waterproof class",
      "Setting Time": "Quick tack in 15-20 minutes, cured in 2 hours",
      Coverage: "150 - 180 sq.ft per kg",
      "Shelf Life": "18 months from manufacturing",
    },
    features: [
      "Water, Heat, and Mold resistant",
      "Tackles hardwoods and MDF effortlessly",
      "Zero VOC emissions (Safe for indoor assembly)",
      "Highly transparent dry film line",
    ],
  },
  {
    id: "adh-02",
    category: "adhesives",
    brand: "fevicol",
    name: "Fevicol SH Ultimate Synthetic Resin",
    tagline: "Pidilite's flagship high-strength woodwork white glue",
    description:
      "The undisputed market leader for wood bonding. Fevicol SH offers exceptional bond strength that exceeds the strength of wood itself. Ideal for all wood assemblies and laminations.",
    basePrice: 240,
    unit: "kg",
    sizes: ["1 kg", "5 kg", "10 kg", "20 kg"],
    rating: 4.9,
    reviews: 295,
    image: fevicolLogo,
    specs: {
      Material: "Synthetic Resin Adhesive",
      "Bond Strength": "Exceeds wood shear strength",
      "Drying Time": "Initial grab in 4-6 hours, fully cured in 24 hours",
    },
    features: [
      "Lifelong bonding durability",
      "Saves panel assembly time with solid tack",
      "Resistant to high stress joints",
    ],
  },

  // MDF
  {
    id: "mdf-01",
    category: "mdf",
    brand: "greenpanel",
    name: "Greenpanel HDWR Water Resistant Boards",
    tagline:
      "High-density water-resistant boards engineered for durable interiors",
    description:
      "HDWR (High Density Water Resistant) Boards are premium engineered wood panels designed for superior strength, durability, and moisture resistance. Manufactured with high-density wood fibers and advanced resin technology, these boards are ideal for modular kitchens, wardrobes, bathroom vanities, wall paneling, and commercial furniture.",
    basePrice: 33,
    unit: "sq.ft",
    thicknesses: [
      "3mm",
      "5.5mm",
      "7.5mm",
      "11mm",
      "16mm",
      "18mm",
      "25mm",
      "30mm",
    ],
    rating: 4.8,
    reviews: 104,
    image: hdmrimg,
    specs: {
      "Core Density": "850–900 Kg/m³",
      "Water Resistance": "Enhanced moisture-resistant technology",
      "Surface Quality": "Ultra-smooth and uniform finish",
      Machinability: "Excellent for cutting, drilling, and CNC routing",
      "Dimensional Stability": "Minimal expansion and warping",
    },
    features: [
      "High-density construction for superior strength",
      "Excellent water and moisture resistance",
      "Ideal for modular kitchens and wardrobes",
      "Smooth surface for laminates, acrylics, and veneers",
      "Suitable for CNC carving and decorative paneling",
      "Termite and borer resistant",
      "Long-lasting dimensional stability",
      "Perfect for residential and commercial interiors",
    ],
  },
  {
    id: "mdf-02",
    category: "mdf",
    brand: "greenpanel",
    name: "Greenpanel Exterior MDF (MR Grade)",
    tagline: "Sleek pre-laminated dense fiber boards for modular spaces",
    description:
      "Perfect for fast-paced corporate office desks, lightweight dividers, and budget-friendly shelves. Comes pre-pressed with beautiful suede or woodgrain laminates on both sides to save time and polishing labor.",
    basePrice: 25,
    unit: "sq.ft",
    thicknesses: ["1.7mm", "5.5mm", "11mm", "16mm", "18mm", "25mm", "30mm"],
    rating: 4.5,
    reviews: 57,
    image: exteriormdfimg,
    specs: {
      "Core Density": "720 Kg/m³",
      Overlay: "Dual-sided Melamine Impregnated paper",
      "Scratch resistance": "Moderate (1.5N loading capability)",
      "Swell Rate": "< 12% swell rate in 24 hrs submersion",
    },
    features: [
      "Instant ready-to-use boards",
      "Saves enormous carpenter pressing labor",
      "Perfect flatness guarantees no warping",
      "Eco-certified wood sourcing",
    ],
  },
  {
    id: "mdf-03",
    category: "mdf",
    brand: "greenpanel",
    name: "Greenpanel Interior MDF (REG Grade)",
    tagline:
      "Smooth, durable, and versatile boards for modern interior applications",
    description:
      "Interior MDF (Medium Density Fiberboard) is engineered for furniture, wardrobes, partitions, wall paneling, and modular interiors. Its uniform density and smooth surface make it ideal for laminates, veneers, paints, and decorative finishes.",
    basePrice: 25,
    unit: "sq.ft",
    thicknesses: ["1.7mm", "5.5mm", "11mm", "16mm", "18mm", "25mm", "30mm"],
    rating: 4.5,
    reviews: 57,
    image: interiormdfimg,
    specs: {
      "Core Density": "700–750 Kg/m³",
      "Surface Finish": "Smooth & Uniform",
      "Moisture Resistance": "Suitable for Interior Dry Areas",
      Machinability: "Excellent for Cutting, Routing & Carving",
    },
    features: [
      "Perfect for modular furniture and wardrobes",
      "Smooth surface ideal for laminates, veneers, and paint",
      "High dimensional stability and flatness",
      "Easy to cut, shape, and machine",
      "Suitable for residential and commercial interiors",
      "Eco-friendly engineered wood construction",
    ],
  },
];

export const BRAND_PARTNERS = [
  { name: "Greenpanel", logo: greenpanel },
  { name: "EG Ply", logo: egplyLogo },
  { name: "Fevicol", logo: fevicolLogo },
  { name: "Sleek", logo: sleekLogo },
];

export const TESTIMONIALS = [
  {
    name: "Ar. Rajesh Malhotra",
    role: "Principal Architect, Malhotra & Partners",
    text: "RJ Plywood has been our go-to partner for premium interior projects. Their collection of Teak Veneers and heavy-duty marine plywood is of stellar quality. Never had a single warping complaint in 8 years.",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Karthik Raja",
    role: "Proprietor, WoodWorks Modular Kitchens",
    text: "The calibrated marine plywood and HDMR boards from RJ Plywood are perfectly flat, which is critical for making modular kitchen shutters. Plus, their soft-close hinges save me money while offering high durability.",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Meenakshi Sundaram",
    role: "Homeowner, Madurai",
    text: "We bought all the laminates and wardrobes accessories for our dream home from RJ Plywood. The owners guided us on choosing 1mm suede laminates over expensive alternatives. Truly honest people and great pricing!",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
  },
];

export const TIMELINE_EVENTS = [
  {
    year: "2005",
    title: "The Humble Beginning",
    desc: "RJ Plywood was founded in a modest 600 sq.ft store, stocking basic commercial plywood and hardware items.",
  },
  {
    year: "2010",
    title: "Expansion & Brands",
    desc: "Partnered with national giants like Greenply and CenturyPly, expanding our catalog to architectural grade materials.",
  },
  {
    year: "2015",
    title: "Modular Transformation",
    desc: "Introduced high-gloss acrylic laminates, premium hydraulic hardware, and modern European modular fittings.",
  },
  {
    year: "2020",
    title: "Tech Adoption & HDMR",
    desc: "Launched full-scale digital testing for boiling water proofing and added eco-friendly low-emission formaldehyde items.",
  },
  {
    year: "2024",
    title: "A Legacy of Trust",
    desc: "Catering to over 10,000 satisfied customers, 500+ premium interior projects, and now launching digital consultation portals.",
  },
];

export const GALLERY_PHOTOS = [
  {
    id: 1,
    title: "Luxury Veneered Ceiling",
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Premium Modular Kitchen",
    category: "kitchen",
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "3D CNC Routed HDMR Panel",
    category: "panels",
    image:
      "https://images.unsplash.com/photo-1610557892470-76d747eed00b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Acrylic Soft-Close Cabinetry",
    category: "kitchen",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Fumed Oak Office Panelling",
    category: "office",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Exotic Teak Wardrobe Finish",
    category: "interior",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  },
];
