import { Layers, Layers3, Wrench, Droplets } from "lucide-react";
import greenpanel from "../assets/greenpanel.jpg";
import egPly from "../assets/eg-ply-certified-polywoods.jpg";
import fevicol from "../assets/fevicol.png";
import sleekimg from "../assets/sleek.jpeg";
import egmarkimg from "../assets/product-images/EG Mark.png";
import egbondimg from "../assets/product-images/EG Bond.png";
import egbondBWBimg from "../assets/product-images/EG Bond BWB.png";
import egbondMRimg from "../assets/product-images/EG PLY ( MR ).png";
import egedgeply from "../assets/product-images/EG EDGE.png";
import egplybsl from "../assets/product-images/EG Ply ( BSL ).png";
import vitomrimg from "../assets/product-images/Vito ( MR ).png";
import vitobwrimg from "../assets/product-images/Vito ( BWR ).png";
import vitobslimg from "../assets/product-images/Vito ( BSL ).png";
import vitocoreimg from "../assets/product-images/Vito Core.png";
import lcplywoodimg from "../assets/product-images/LC Plywood.png";
import ncmrimg from "../assets/product-images/NC ( MR ).png";
import ncimg from "../assets/product-images/NC.png";
import ncplyimg from "../assets/product-images/NC PLywood.png";
import wbcblockimg from "../assets/product-images/WBC Blockboard.png";
import shutteringimg from "../assets/product-images/Shuttering Plywood.png";

export const PRODUCT_CATEGORIES = [
  { id: "plywood", name: "EG Plywood", icon: Layers },
  { id: "laminates", name: "Decorative Laminates", icon: Layers3 },
  { id: "veneers", name: "Natural Veneers", icon: Layers },
  { id: "hardware", name: "Architectural Hardware", icon: Wrench },
  { id: "adhesives", name: "Strong Adhesives", icon: Droplets },
  { id: "mdf", name: "MDF & HDF", icon: Layers3 },
];

export const PRODUCTS = [
  // Plywood
  {
    id: "ply-eg-mark-710",
    category: "plywood",
    name: "EG Mark 710",
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
    name: "EG Edge",
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
    name: "Vito (MR)",
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
    name: "Vito (BWR)",
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
    name: "Vito BSL",
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
    id: "ply-vito-core",
    category: "plywood",
    name: "Vito Core",
    tagline: "Solid Hardwood Core Frame-Grade Block Board",
    description:
      "Heavy structural solid core board designed for main door framing, internal partition support pillars, and customized heavy-duty workshop bench templates.",
    basePrice: 115,
    unit: "sq.ft",
    thicknesses: ["19mm"],
    stock: {
      "19mm": 9,
    },
    rating: 4.6,
    reviews: 41,
    image: vitocoreimg,
    specs: {
      "Core Wood": "Dense Core Wood Filler battens",
      Resin: "Structural Amino Plast Glue",
      "Glue Shear Strength": "> 1100 N",
      "Moisture Content": "8% - 12%",
    },
    features: [
      "High Mechanical Force Tolerance",
      "Thick 19mm Block core",
      "Excellent Screw Retention Power",
      "Negligible Warping Coefficients",
    ],
  },
  {
    id: "ply-lc",
    category: "plywood",
    name: "LC Plywood",
    tagline: "Budget Commercial Dry Framing Utility Board",
    description:
      "Optimized for temporary setups, false ceiling back-supports, custom exhibition stalls, and affordable residential furniture framework units.",
    basePrice: 62,
    unit: "sq.ft",
    thicknesses: ["18mm"],
    stock: {
      "18mm": 0,
    },
    rating: 4.2,
    reviews: 38,
    image: lcplywoodimg,
    specs: {
      "Core Wood": "Plantation Timbers & Poplar mix",
      Resin: "Urea Formaldehyde adhesive",
      "Glue Shear Strength": "> 850 N",
      "Moisture Content": "11% - 14%",
    },
    features: [
      "Thick 18mm board",
      "Very Easy Carpentry Operations",
      "Perfect for Internal Framing",
    ],
  },
  {
    id: "ply-nc-mr",
    category: "plywood",
    name: "NC (MR)",
    tagline: "Moisture Resistant General Interior Utility Board",
    description:
      "A flexible and cost-competitive plywood choice for generic commercial cabinets, modular interior partitions, and wardrobe backing frameworks.",
    basePrice: 58,
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
      Warranty: "3 Years Store Warranty",
    },
    features: [
      "3 Years Warranty",
      "Excellent Cost Efficiency",
      "Lightweight & easy-to-handle",
      "Nails easily with standard pins",
    ],
  },
  {
    id: "ply-nc-6x4",
    category: "plywood",
    name: "NC (6x4)",
    tagline: "Custom Dimension 6x4 Plywood Sheet",
    description:
      "Specially dimensioned 6ft by 4ft sheets to fulfill specific door structures or reduce custom cutting waste in modular room corners.",
    basePrice: 56,
    unit: "sq.ft",
    thicknesses: ["12mm"],
    stock: {
      "12mm": 8,
    },
    rating: 4.4,
    reviews: 49,
    image: ncimg,
    specs: {
      "Core Wood": "Softwood Mix core sheets",
      Resin: "Commercial resin adhesive",
      "Moisture Content": "11% - 13%",
    },
    features: [
      "Unique 6x4 Feet Sheet Layout",
      "Less Carpenter Wood Waste",
      "Uniform Calibrated Texture",
      "Nail-Friendly Density",
    ],
  },
  {
    id: "ply-nc",
    category: "plywood",
    name: "NC Plywood",
    tagline: "Budget Commercial Dry Interior Sheet",
    description:
      "Thin commercial utility plywood ideal for wardrobe backings, drawer bottoms, ceiling panel designs, and craft wood projects.",
    basePrice: 50,
    unit: "sq.ft",
    thicknesses: ["6mm"],
    stock: {
      "6mm": 24,
    },
    rating: 4.1,
    reviews: 67,
    image: ncplyimg,
    specs: {
      "Core Wood": "Poplar & Softwood Core",
      Resin: "Commercial Urea adhesive",
      "Moisture Content": "11% - 14%",
    },
    features: [
      "Extremely Cost Efficient",
      "Flexible 6mm thickness",
      "Highly adaptable for general craft",
      "Easy custom cutting with tools",
    ],
  },
  {
    id: "ply-wbc",
    category: "plywood",
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
    name: "Suede Finish Decorative Laminates",
    tagline: "1.0mm Premium Suede & Matte Scratch-Resistant Sheets",
    description:
      "Bring sophisticated textures and deep pigments to your interior cabinetry. These high-pressure laminates are equipped with surface-defending properties protecting them from scuffs and moisture.",
    basePrice: 1400, // per sheet
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
    name: "High Gloss Acrylic Luxury Laminates",
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

  // Veneers
  {
    id: "ven-01",
    category: "veneers",
    name: "Exotic Teak Natural Wood Veneers",
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
    name: "Smoked Oak Luxury Architectural Veneer",
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

  // Hardware
  {
    id: "hw-01",
    category: "hardware",
    name: "Soft-Close Premium Hydraulic Kitchen Hinges",
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
    name: "Heavy Duty Soft-Close Drawer Telescopic Slides",
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

  // Adhesives
  {
    id: "adh-01",
    category: "adhesives",
    name: "SuperBond Extreme Waterproof Polyurethane D3 Adhesive",
    tagline: "The ultimate wood adhesive with 5x fast bond strength",
    description:
      "Designed specifically for wood-to-wood joinery, laminate pasting, and complex veneer pressing. Dries into a transparent layer, ensuring clean carpentry lines while providing unshakeable, water-resistant bonds.",
    basePrice: 280,
    unit: "kg",
    sizes: ["1 kg", "5 kg", "10 kg", "20 kg", "50 kg"],
    rating: 4.9,
    reviews: 175,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
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
    name: "RapidFix Fast Setting Adhesive (Aliphatic)",
    tagline: "No-nails high bond rapid assembly adhesive",
    description:
      "Ideal for fast architectural paneling and quick framing. This aliphatic resin adhesive sets twice as fast as normal white glue and is sandable, paintable, and completely unaffected by wood stains or finishes.",
    basePrice: 320,
    unit: "kg",
    sizes: ["1 kg", "10 kg"],
    rating: 4.6,
    reviews: 69,
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    specs: {
      "Setting Time": "Initial grab in 5 minutes, sandable in 30 minutes",
      "Bond Strength": "4000 PSI (Stronger than the wood itself)",
      "Heat Resistance": "Up to 110°C without melting bond",
      Solvent: "Cleans up with water easily before drying",
    },
    features: [
      "High sandability - won't clog sanding belts",
      "Unaffected by lacquers or varnishes",
      "Strong initial tack reduces need for clamps",
    ],
  },

  // MDF
  {
    id: "mdf-01",
    category: "mdf",
    name: "HDWR (High Density Water Resistant) Boards",
    tagline:
      "High-density water-resistant boards engineered for durable interiors",
    description:
      "HDWR (High Density Water Resistant) Boards are premium engineered wood panels designed for superior strength, durability, and moisture resistance. Manufactured with high-density wood fibers and advanced resin technology, these boards are ideal for modular kitchens, wardrobes, bathroom vanities, wall paneling, and commercial furniture. Their smooth surface and excellent machinability make them perfect for laminates, veneers, acrylic finishes, and CNC routing applications.",
    basePrice: 33,
    unit: "sq.ft",
    thicknesses: [
      "3mm",
      "3.3mm",
      "5.5mm",
      "7.5mm",
      "11mm",
      "16mm",
      "16.75mm",
      "18mm",
      "25mm",
      "30mm",
    ],
    rating: 4.8,
    reviews: 104,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200",
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
    name: "Exterior MDF (MR Grade)",
    tagline: "Sleek pre-laminated dense fiber boards for modular spaces",
    description:
      "Perfect for fast-paced corporate office desks, lightweight dividers, and budget-friendly shelves. Comes pre-pressed with beautiful suede or woodgrain laminates on both sides to save time and polishing labor.",
    basePrice: 25,
    unit: "sq.ft",
    thicknesses: [
      "1.7mm",
      "1.9mm",
      "2.1mm",
      "2.7mm",
      "3.3mm",
      "4mm",
      "4.6mm",
      "5.5mm",
      "7mm",
      "7.3mm",
      "9.75mm",
      "11mm",
      "14.5mm",
      "16mm",
      "16.5mm",
      "17mm",
      "18mm",
      "25mm",
      "30mm",
    ],
    rating: 4.5,
    reviews: 57,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=1200",
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
    name: "Interior MDF (REG Grade)",
    tagline:
      "Smooth, durable, and versatile boards for modern interior applications",
    description:
      "Interior MDF (Medium Density Fiberboard) is engineered for furniture, wardrobes, partitions, wall paneling, and modular interiors. Its uniform density and smooth surface make it ideal for laminates, veneers, paints, and decorative finishes. Designed for dry indoor environments, it delivers excellent machinability, dimensional stability, and a premium finish for residential and commercial projects.",
    basePrice: 25,
    unit: "sq.ft",
    thicknesses: [
      "1.7mm",
      "1.9mm",
      "2.1mm",
      "2.7mm",
      "3.3mm",
      "4mm",
      "4.6mm",
      "5.5mm",
      "7mm",
      "7.3mm",
      "9.75mm",
      "11mm",
      "14.5mm",
      "16mm",
      "16.5mm",
      "17mm",
      "18mm",
      "25mm",
      "30mm",
    ],
    rating: 4.5,
    reviews: 57,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
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
  { name: "EG Ply", logo: egPly },
  { name: "Fevicol", logo: fevicol },
  { name: "Sleek", logo: sleekimg },
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
