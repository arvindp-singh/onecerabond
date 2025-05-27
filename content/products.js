/**
 * Product Categories and Products Data
 * This file contains all product information displayed on the website
 */

// Product categories with their descriptions
export const productCategories = [
  {
    id: "tile-adhesives",
    name: "Tile Adhesives",
    description: "High-performance adhesives for various tile installation needs",
  },
  {
    id: "grouts",
    name: "Grouts",
    description: "Quality grouts for perfect tile finishing",
  },
  {
    id: "admixtures",
    name: "Admixtures",
    description: "Performance-enhancing additives for adhesives and grouts",
  },
  {
    id: "cleaners",
    name: "Cleaners",
    description: "Specialized cleaners for tile maintenance",
  },
]

// Detailed product information
export const products = [
  {
    id: "slight-adhesive-ob340",
    name: "Slight Adhesive (OB340) Type 2",
    category: "tile-adhesives",
    image: "/imgs/Slight_Adhesive.jpeg",
    shortDescription: "Polymer based single component Slight Set adhesive for floor and wall applications.",
    description: `It is polymer based single component Slight Set adhesive. It will mix with water to install small & medium size ceramic tiles using Slight Set method of application. Adhesive admix in place of water can be used for adhesive performance improvement.

Application:- It is specially designed to fix ceramic tiles on floor & wall in interior dry areas & can be used up to maximum bed thickness of 12mm. Before application, area needs to be clean & roughened.

Developed with USA-based adhesive technology for superior bonding strength and durability.`,
    features: [
      "Polymer based single component",
      "For small & medium size ceramic tiles",
      "Can be used with Adhesive admix for improved performance",
      "Maximum bed thickness of 12mm",
      "USA-based adhesive technology",
    ],
    applications: ["Interior dry areas", "Floor & wall applications"],
  },
  {
    id: "slight-adhesive-ob330",
    name: "Slight Adhesive (OB330) Type 1",
    category: "tile-adhesives",
    image: "/imgs/Slight_Adhesive_OB330.jpeg",
    shortDescription: "Polymer based single component Slight Set adhesive for floor applications.",
    description: `It is polymer based single component Slight Set adhesive. It will mix with water to install small & medium size ceramic tiles using Slight Set method of application. Adhesive admix in place of water can be used for adhesive performance improvement.
    
Application:- It is specially designed to fix ceramic tiles on floor in interior dry areas & can be used up to maximum bed thickness of 12mm. Before application, area needs to be clean & roughened.

Formulated with advanced USA-based polymer technology for exceptional adhesion properties.`,
    features: [
      "Polymer based single component",
      "For small & medium size ceramic tiles",
      "Can be used with Adhesive admix for improved performance",
      "Maximum bed thickness of 12mm",
      "USA-based polymer technology",
    ],
    applications: ["Interior dry areas", "Floor applications"],
  },
  {
    id: "slight-adhesive-ob350",
    name: "Slight Adhesive (OB350) Type 3",
    category: "tile-adhesives",
    image: "/imgs/Slight_Adhesive_OB350.jpeg",
    shortDescription: "Highly flexible polymer based Slight Set adhesive for versatile applications.",
    description: `It is highly flexible polymer based Slight Set adhesive, it will mix with water to fix small, medium & large size ceramic tiles, vitrified tiles, fully vitrified tiles, mosaic tiles, stones using Slight Set method of application. Adhesive admix in place of water can be used for adhesive performance improvement.
    
Application - It is specially designed to fix small, medium & large size tiles, stones on interior floor/wall & exterior floor & wall applications. It can be used in dry or wet areas & can be used up to maximum bed thickness of 12mm. Before application, area needs to be clean & roughened.

Incorporates USA-based flexible polymer technology for superior performance in challenging environments.`,
    features: [
      "Highly flexible polymer based",
      "For small, medium & large size tiles",
      "Works with ceramic, vitrified, fully vitrified, and mosaic tiles",
      "Can be used with Adhesive admix for improved performance",
      "Maximum bed thickness of 12mm",
      "USA-based flexible polymer technology",
    ],
    applications: ["Interior floor & wall", "Exterior floor & wall", "Dry or wet areas"],
  },
  {
    id: "epoxy-adhesive-ob450",
    name: "Epoxy Adhesive (OB450)",
    category: "tile-adhesives",
    image: "/imgs/Epoxy_Adhesive_OB450.jpeg",
    shortDescription: "Three component epoxy adhesive for superior bonding on various surfaces.",
    description: `It is three component set adhesive. Three component namely Resin, Hardener & Filler to be mixed with each other to make uniform paste for application. It is used to fix any size ceramic, vitrified, fully vitrified tiles, mosaic tiles, stones etc using Slight Set method of application.
    
Application: It is specially designed to fix small, medium & large size tiles, stones on interior floor/wall & exterior floor/wall applications where substrate can be of different category. It can be used in dry or wet areas & can be used up to maximum bed thickness of 12mm. Before application, area needs to be clean.

Engineered with USA-based epoxy technology for exceptional chemical resistance and bonding strength.`,
    features: [
      "Three component system (Resin, Hardener & Filler)",
      "Extremely high bond strength",
      "High chemical resistance",
      "Non toxic & non flammable",
      "Shock & impact resistance",
      "Water resistance",
      "Smooth & easily workable",
      "USA-based epoxy technology",
    ],
    applications: [
      "Cement Plaster",
      "Cement Mortar bed",
      "Concrete",
      "Brick Masonry",
      "Concrete Masonry",
      "Steel, aluminum, Copper Surface",
      "Vinyl tiles",
      "Plywood & Wood surface",
      "Glass surface",
      "Gypsum board",
    ],
  },
  {
    id: "epoxy-grout",
    name: "Epoxy Grout",
    category: "grouts",
    image: "/imgs/Epoxy_Grout.jpeg",
    shortDescription: "High chemical & stain resistant three-component grout system.",
    description: `Epoxy Grout is high chemical & stain resistance product. It is a set of three component namely Resin, Hardener & Coated filler. It is anti shrinking, anti sagging, dust proof, acid proof & water proof product. It can be used to fill gaps between 2 to 12mm. There are two types of Epoxy Grout.
1. Epoxy Grout (Non Sparkle)
2. Epoxy Grout (Sparkle)

Developed with USA-based epoxy technology for superior chemical resistance and durability.`,
    features: [
      "High chemical & stain resistance",
      "Three component system",
      "Anti shrinking & anti sagging",
      "Dust proof, acid proof & water proof",
      "For gaps between 2 to 12mm",
      "USA-based epoxy technology",
    ],
    applications: [
      "Interior & exterior applications",
      "Areas requiring chemical resistance",
      "Commercial and residential applications",
    ],
  },
  {
    id: "polymer-grout",
    name: "Polymer Grout",
    category: "grouts",
    image: "/imgs/grout_polymer.jpeg",
    shortDescription: "Cement based polymer modified tile joint filler for crack-free joints.",
    description: `Polymer Grout is cement based polymer modified tile joint filler. It smoothly fills in gaps & provide crack & dust free joints. As per application there are two types of polymer Grout.
1) Unsanded Polymer Grout
2) Sanded Polymer Grout.

Formulated with USA-based polymer technology for enhanced flexibility and water resistance.`,
    features: [
      "Cement based polymer modified",
      "Smooth filling",
      "Crack & dust free joints",
      "High water resistant",
      "Uniform color",
      "Hard and durable",
      "USA-based polymer technology",
    ],
    applications: ["For joints 1mm to 3mm (Unsanded)", "For wider joints (Sanded)", "Interior & exterior applications"],
  },
  {
    id: "adhesive-admix",
    name: "Adhesive Admix",
    category: "admixtures",
    image: "/imgs/adhesive_admix.jpeg",
    shortDescription: "Polymer formulated liquid admixture for improved adhesive performance.",
    description: `It is polymer formulated liquid from admixture. It is specially designed to mix with adhesive in place of water for improved bonding performance. Type of adhesive will be decided as per the application need. By using adhesive admit, all kind of tiles stones, Mosaic tiles can be fixed with excellent bonding strength.
    
Application:- It is specially designed to fix any kind of tiles stones etc on floor/wall, interior/exterior surface and in dry/wet areas. Paste can be used up to maximum bed thickness of 12 mm. Before application, area needs to be clean and roughened.

Created with USA-based polymer technology for superior bonding and flexibility.`,
    features: [
      "Improve bond strength",
      "Remove cracking issue",
      "Increase wear resistance",
      "Enhance flexibility & durability",
      "Reduce water absorption",
      "USA-based polymer technology",
    ],
    applications: ["Bathrooms, Kitchen, Flooring", "Walls, Interior, Exterior", "For use with all types of adhesives"],
  },
  {
    id: "grout-admix",
    name: "Grout Admix",
    category: "admixtures",
    image: "/imgs/Grout_Admix.jpeg",
    shortDescription: "Polymer formulated liquid admixture for improved grout performance.",
    description: `It is Polymer formulated liquid form admixture which is specially designed to mix with polymer grout in place of water to improve bonding strength, water resistance property & make dense joints.
    
Application:- It can be used with grout (Sanded/Unsanded) to fill gaps in ceramic tiles, vitrified tiles, mosaic tiles, stones etc in wall/floor & interior/exterior surfaces. Before application, area needs to be clean.

Developed with USA-based polymer technology for enhanced water resistance and durability.`,
    features: [
      "Improve bond strength",
      "Remove cracking issue",
      "Increase wear resistance",
      "Enhance flexibility & durability",
      "Reduce water absorption",
      "USA-based polymer technology",
    ],
    applications: [
      "Cement Plaster",
      "Cement Mortar Beds",
      "Concrete",
      "Concrete Masonry",
      "Brick Masonry",
      "Fill gaps in ceramic, vitrified, mosaic tiles, stones etc",
    ],
  },
  {
    id: "tile-cleaner",
    name: "Tile Cleaner",
    category: "cleaners",
    image: "/imgs/tileCleaner.jpeg",
    shortDescription: "Specially formulated cleaner for tile surfaces without damage.",
    description: `The Cleaner is specially formulated to clean the tiles without damaging tile surface. It is used to remove efflorescence, cement residues & oxide stain from tiles. It can be used interior & exterior tiles surfaces. It can be diluted as per the application.
    
Advantages:
1. Remove Stain
2. Remove Cement residues
3. Rapid action
4. Remove efflorescence
5. Remove rust
6. Remove water

Application: Suitable for bathroom, kitchen, flooring, wall, interior, exterior surface etc.

Formulated with USA-based cleaning technology for effective stain removal without damaging surfaces.`,
    features: [
      "Specially formulated for tiles",
      "Doesn't damage tile surface",
      "Removes efflorescence, cement residues & oxide stains",
      "Can be diluted as needed",
      "Rapid action",
      "USA-based cleaning technology",
    ],
    applications: [
      "Bathroom, kitchen, flooring, wall",
      "Interior & exterior surfaces",
      "Removing stains, cement residues, efflorescence, rust",
    ],
  },
]

export default products
