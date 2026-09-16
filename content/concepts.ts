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
  /**
   * Copy under example panels. Keys match the file name without extension
   * (case-insensitive), e.g. "Ghosted guide".
   */
  exampleCopy?: Record<
    string,
    { title: string; note: string; ratio?: string; fit?: "cover" | "contain"; crop?: "top" }
  >;
  /** Interactive 3DGS viewers shown in the Example section. */
  exampleSplats?: ExampleSplat[];
};

export type ExampleSplat = {
  title: string;
  note: string;
  splat: string;
  poster: string;
  cameraUp: [number, number, number];
  cameraPosition: [number, number, number];
  cameraLookAt: [number, number, number];
  downloadHint?: string;
  fallbackUrl?: string;
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
    exampleCopy: {
      "Ghosted guide": {
        title: "Ghosted guide",
        note: "Shows the motion the learner is expected to follow.",
      },
      "tool use": {
        title: "Tool use",
        note: "The learner picks up the tool, traces the guided path, and leaves a black line as a stand-in for the weld deposit.",
      },
    },
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
    exampleCopy: {
      "Sorting Station": {
        title: "Sorting Station",
        note: "Objects on a conveyor are identified and directed to matching destinations.",
        ratio: "16 / 9",
      },
    },
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
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating a virtual assembly-line sorting system on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Enter a virtual assembly-line environment containing the required components.",
        "Select components from an interactive UI menu.",
        "Assemble a simplified **separator system** using the provided components.",
        'Follow visual "ghosted" guides indicating where each component should be positioned.',
        "Place different types of objects onto the conveyor.",
        "Start the conveyor and observe the sorting process in operation.",
        "See objects directed to their corresponding destinations.",
        "Receive basic feedback based on the sorting outcome.",
        "Reset the system and repeat the exercise.",
      ],
      facts: [
        {
          label: "3 Weeks",
          note: "Development and refinement of the core assembly and sorting experience.",
        },
        {
          label: "Meta Quest 3",
          note: "Target VR platform with hand and/or controller interaction.",
        },
        {
          label: "R85,000",
          note: "Fixed POC development fee.",
        },
      ],
      limitation:
        "The POC is intentionally limited to a **guided virtual assembly and sorting exercise**. It is intended to demonstrate the technical feasibility and educational potential of an immersive assembly-line training experience, rather than deliver a complete production-ready assembly-line or pneumatics training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive assembly-line and pneumatic systems training solution, incorporating unguided assembly assessment, pneumatic system interaction, PLC wiring and configuration, process sequencing, fault finding, advanced assessment, and a closer digital extension of the College's existing physical assembly-line and pneumatic training equipment.",
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
    exampleCopy: {
      "Apply PPE to Mannequin": {
        title: "Apply PPE to Mannequin",
        note: "The learner selects items and applies them to a digital mannequin.",
        ratio: "486 / 650",
        fit: "cover",
        crop: "top",
      },
      "Identify PPE": {
        title: "Identify PPE",
        note: "The learner identifies the correct PPE from a focused set.",
        ratio: "486 / 650",
        fit: "cover",
        crop: "top",
      },
    },
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
    exampleCopy: {
      "Assemble Disassemble": {
        title: "Assemble Disassemble",
        note: "The learner works through assembly and disassembly of a tool.",
        ratio: "16 / 9",
      },
    },
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating an interactive **tool component identification and replacement exercise** on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Explore an interactive 3D tool and expand it to reveal its internal components.",
        "Select components to view short descriptions and hear accompanying voice-over.",
        "Receive a guided maintenance task identifying a specified component.",
        "Use supplied virtual tools to disassemble the tool.",
        "Locate and remove the specified component.",
        "Replace it with a supplied replacement component.",
        "Reassemble the tool in the correct sequence.",
        "Receive basic feedback when the task is completed.",
        "Restart and repeat the exercise.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to **one tool and one defined component replacement exercise**. It is intended to demonstrate technical feasibility and educational potential rather than deliver a complete tool maintenance, assembly or disassembly training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the experience could be expanded to include additional tools and components, multiple assembly and disassembly procedures, guided and unguided exercises, fault finding, maintenance procedures and learner assessment.",
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
    exampleCopy: {
      "Wire stripping": {
        title: "Wire stripping",
        note: "The learner strips insulation to expose the copper conductors.",
        ratio: "16 / 9",
      },
      "Consumer unit": {
        title: "Consumer unit",
        note: "The learner fits a module into a distribution board.",
        ratio: "16 / 9",
      },
    },
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating an interactive **basic lighting circuit** in VR on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Enter a virtual electrical training environment.",
        "Identify the components required to complete a basic lighting circuit.",
        "Connect the relevant terminals between a **distribution board, light switch and light fitting**.",
        "Create and position virtual wires between connection points.",
        "Receive clear feedback when an incorrect connection is attempted.",
        "Complete the circuit and activate the virtual light.",
        "Operate the light switch and observe the result.",
        "Reset the exercise and repeat the wiring task.",
      ],
      facts: [
        {
          label: "3 Weeks",
          note: "Development and refinement of the core virtual wiring and lighting-circuit experience.",
        },
        {
          label: "Meta Quest 3",
          note: "Target VR platform with hand and/or controller interaction.",
        },
        {
          label: "R85,000",
          note: "Fixed POC development fee.",
        },
      ],
      limitation:
        "The POC is intentionally limited to a **single basic lighting circuit and defined set of electrical components**. It is intended to demonstrate the technical feasibility and educational potential of interactive electrical training in VR, rather than deliver a complete electrical installation or training curriculum.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive electrical training solution incorporating additional circuit types, unguided wiring, circuit-diagram interpretation, fault finding, electrical testing, electrical safety and advanced assessment.",
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
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating an interactive **solar generation and system configuration experience** on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Explore a simplified solar generation system and identify its key components.",
        "Adjust the **orientation and angle of a solar panel**.",
        "Control the simulated **sun position** to represent different times of day.",
        "Switch between **Sunny and Cloudy** weather conditions.",
        "Observe sunlight reaching the solar panels and the conversion into electrical energy.",
        "See a simplified generation/output indicator respond to changes in panel orientation, sun position and weather.",
        "Experiment with different configurations and compare the resulting generation.",
        "Reset the system and repeat the exercise.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to a **simplified solar generation and panel-configuration exercise**. It is intended to demonstrate technical feasibility and educational potential rather than deliver a complete solar installation, electrical configuration, storage or energy-management training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the experience could be expanded to include multiple solar panels, array configuration, inverters, battery storage, electrical connections, system sizing, fault finding, maintenance and more advanced solar-energy scenarios.",
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
    exampleCopy: {
      "Expand motor": {
        title: "Expand motor",
        note: "The learner uses a slider to expand the motor and reveal its parts.",
        ratio: "1 / 1",
      },
      "Part Identification": {
        title: "Part Identification",
        note: "The learner selects a part to view a short written description.",
        ratio: "1280 / 594",
      },
    },
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating an interactive **EV motor inspection and component-replacement exercise** on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Explore an interactive 3D EV motor and expand it to inspect its internal components.",
        "Select components to view descriptions and hear voice-over explanations.",
        "Receive a guided maintenance task requiring the learner to disassemble the motor using supplied virtual tools.",
        "Identify and remove a specified component and replace it with a supplied replacement part.",
        "Reassemble the motor in the correct sequence.",
        "Receive basic feedback when the task is completed successfully.",
        "Restart the exercise and repeat the procedure.",
      ],
      facts: [
        {
          label: "3 Weeks",
          note: "Development and refinement of the core EV motor inspection, disassembly and component-replacement experience.",
        },
        {
          label: "Meta Quest 3",
          note: "Target VR platform with hand and/or controller interaction.",
        },
        {
          label: "R85,000",
          note: "Fixed POC development fee.",
        },
      ],
      limitation:
        "The POC is intentionally limited to **one EV motor system and a defined component replacement exercise**. It is intended to demonstrate the technical feasibility and educational potential of immersive EV maintenance training, rather than deliver a complete EV maintenance or diagnostic training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the POC could be expanded into a more comprehensive EV training solution incorporating additional maintenance procedures, battery systems, electric motor systems, diagnostics, high-voltage safety and fault-finding exercises.",
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
    exampleCopy: {
      "Green hydrogen": {
        title: "Green hydrogen",
        note: "An animated view of hydrogen produced through electrolysis.",
        ratio: "1 / 1",
      },
      "SMR Facility": {
        title: "SMR Facility",
        note: "A facility-scale view of steam methane reforming for hydrogen production.",
        ratio: "1 / 1",
      },
    },
    pocBrief: {
      title: "Suggested Proof of Concept",
      subtitle: "A focused 3-week technical demonstration",
      intro:
        "Superimmersive proposes a focused **3-week Proof of Concept** demonstrating an interactive **electrolyser operation and hydrogen-production simulation** on **Meta Quest 3**.",
      learnerLead: "The POC will allow a learner to:",
      learnerItems: [
        "Explore a simplified electrolyser system and identify its key components.",
        "Inspect components to view short explanations of their purpose.",
        "Prepare the system by confirming the water supply and activating the electrical input.",
        "Start the electrolysis process.",
        "Observe water being separated into **hydrogen and oxygen** through an animated representation of the process.",
        "Observe the movement of hydrogen and oxygen toward their respective outputs.",
        "Adjust a simplified operating input, such as power, and observe its effect on the simulated production rate.",
        "Shut down and reset the system.",
        "Repeat the process to reinforce the basic operating sequence.",
      ],
      facts: questFacts,
      limitation:
        "The POC is intentionally limited to a **simplified electrolyser operation and hydrogen-production simulation**. It is intended to demonstrate technical feasibility and educational potential rather than deliver a complete industrial electrolyser, hydrogen plant or process-control training system.",
      nextStepTitle: "Potential Next Step",
      nextStep:
        "Following evaluation, the experience could be expanded to include more detailed electrolyser operation, system components, safety procedures, fault finding, process controls, hydrogen storage and compression, fuel-cell systems, and broader hydrogen-energy production workflows.",
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
    exampleCopy: {
      "3D site capture": {
        title: "3D site capture",
        note: "The learner walks a captured site in 3D.",
        ratio: "16 / 9",
      },
    },
    exampleSplats: [
      {
        title: "Train",
        note: "A public 3DGS pipeline sample. Click to load, then drag to orbit and scroll to zoom.",
        splat: "/examples/tourism/3dgs/train.splat",
        poster: "/examples/tourism/3dgs/train.jpg",
        downloadHint: "~31 MB",
        fallbackUrl: "https://superimmersive.github.io/products/3dgs.html",
        cameraUp: [0, -1, 0.16],
        cameraPosition: [-3.01, -0.11, -3.75],
        cameraLookAt: [0, 0.2, 0],
      },
    ],
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
