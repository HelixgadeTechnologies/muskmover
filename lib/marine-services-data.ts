export interface ServiceItem {
  id: string
  title: string
  description: string
  deliverables: string[]
  specs?: string
  badge?: string
  licenseOrStandard?: string
  image?: string
}

export interface ServiceCategory {
  id: string
  name: string
  shortTitle: string
  tagline: string
  description: string
  iconName: string
  services: ServiceItem[]
}

export const marineServiceCategories: ServiceCategory[] = [
  {
    id: "fleet-vessels",
    name: "Marine Fleet & Vessel Supply",
    shortTitle: "Fleet & Vessels",
    iconName: "Anchor",
    tagline: "Chartering, vessel management, and offshore marine operations",
    description:
      "Muskmover operates and charters a modern, class-certified marine fleet engineered for demanding offshore waters, deepwater towing, diving operations, and bulk payload transfer.",
    services: [
      {
        id: "offshore-supply-vessels",
        title: "Offshore Supply Vessels (OSV) & Supply Craft",
        badge: "Deepwater Rated",
        description:
          "High-capacity offshore supply vessels engineered to deliver critical deck cargo, drill water, liquid mud, fuel, and equipment to offshore rigs and floating production platforms.",
        deliverables: [
          "Dynamic positioning (DP1 / DP2) capabilities",
          "Continuous offshore platform resupply with zero operational downtime",
          "High deadweight tonnage for bulk liquid and tubular deck cargo",
          "Trained marine crew conforming to international STCW conventions"
        ],
        specs: "Deck area up to 800m² | Fuel & bulk discharge manifolds",
        image: "/general-cargo-vessel.jpg"
      },
      {
        id: "diving-support-vessels",
        title: "Diving Support Vessels (DSV)",
        badge: "Subsea Ready",
        description:
          "Specialized vessels configured for surface-supplied diving, air/saturation diving, subsea inspection, ROV deployment, and underwater installation/maintenance campaigns.",
        deliverables: [
          "Integrated dive control rooms and decompression chambers support",
          "Dynamic positioning systems for precision subsea station keeping",
          "Offshore craneage for underwater tooling and spool installations",
          "Subsea pipeline inspection, hull inspection, and cathodic protection"
        ],
        specs: "DP2 capability | Launch and recovery systems (LARS) integration",
        image: "/hero-ocean.jpg"
      },
      {
        id: "tugboats-towing",
        title: "Tugboats & Ocean Towing",
        badge: "High Bollard Pull",
        description:
          "Powerful, maneuverable tug fleet offering harbor berthing assistance, inter-field rig moves, coastal towing, and emergency marine salvage.",
        deliverables: [
          "High bollard pull towing capacities for deep-sea and coastal operations",
          "360-degree azimuth stern drive (ASD) and conventional propulsion",
          "Ship docking, escort towing, and offshore structure maneuvering",
          "Emergency salvage and standby towage readiness"
        ],
        specs: "Bollard pull ranging from 45T to 120T+",
        image: "/towing-tugs-v2.png"
      },
      {
        id: "dump-barges",
        title: "Dump Barges & Deck Barges",
        badge: "Heavy Lift Deck",
        description:
          "Rugged flat-top deck barges and specialized dump barges configured for dredging spoil transportation, subsea rock dumping, equipment movement, and pipe-laying logistics.",
        deliverables: [
          "Heavy uniform deck load distribution for oversized equipment and pipe transport",
          "Internal compartmentalization with rapid ballasting/de-ballasting systems",
          "Equipped for near-shore dredging, port construction, and offshore dumping",
          "Available for bareboat or time-charter arrangements"
        ],
        specs: "Capacities from 1,000 DWT to 10,000 DWT",
        image: "/large-cargo-ship.png"
      },
      {
        id: "sea-transportation-admin",
        title: "Sea Transportation, Vessel Administration & Safety Operations",
        badge: "Full Fleet Management",
        description:
          "End-to-end administration of marine assets, including vessel compliance, safety auditing, ISM/ISPS code adherence, crew management, and routine marine operations.",
        deliverables: [
          "Flag state and port state compliance management",
          "Preventative vessel dry-docking and scheduled marine maintenance",
          "Offshore marine crew vetting, recruitment, and STCW compliance",
          "24/7 shore-based marine technical operations support"
        ],
        licenseOrStandard: "ISM & ISPS Code Compliant | Class Approved",
        image: "/large-container-ship.jpg"
      }
    ]
  },
  {
    id: "offshore-support",
    name: "Offshore Support & Installation Services",
    shortTitle: "Offshore Support",
    iconName: "Compass",
    tagline: "Rig positioning, mooring systems, and floating accommodation",
    description:
      "Comprehensive offshore field support designed to minimize downtime, ensure safe rig mobilizations, and provide dependable offshore marine accommodation and logistics.",
    services: [
      {
        id: "rig-move-deployment",
        title: "Rig Move & Deployment Logistics",
        badge: "Precision Logistics",
        description:
          "Turnkey engineering and logistical coordination for mobilising jack-up, semi-submersible, and drillship rigs between operational drilling concessions.",
        deliverables: [
          "Rig move procedure development, bathymetric route checks, and hazard assessment",
          "Multi-vessel coordination (lead tug, steering tugs, anchor handlers)",
          "Real-time DGPS positioning and anchor pattern planning",
          "Liaison with marine warranty surveyors (MWS) and offshore superintendents"
        ],
        specs: "Full offshore tow master & marine warranty compliance",
        image: "/rig-support.png"
      },
      {
        id: "mooring-system-services",
        title: "Mooring System Services & Marine Hook-Up",
        badge: "Deepwater Mooring",
        description:
          "Pre-laying, recovery, tensioning, and inspection of temporary and permanent mooring spreads for drilling rigs, FPSOs, FSOs, and construction barges.",
        deliverables: [
          "Anchor handling, pennant wire deployment, and chaser collar retrieval",
          "High-holding-power (HHP) anchors, studlink chain, and wire rope installation",
          "Bollard tension testing, acoustic transponder positioning, and load cell monitoring",
          "Mooring hook-up, disconnect operations, and storm mooring contingency"
        ],
        specs: "Stevpris, Bruce & Danforth anchors | Chain sizes up to 100mm+",
        image: "/ship-anchor-system.jpg"
      },
      {
        id: "offshore-house-boats-barges",
        title: "Offshore Support: House Boats & Accommodation Barges",
        badge: "Life-Support Offshore",
        description:
          "Comfortable, certified floating living quarters (FLQs), house boats, and accommodation barges providing safe residential and catering facilities for offshore teams.",
        deliverables: [
          "Fully air-conditioned cabins, mess halls, infirmaries, and briefing rooms",
          "Helideck facilities, walk-to-work motion-compensated gangway support",
          "Integrated fresh water makers (RO plants), sewage treatment, and power gen-sets",
          "Strict offshore HSE and sanitary compliance standards"
        ],
        specs: "POB capacities ranging from 40 to 300+ personnel",
        image: "/contact-sample.png"
      },
      {
        id: "marine-logistics-turnkey",
        title: "Turnkey Marine Logistics & Port Operations",
        badge: "Integrated Supply Chain",
        description:
          "Coordinated marine logistics connecting shoreline supply bases with offshore locations, including stevedoring, quayside load-out, customs clearance, and bunkering.",
        deliverables: [
          "Shore-base management, quayside heavy lifting, and material staging",
          "Supply vessel transit scheduling and offshore voyage routing",
          "Customs clearance, cabotage compliance, and maritime permit procurement",
          "Fuel, water, and provisions replenishment logistics"
        ],
        specs: "Integrated shore-to-offshore asset tracking",
        image: "/general-cargo-vessel.jpg"
      }
    ]
  },
  {
    id: "security-consultancy",
    name: "Maritime Security, RoW & Consultancy",
    shortTitle: "Security & Consultancy",
    iconName: "ShieldAlert",
    tagline: "Licensed maritime asset protection, surveillance, and RoW integrity",
    description:
      "Fully licensed security consultancy providing armed/unarmed escort vessels, pipeline monitoring, physical guarding, and Right of Way surveillance across volatile corridors.",
    services: [
      {
        id: "nscdc-security-services",
        title: "Security Services & Pipeline Surveillance",
        badge: "NSCDC Licensed",
        licenseOrStandard: "Nigeria Security and Civil Defence Corps (NSCDC) Licensed",
        description:
          "Government-licensed security operations covering industrial facilities, pipeline rights-of-way, tank farms, and sensitive oilfield infrastructure with certified guards and electronic countermeasures.",
        deliverables: [
          "Nigeria Security and Civil Defence Corps (NSCDC) certified security personnel",
          "Pipeline surveillance teams guarding against bunkering, vandalism, and sabotage",
          "Deployable remote surveillance: thermal cameras, UAV drones, and perimeter sensors",
          "Vulnerability assessments, threat matrix modeling, and crisis response protocols"
        ],
        specs: "NSCDC accredited private security guard & asset defense operations",
        image: "/cctv-camera.png"
      },
      {
        id: "row-maintenance-surveillance",
        title: "Right of Way (RoW) Maintenance & Surveillance",
        badge: "Asset Integrity",
        description:
          "Systematic clearance, continuous physical patrol, aerial monitoring, and integrity inspection along oil & gas pipeline corridors, high-voltage lines, and transport easements.",
        deliverables: [
          "Vegetation bush clearing, soil erosion control, and boundary pillar maintenance",
          "Early detection of encroachment, illegal tie-ins, and unauthorized excavations",
          "Community engagement, stakeholder peace liaison, and youth interface management",
          "GPS-logged patrol reports and incident response alert dispatch"
        ],
        specs: "Terrestrial, swamp, and riverine pipeline RoW monitoring",
        image: "/maritime-security.png"
      },
      {
        id: "marine-security-escort",
        title: "Marine Security & Escort Vessel Support",
        badge: "Offshore Escort",
        description:
          "Dedicated ballistic-protected patrol craft and security escort vessels paired with authorized security personnel to protect commercial shipping, tankers, and workboats.",
        deliverables: [
          "Armed security escort for high-value convoys and seismic exploration vessels",
          "Hardened wheelhouses and citadel protection on standby security craft",
          "24/7 secure maritime radio watch, AIS tracking, and radar perimeter monitoring",
          "Full coordination with naval commands and port security authorities"
        ],
        specs: "Fast interceptor craft (25-35 knots) | Ballistic protected cabins",
        image: "/maritime-security-v2.png"
      }
    ]
  },
  {
    id: "haulage-logistics",
    name: "Specialized Haulage & Industrial Road Transport",
    shortTitle: "Haulage & Transport",
    iconName: "Truck",
    tagline: "Petroleum gas, refined white products, and industrial cargo transport",
    description:
      "Reliable, GPS-tracked fleet of specialized road tankers and heavy-duty trucks serving oil majors, industrial manufacturers, and municipal facilities with strict safety compliance.",
    services: [
      {
        id: "gas-haulage",
        title: "Petroleum Products Haulage (Gas / LPG / LNG)",
        badge: "Pressurized Tankers",
        description:
          "Specialized transport of Liquefied Petroleum Gas (LPG) and compressed gases in high-pressure, certified bobtails and semi-trailer tankers with calibrated discharge units.",
        deliverables: [
          "ASME & DOT certified pressurized tanker barrels with emergency shut-off valves",
          "Driver certification in hazardous materials handling (ADR / HAZMAT)",
          "Real-time GPS telemetry, speed monitoring, and temperature/pressure tracking",
          "Direct delivery to depot terminals, bulk plants, and industrial off-takers"
        ],
        specs: "Pressurized tankers from 20MT to 25MT capacity",
        image: "/oil-tanker-ship.jpg"
      },
      {
        id: "white-products-haulage",
        title: "Petroleum Products Haulage (White Products)",
        badge: "Refined Fuels",
        description:
          "Safe and efficient bulk trucking of refined petroleum white products including Premium Motor Spirit (PMS), Automotive Gas Oil (AGO / Diesel), and Dual Purpose Kerosene (DPK).",
        deliverables: [
          "Multi-compartment tankers equipped with anti-spill valves and vapor recovery",
          "Automated fuel discharge metering and tamper-evident digital sealing",
          "Zero-loss transit protocols with dedicated route safety risk assessments",
          "Deliveries to mining concessions, marine bunkering stations, and retail depots"
        ],
        specs: "Tanker capacities from 33,000L to 45,000L",
        image: "/hero-ocean.jpg"
      },
      {
        id: "goods-material-haulage",
        title: "Goods & Material Road Haulage",
        badge: "Heavy Cargo",
        description:
          "Comprehensive flatbed, low-bed, and containerized road transportation for heavy industrial machinery, offshore drill pipes, containerized freight, and project spares.",
        deliverables: [
          "Heavy-duty prime movers with low-bed trailers for abnormal oversized loads",
          "Enclosed containerized haulage for high-value sensitive spares and tools",
          "Inter-state transit with route clearance permits and pilot vehicle escorts",
          "Load lashing, cargo tie-down certification, and transit goods insurance"
        ],
        specs: "Payload ratings up to 60+ Metric Tons",
        image: "/large-cargo-ship.png"
      },
      {
        id: "domestic-waste-transport",
        title: "Domestic & Industrial Waste Transportation",
        badge: "Environmental HSE",
        description:
          "Compliant collection, haulage, and disposal of industrial effluents, municipal refuse, camp waste, and non-hazardous operational refuse to state-approved facilities.",
        deliverables: [
          "Sealed, leak-proof compactor trucks and skip waste containers",
          "Hazardous vs non-hazardous waste segregation and manifest documentation",
          "Compliance with Federal Ministry of Environment & state waste regulators (e.g. LAWMA/NESREA)",
          "Scheduled waste clearance from base camps, shore offices, and quayside facilities"
        ],
        specs: "Enclosed compactor bins & vacuum suction tankers",
        image: "/contact-hero.png"
      }
    ]
  },
  {
    id: "safety-lab-supplies",
    name: "Safety, Lab & Chemical Supplies",
    shortTitle: "Safety & Lab Supplies",
    iconName: "FlaskConical",
    tagline: "Certified PPE, certified analytical chemicals, and lab instrumentation",
    description:
      "Reliable procurement and supply of certified Personal Protective Equipment (PPE), analytical laboratory instrumentation, industrial chemicals, and fire defense systems.",
    services: [
      {
        id: "safety-equipment-ppe",
        title: "Safety Equipment & PPE (Personal Protective Equipment)",
        badge: "CE & ANSI Certified",
        description:
          "Complete suite of certified personal protective equipment for offshore rigs, marine vessels, processing plants, and construction yards.",
        deliverables: [
          "Head & face protection: Safety helmets, welding hoods, anti-fog face shields",
          "Body protection: Flame-retardant anti-static coveralls, chemical aprons, life jackets (SOLAS)",
          "Footwear & hand protection: Steel-toe impact boots, chemical-resistant nitrile/leather gloves",
          "Respiratory & height safety: Self-contained breathing apparatus (SCBA), full body harnesses"
        ],
        specs: "Conforms to EN, ANSI, OSHA & SOLAS standards",
        image: "/african-sailor-portrait.png"
      },
      {
        id: "handheld-lab-devices",
        title: "Hand-held Laboratory Devices & Testing Equipment",
        badge: "Precision Instruments",
        description:
          "Supply and calibration of portable, rugged laboratory instruments designed for field testing, crude assay, water quality evaluation, and chemical analysis.",
        deliverables: [
          "Digital multi-parameter water quality testers (pH, conductivity, TDS, DO)",
          "Portable gas detectors (4-gas & single-gas analyzers for H2S, LEL, CO, O2)",
          "Hand-held refractometers, viscometers, and oil-in-water test kits",
          "Ultrasonic thickness gauges and surface coating testers"
        ],
        specs: "NIST traceable calibration certificates included",
        image: "/hydraulic-pump-equipment.jpg"
      },
      {
        id: "chemical-supply-analar",
        title: "Chemical Supply (General Purpose & Analar Grade)",
        badge: "High Purity",
        description:
          "Procurement and delivery of industrial process chemicals and high-purity Analar-grade reagents for analytical laboratory testing, water treatment, and rig operations.",
        deliverables: [
          "Analar analytical grade reagents for laboratory titration and crude quality testing",
          "Industrial water treatment chemicals: biocides, scale inhibitors, and oxygen scavengers",
          "Drilling and production chemicals: demulsifiers, corrosion inhibitors, glycols",
          "Material Safety Data Sheets (MSDS) and Certificates of Analysis (COA) with each batch"
        ],
        specs: "Supplied in IBC totes, 200L drums, and specialized glass containers",
        image: "/marine-navigation-system.jpg"
      },
      {
        id: "paints-coatings-sealants",
        title: "Paints, Marine Coatings & Sealants",
        badge: "Marine Protective",
        description:
          "High-performance marine epoxy coatings, anti-fouling hull paints, polyurethane topcoats, and elastomeric sealants formulated for salt-spray exposure.",
        deliverables: [
          "Anti-corrosive epoxy primers and high-build intermediate barrier coats",
          "Biocide-release anti-fouling paints for vessel hulls and offshore structures",
          "High-temperature sealants, RTV silicones, and flange joint compounds",
          "Technical support on surface preparation (SSPC/NACE standard blast profiles)"
        ],
        specs: "Resistant to UV degradation, heavy marine fouling, and crude immersion",
        image: "/about-hero.jpg"
      },
      {
        id: "fire-extinguisher-supply",
        title: "Fire Extinguisher Supply, Inspection & Certification",
        badge: "SOLAS / NFPA",
        description:
          "Supply, hydro-testing, refilling, and recertification of portable, wheeled, and fixed fire suppression equipment for vessels, rigs, and industrial facilities.",
        deliverables: [
          "Dry Chemical Powder (DCP), CO2, Foam (AFFF), and Clean Agent fire extinguishers",
          "Wheeled heavy-duty 50kg industrial extinguishers for helidecks and fuel terminals",
          "Hydrostatic pressure testing, recharge, valve rebuilding, and tamper tagging",
          "Emergency escape breathing devices (EEBD) and fire hose/nozzle assemblies"
        ],
        specs: "Compliant with NFPA 10 and SOLAS marine regulations",
        image: "/contact-hero.png"
      }
    ]
  },
  {
    id: "spills-mechanical",
    name: "Mechanical Parts & Environmental Spill Control",
    shortTitle: "Mechanical & Spill Control",
    iconName: "Wrench",
    tagline: "High-spec valves, pipeline gaskets, and rapid oil spill containment",
    description:
      "Essential mechanical flow components up to 12” alongside environmental rapid-response oil spill cleanup consumables and offshore containment barriers.",
    services: [
      {
        id: "oil-spill-clean-up-materials",
        title: "Oil Spill Clean-up Materials (Absorbents, Pads & Kits)",
        badge: "Rapid Response",
        description:
          "Comprehensive range of oleophilic, hydrophobic sorbent materials that rapidly absorb hydrocarbons on water and land while repelling water.",
        deliverables: [
          "Heavy-weight oil-only absorbent pads, absorbent rolls, and absorbent pillows",
          "Marine containment pom-poms and particulate peat sorbents for shoreline cleanup",
          "Emergency marine spill kits (20-gallon to 240-gallon mobile spill wheelie bins)",
          "Oil spill bio-dispersants and surface washing agents (environmentally approved)"
        ],
        specs: "High absorbency ratio up to 20x its weight in oil",
        image: "/ocean-hero.png"
      },
      {
        id: "oil-spill-booms",
        title: "Oil Spill Containment Booms",
        badge: "Marine Booms",
        description:
          "Inflatable and solid-flotation marine containment booms designed to contain, divert, and deflect oil slicks in sheltered harbors, rivers, and offshore open water.",
        deliverables: [
          "Curtain booms and fence booms for calm waters, ports, and riverine installations",
          "Heavy-duty offshore open-ocean booms with ballast chains and high reserve buoyancy",
          "Shore-sealing booms (shoreline tidal interface barriers)",
          "Rapid boom deployment reels, towing bridles, and anchor mooring kits"
        ],
        specs: "PVC / Polyurethane fabric with ASTM universal quick-connect couplings",
        image: "/hero-ocean.jpg"
      },
      {
        id: "valves-nozzles-flanges",
        title: "Industrial Valves (Up to 12”), Nozzles & Flanges",
        badge: "Pressure Tested",
        description:
          "High-pressure pipeline valves, flow nozzles, and ANSI/ASME rated flanges engineered for process piping, bunkering manifolds, and drilling manifolds.",
        deliverables: [
          "Gate, Globe, Check, Ball, and Butterfly valves manufactured up to 12” diameter",
          "Weld neck, slip-on, blind, and socket-weld flanges (Class 150 to Class 2500)",
          "High-velocity spray nozzles, fire water monitors, and flow restriction orifices",
          "Mill Test Certificates (MTC 3.1) and hydro-testing reports with every fitting"
        ],
        specs: "Carbon steel (A105/WCB), Stainless Steel (316/316L), and Duplex Alloys",
        image: "/hydraulic-pump-equipment.jpg"
      },
      {
        id: "seals-o-rings-bolts-nuts",
        title: "Seals, 'O' Rings, Industrial Bolts & Nuts",
        badge: "Critical Fasteners",
        description:
          "Precision-molded elastomer seals, high-temperature O-rings, spiral-wound gaskets, and high-tensile alloy stud bolts for flange and equipment assembly.",
        deliverables: [
          "High-temperature and chemical-resistant O-rings (Viton, Nitrile, PTFE, Kalrez)",
          "Spiral wound metallic gaskets with graphite or PTFE filler for ASME flanges",
          "High-tensile alloy stud bolts (ASTM A193 Grade B7 / B7M) with 2H heavy hex nuts",
          "Zinc-plated, cadmium-plated, and PTFE fluoropolymer coated fasteners"
        ],
        specs: "Standard sizes in stock: 1/2” to 3-1/2” stud diameters",
        image: "/marine-diesel-engine.jpg"
      }
    ]
  }
]
