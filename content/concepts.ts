import type { Media } from "./media";

export type ApproachStep = {
  label: string;
  note: string;
};

export type OpportunityPocBrief = {
  title: string;
  subtitle: string;
  intro: string;
  learnerLead: string;
  learnerItems: string[];
  facts: { label: string; note: string }[];
  limitation: string;
  nextStepTitle: string;
  nextStep: string;
  chain: { label: string }[];
  /** Markdown filename in /content/sow for the long-form document panel. */
  fullSowFile?: string;
};

const pocChain = [
  { label: "Proof of Concept" },
  { label: "Evaluation" },
  { label: "Expanded Training Module" },
];

const questFacts = [
  {
    label: "3 Weeks",
    note: "Development and refinement of the core experience.",
  },
  {
    label: "Meta Quest 3",
    note: "Target VR platform with hand and/or controller interaction.",
  },
  {
    label: "R85,000",
    note: "Fixed POC development fee.",
  },
];

const webFacts = [
  {
    label: "3 Weeks",
    note: "Development and refinement of the core experience.",
  },
  {
    label: "Web",
    note: "Browser-based experience on a standard computer.",
  },
  {
    label: "R85,000",
    note: "Fixed POC development fee.",
  },
];

export type OpportunityArea = {
  slug: string;
  title: string;
  /** Short line used on the opportunity cards. */
  summary: string;
  /** Fuller overview used on the Statement of Work page. */
  overview: string;
  objective: string;
  scope: string[];
  media: Media;
  badge?: string;
  future?: boolean;
  approach?: ApproachStep[];
  approachNote?: string;
  /** Extra Proof of Concept brief shown above the closing CTA. */
  pocBrief?: OpportunityPocBrief;
};

/** Welding leads because the concept was already presented to the College. */
export const opportunityAreas: OpportunityArea[] = [
  {
    slug: "welding",
    title: "Welding Training",
    summary:
      "Immersive welding training covering equipment, setup, technique, assessment and process simulation.",
    overview:
      "The welding training concept presented during the recent demonstration is one potential starting point for the Proof of Concept.",
    objective:
      "Demonstrate an immersive welding training experience that lets learners work through equipment, setup, technique, assessment and process simulation.",
    scope: [
      "Welding Equipment & Safety",
      "Welding Setup",
      "Welding Technique",
      "Welding Assessment",
      "Welding Process Simulation",
    ],
    media: {
      image: "", // /images/poc/welding-poc.jpg
      video: "", // /videos/poc/welding-poc.mp4
      placeholder: "Welding Training",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/welding.png",
    },
    badge: "Already presented",
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating the core interaction of a VR welding training exercise on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Pick up and interact with a virtual welding tool.",
        "Position the welding rod against a virtual workpiece.",
        "Experience basic welding feedback including sound, sparks and simulated weld deposits.",
        "Observe progressive welding-rod wear and receive a reset warning.",
        "Have their welding contact path recorded.",
        "View a **2D representation of their welding path** for future assessment and performance analysis.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to the **core welding interaction and tracking functionality**. It is intended to demonstrate the technical feasibility and educational potential of the concept, rather than deliver a complete production-ready welding training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive welding training solution incorporating guided exercises, multiple welding processes, PPE and equipment setup, performance scoring, automated assessment and learner progress tracking.",
      chain: pocChain,
      fullSowFile: "Welding VR Proof of Concept — Statement of Work.md",
    },
  },
  {
    slug: "assembly-line",
    title: "Assembly-Line & Pneumatic Systems",
    summary:
      "Extend the College’s existing pneumatic assembly-line models into an immersive training environment.",
    overview:
      "South Cape College already has pneumatic scale models representing assembly-line operations, providing a strong foundation for exploring how these existing practical training systems could be extended into an immersive virtual environment.",
    objective:
      "Create a digital extension of existing practical learning environments — not a replacement for physical training.",
    scope: [
      "Virtual Assembly-Line Simulation",
      "Pneumatic System Interaction",
      "Process Sequencing",
      "System Operation",
      "Fault Finding",
    ],
    media: {
      image: "", // /images/poc/assembly-line-pneumatics.jpg
      video: "",
      placeholder: "Assembly-Line & Pneumatic Systems",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/assembly-line.png",
    },
    badge: "Industrial automation",
    approach: [
      {
        label: "Existing Physical Training Equipment",
        note: "Pneumatic scale models already used for practical training.",
      },
      {
        label: "3D Digital Representation",
        note: "Accurate digital build of the same components and behaviour.",
      },
      {
        label: "Immersive Training Environment",
        note: "Interactive operation, sequencing and fault finding.",
      },
    ],
    approachNote:
      "The objective is not to replace physical training, but to create a digital extension of existing practical learning environments.",
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating a virtual assembly-line that **sorts different object types** on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Add different types of objects onto the virtual assembly-line.",
        "Watch the line convey objects through a simplified sorting process.",
        "See each object type directed to a matching destination.",
        "Receive basic feedback when an object is sorted correctly or incorrectly.",
        "Reset the line and run the sorting exercise again.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to a **simplified virtual assembly-line sorting interaction**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete production-ready assembly-line or pneumatics training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive assembly-line and pneumatics training solution incorporating pneumatic system interaction, process sequencing, system operation and fault finding, including a closer digital extension of the College's existing physical training equipment.",
      chain: pocChain,
      fullSowFile: "assembly-line-statement-of-work.md",
    },
  },
  {
    slug: "ppe",
    title: "PPE Training",
    summary:
      "Identify and correctly apply appropriate PPE before undertaking practical tasks.",
    overview:
      "Learners practise identifying and correctly applying appropriate PPE before undertaking practical tasks.",
    objective:
      "Build a focused training experience for PPE identification, application and compliance assessment.",
    scope: [
      "PPE Identification & Selection",
      "PPE Application",
      "PPE Compliance Assessment",
    ],
    media: {
      image: "", // /images/poc/ppe-training.jpg
      video: "",
      placeholder: "PPE Training",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/ppe.png",
    },
    badge: "Safety",
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating **PPE application onto a digital mannequin** in VR on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Select items of personal protective equipment from a focused set.",
        "Apply the selected PPE to a digital mannequin in VR.",
        "See whether each item has been placed in an appropriate position.",
        "Complete a simple correctly / incorrectly applied outcome.",
        "Reset the mannequin and repeat the application exercise.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to **applying a focused set of PPE to a digital mannequin**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete PPE identification, compliance and assessment system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive PPE training solution incorporating identification and selection, application across multiple tasks, and compliance assessment.",
      chain: pocChain,
      fullSowFile: "ppe-statement-of-work.md",
    },
  },
  {
    slug: "tool-assembly",
    title: "Tool Assembly & Disassembly",
    summary:
      "Practise component identification, assembly sequences and disassembly procedures.",
    overview:
      "Practise component identification, assembly sequences and disassembly procedures.",
    objective:
      "Let learners work through tool and component assembly and disassembly in a guided digital environment.",
    scope: [
      "Component identification",
      "Assembly sequences",
      "Disassembly procedures",
    ],
    media: {
      image: "",
      placeholder: "Tool Assembly & Disassembly",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/tool-assembly.png",
    },
    badge: "Assembly",
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating **component identification** of a tool using an **expand slider**, with click-to-inspect part descriptions and voice-over, on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Use a slider to expand a tool and reveal its parts.",
        "Click or select an individual part.",
        "View a short written description of that part.",
        "Hear an accompanying voice-over for the selected part.",
        "Collapse the tool back to its assembled view.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to **component identification on a single tool**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete assembly and disassembly training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive tool training solution incorporating assembly sequences, disassembly procedures, additional tools and learner assessment.",
      chain: pocChain,
      fullSowFile: "tool-assembly-statement-of-work.md",
    },
  },
  {
    slug: "electrical",
    title: "Electrical Training",
    summary:
      "Virtual wiring, circuit assembly, fault finding and electrical safety.",
    overview:
      "Virtual wiring, circuit assembly, fault finding and electrical safety.",
    objective:
      "Give learners a virtual environment for electrical assembly, fault finding and safety practice.",
    scope: [
      "Virtual wiring",
      "Circuit assembly",
      "Fault finding",
      "Electrical safety",
    ],
    media: {
      image: "",
      placeholder: "Electrical Training",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/electrical.png",
    },
    badge: "Electrical",
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating **virtual wiring** on **Meta Quest 3**, where pulling a connection from one point to another spawns a connected wire.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Select a connection start point.",
        "Pull a connection toward a second point.",
        "Complete a valid connection so that a wire object appears between the two points.",
        "Receive clear feedback when a connection is invalid.",
        "Reset the wiring exercise and try again.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to **point-to-point virtual wiring**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete circuit-assembly, fault-finding and electrical-safety training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive electrical training solution incorporating circuit assembly, fault finding and electrical safety.",
      chain: pocChain,
      fullSowFile: "electrical-statement-of-work.md",
    },
  },
  {
    slug: "solar",
    title: "Solar Technology",
    summary:
      "Explore solar systems, generation, storage and system configuration.",
    overview:
      "Explore solar systems, generation, storage and system configuration.",
    objective:
      "Introduce solar technology through interactive system, generation, storage and configuration training.",
    scope: [
      "Solar systems",
      "Generation",
      "Storage",
      "System configuration",
    ],
    media: {
      image: "",
      placeholder: "Solar Technology",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/solar.png",
    },
    badge: "Solar",
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating **solar generation** on **Meta Quest 3**, including an animated conversion process and learner control of sun position and weather.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Observe an animated process of solar energy converting into electrical energy.",
        "Control the sun to represent different times of day.",
        "Switch between Sunny and Cloudy conditions.",
        "See generation output change in response to sun position and weather.",
        "Reset the conditions and run the generation exercise again.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to **solar generation under changing sun and weather conditions**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete solar systems, storage and configuration training module.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive solar training solution incorporating solar systems, storage and system configuration.",
      chain: pocChain,
      fullSowFile: "solar-statement-of-work.md",
    },
  },
  {
    slug: "wind-turbine",
    title: "Wind Turbine Technology",
    summary:
      "Explore turbine components, operating conditions and performance.",
    overview:
      "Explore turbine components, operating conditions and performance.",
    objective:
      "Introduce wind turbine technology through component, operating-condition and performance exploration.",
    scope: [
      "Turbine components",
      "Operating conditions",
      "Performance",
    ],
    media: {
      image: "",
      placeholder: "Wind Turbine Technology",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/wind-turbine.png",
    },
    badge: "Wind",
    future: true,
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating **wind-turbine operating conditions** on **Meta Quest 3**, where the learner controls wind speed and direction to see the effect on power generation.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Observe a simplified wind turbine generating energy.",
        "Control wind speed and see the effect on generation.",
        "Control wind direction and see the effect on generation.",
        "Read a simple output of generated power.",
        "Reset the conditions and run the exercise again.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to **operating conditions and their effect on generation**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete turbine-component, maintenance and performance training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive wind-turbine training solution incorporating turbine components, operating conditions and performance analysis.",
      chain: pocChain,
      fullSowFile: "wind-turbine-statement-of-work.md",
    },
  },
  {
    slug: "ev",
    title: "EV Technology",
    summary:
      "Explore EV components, battery systems, motor systems and safety procedures.",
    overview:
      "Explore EV components, battery systems, motor systems and safety procedures.",
    objective:
      "Introduce electric-vehicle systems through component, battery, motor and safety training.",
    scope: [
      "EV components",
      "Battery systems",
      "Motor systems",
      "Safety procedures",
    ],
    media: {
      image: "",
      placeholder: "EV Technology",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/ev.png",
    },
    badge: "EV",
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating **EV motor-system component identification** on **Meta Quest 3**, using an expand slider with click-to-inspect descriptions and voice-over.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Use a slider to expand an electric motor and reveal its parts.",
        "Click or select an individual motor part.",
        "View a short written description of that part.",
        "Hear an accompanying voice-over for the selected part.",
        "Collapse the motor back to its assembled view.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to **component identification of a single motor system**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete EV battery, motor and safety training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive EV training solution incorporating EV components, battery systems, motor systems and safety procedures.",
      chain: pocChain,
      fullSowFile: "ev-statement-of-work.md",
    },
  },
  {
    slug: "hydrogen",
    title: "Hydrogen Technology",
    summary: "Explore hydrogen production, fuel-cell systems and energy production.",
    overview:
      "Explore hydrogen production through electrolysis, fuel-cell systems and energy production.",
    objective:
      "Introduce hydrogen technology through an interactive electrolyser simulation that can later expand into fuel-cell systems and energy production.",
    scope: [
      "Electrolysis / hydrogen production",
      "Hydrogen fuel-cell systems",
      "Energy production",
    ],
    media: {
      image: "",
      placeholder: "Hydrogen Technology",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/hydrogen.png",
    },
    badge: "Hydrogen",
    future: true,
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating an **animated electrolyser simulation** on **Meta Quest 3**, showing how hydrogen is produced through electrolysis.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Observe an animated electrolyser producing hydrogen from water using electrical energy.",
        "See the main stages of the process represented in a simplified training view.",
        "Start, pause or reset the simulation.",
        "Optionally vary a simple input such as power on/off to see generation respond.",
        "Repeat the process to reinforce the production sequence.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to a **simplified electrolyser / hydrogen-production animation**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete hydrogen fuel-cell, plant-procedure or energy-production training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive hydrogen training solution incorporating electrolysis, fuel-cell systems and energy production.",
      chain: pocChain,
      fullSowFile: "hydrogen-statement-of-work.md",
    },
  },
  {
    slug: "tourism",
    title: "Tourism",
    summary:
      "Virtual tourism experiences, digital site tours and 3D/360° experiences.",
    overview:
      "Virtual tourism experiences, digital site tours and 3D/360° experiences.",
    objective:
      "Support tourism training through virtual site tours and 3D / 360° experiences.",
    scope: [
      "Virtual tourism experiences",
      "Digital site tours",
      "3D / 360° experiences",
    ],
    media: {
      image: "",
      placeholder: "Tourism",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/tourism.png",
    },
    badge: "Tourism",
    future: true,
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating a **web-based 3D Gaussian splat (3DGS) tourism capture**, where the learner explores a scene, points at points of interest, and receives an info panel with voice-over.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Explore a single 3DGS capture in the web browser.",
        "Point at or select marked points of interest.",
        "Open an information panel for the selected point.",
        "Hear an accompanying voice-over describing what that point is.",
        "Continue exploring and repeat the inspect interaction.",
      ],
      facts: webFacts,
      limitation:
        "The POC is intentionally limited to **one captured environment with a focused set of hotspots**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete multi-site tourism, guided-tour or assessment system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive tourism training solution incorporating additional digital site tours, 3D / 360° experiences and guided virtual tourism modules.",
      chain: pocChain,
      fullSowFile: "tourism-statement-of-work.md",
    },
  },
  {
    slug: "administration",
    title: "Administration / Business Processes",
    summary:
      "Potential AI-driven workplace interactions, customer service and business-process simulations.",
    overview:
      "Potential AI-driven workplace interactions, customer service and business-process simulations.",
    objective:
      "Explore workplace, customer-service and business-process simulations as a later training module.",
    scope: [
      "Workplace interactions",
      "Customer service",
      "Business-process simulations",
    ],
    media: {
      image: "",
      placeholder: "Administration / Business Processes",
      placeholderNote: "Project visual",
      placeholderImage: "/images/opportunity/administration.png",
    },
    badge: "Administration",
    future: true,
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating **web-based AI voice-driven customer-service calling** — one simulated workplace conversation.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Start a simulated customer-service call in the web browser.",
        "Speak with an AI-driven simulated customer.",
        "Follow one focused conversation path for a workplace scenario.",
        "Complete or reset the call.",
        "Repeat the exercise to practise the interaction.",
      ],
      facts: webFacts,
      limitation:
        "The POC is intentionally limited to **one AI voice-driven calling scenario**. It is intended to demonstrate technical feasibility and educational potential, rather than deliver a complete multi-scenario customer-service, CRM or business-process training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive administration training solution incorporating additional workplace interactions, customer-service scenarios and business-process simulations.",
      chain: pocChain,
      fullSowFile: "administration-statement-of-work.md",
    },
  },
];

export const getOpportunityArea = (slug: string) =>
  opportunityAreas.find((area) => area.slug === slug);

export const opportunityIndex = opportunityAreas.map(({ slug, title }) => ({
  slug,
  title,
}));
