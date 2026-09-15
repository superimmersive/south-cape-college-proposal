import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "content", "sow");

const legal = (platform) => `
---

# 9. South Cape College Responsibilities

South Cape College will assist Superimmersive by providing, where required:

- Relevant curriculum or training requirements.
- Guidance regarding the intended learning outcomes.
- Relevant technical reference material.
- Subject-matter guidance where required.
- Access to relevant equipment or facilities where necessary.
- Feedback during development and review.
- Appropriate staff members for POC evaluation.
- Access to the College for an on-site demonstration where required.

South Cape College will be responsible for ensuring that any technical or educational information supplied to Superimmersive is accurate and suitable for the intended training context.

---

# 10. Hardware & Equipment

The POC development fee covers **software development and the agreed POC scope only**.

${
  platform === "Web"
    ? "The experience is intended to run in a standard web browser on a computer. Specialist capture hardware, microphones or hosting infrastructure required for development, testing or demonstration will be assessed separately where required."
    : "Meta Quest 3 hardware and any specialist equipment required for development, physical capture, testing or demonstration will be assessed separately where required."
}

Any hardware or specialist equipment required specifically for the project will be quoted separately and will require approval before procurement.

---

# 11. Project Cost

## Fixed POC Development Fee

# R85,000

**Development period:** Approximately 3 weeks.

The above fee covers the development of the Proof of Concept within the scope defined in this Statement of Work.

Any work requested outside the agreed scope may require additional time and cost.

---

# 12. Payment Terms

Payment of the full **R85,000 Proof of Concept fee is required prior to commencement of development**.

Where South Cape College's procurement or payment processes require an alternative payment arrangement, this can be discussed and agreed upon prior to commencement of the project.

Development will commence once the agreed payment arrangement and project scope have been confirmed.

---

# 13. Change Control

The POC is based on the scope defined within this Statement of Work.

Any additional functionality, features, content or requirements requested after approval of the SOW will be treated as a change to scope.

Additional work will only commence following agreement between both parties regarding:

- The additional scope.
- Additional development time.
- Additional cost.

Superimmersive will not be expected to undertake additional development outside the agreed scope without prior approval.

---
`;

const ipAndClose = (futureBullets) => `
# 15. Intellectual Property

Superimmersive retains ownership of its pre-existing intellectual property, including:

- Existing software frameworks.
- Reusable code.
- Development tools.
- Technical methodologies.
- Existing 3D assets.
- Existing systems and technology.
- Proprietary processes and know-how.

The specific use and ownership rights associated with the POC deliverables and any subsequent commercial training application will be agreed between the parties as part of the relevant commercial agreement.

South Cape College will not receive ownership of Superimmersive's underlying technology or pre-existing intellectual property through this POC.

---

# 16. Future Development

The POC provides a technical foundation that may be expanded into a more comprehensive training module.

Potential future development could include:

${futureBullets.map((item) => `- ${item}`).join("\n")}

Any future development will be subject to a separate scope, timeline and commercial agreement.

---

# 17. Project Progression

The proposed relationship may follow the progression:

**Proof of Concept**

↓

**Evaluation**

↓

**Refined / Expanded Training Module**

↓

**Additional Training Modules**

↓

**Curriculum Integration**

↓

**Long-Term Industry Collaboration**

The initial POC provides an opportunity for South Cape College to evaluate the educational and technical potential of immersive training before committing to larger development scopes.

---

# 18. Sign-Off

By approving this Statement of Work, both parties acknowledge and agree to the scope, deliverables, timeline, commercial terms and responsibilities outlined above.

### South Cape College

**Name:** __________________________________

**Position:** _______________________________

**Signature:** ______________________________

**Date:** ___________________________________


### Superimmersive

**Name:** Devon Kirchner

**Position:** Founder & Director

**Signature:** ______________________________

**Date:** ___________________________________
`;

const docs = [
  {
    file: "assembly-line-statement-of-work.md",
    platform: "Meta Quest 3",
    title: "Assembly-Line Sorting — Proof of Concept",
    project: "Virtual Assembly-Line Sorting Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating a simplified virtual assembly-line that sorts different object types.

The learner will add objects of different types onto the line. The line will convey those objects and sort them to matching destinations.

The purpose of the POC is to demonstrate the potential of immersive technology as a supplementary training tool and establish a technical foundation that can later include pneumatics, process sequencing, system operation and fault finding.

The POC is intentionally limited in scope and should not be considered a complete production-ready assembly-line or pneumatics training system.`,
    objectives: [
      "VR interaction using Meta Quest 3.",
      "Adding different types of objects to a virtual assembly-line.",
      "A simplified conveyor / sorting process.",
      "Destination routing by object type.",
      "Basic correct / incorrect sort feedback.",
      "Reset and repeat of the sorting exercise.",
    ],
    journey: [
      "Enter Training Environment",
      "Receive Instruction",
      "Add Objects to the Line",
      "Watch Conveying and Sorting",
      "Observe Destinations by Type",
      "Review Basic Feedback",
      "Reset / Repeat",
    ],
    scope: `## 4.1 Training Environment

A focused VR environment representing a simplified assembly-line, sufficient to demonstrate the sorting interaction.

The environment is not intended to be a complete digital twin of the College's physical pneumatic models.

## 4.2 Object Types

A small, clearly distinguishable set of object types that the learner can add to the line.

## 4.3 Sorting Behaviour

The line will convey objects and sort them according to type, directing each type toward a matching destination.

## 4.4 Feedback

Basic visual and/or audio feedback when an object is sorted correctly or incorrectly.

## 4.5 Reset

The learner can reset the line and run the exercise again.`,
    voice: "Simple on-screen or spoken prompts to start, add objects and reset. No full curriculum voice script is included.",
    deliverables: [
      "A Meta Quest 3 demonstration of the sorting POC.",
      "The core assembly-line sorting interaction described in this SOW.",
      "Internal testing of the sorting behaviour and reset flow.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Pneumatic system interaction.",
      "Process sequencing of a full production line.",
      "System operation of physical College equipment.",
      "Fault finding.",
      "A complete digital twin of existing pneumatic scale models.",
      "LMS integration, scoring dashboards or multiplayer.",
    ],
    weeks: [
      ["Week 1 - Environment & Objects", "Block-out of the line, destinations and a small set of object types. Basic add-to-line interaction."],
      ["Week 2 - Sorting Behaviour", "Conveying, type-based routing and correct / incorrect feedback."],
      ["Week 3 - Testing & Refinement", "Reset flow, pacing, instruction prompts and demonstration polish within the agreed scope."],
    ],
    acceptance: [
      "Learner entering the VR environment.",
      "Learner adding different object types to the line.",
      "Objects being conveyed and sorted by type.",
      "Basic feedback for sort outcome.",
      "Reset and repeat of the exercise.",
    ],
    future: [
      "Pneumatic system interaction.",
      "Process sequencing.",
      "System operation.",
      "Fault finding.",
      "Closer digital extension of existing physical training equipment.",
      "Assessment and learner progress tracking.",
    ],
  },
  {
    file: "ppe-statement-of-work.md",
    platform: "Meta Quest 3",
    title: "PPE Application — Proof of Concept",
    project: "PPE Application Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating the application of personal protective equipment onto a digital mannequin in VR.

The learner will select PPE from a focused set and place it on the mannequin, receiving simple feedback on whether items are applied in an appropriate position.

The POC is intentionally limited in scope and should not be considered a complete PPE identification, compliance and assessment system.`,
    objectives: [
      "VR interaction using Meta Quest 3.",
      "A digital mannequin as the application target.",
      "A focused set of PPE items.",
      "Placement of PPE onto the mannequin.",
      "Simple correct / incorrect placement feedback.",
      "Reset and repeat of the application exercise.",
    ],
    journey: [
      "Enter Training Environment",
      "Receive Instruction",
      "Select PPE",
      "Apply PPE to Mannequin",
      "Review Placement Feedback",
      "Complete or Reset",
    ],
    scope: `## 4.1 Training Environment

A focused VR environment containing a digital mannequin and a small set of PPE items.

## 4.2 PPE Set

A limited set of clearly identifiable PPE items sufficient to demonstrate application, not a full catalogue.

## 4.3 Application Interaction

The learner picks up or selects PPE and applies it to the mannequin.

## 4.4 Placement Feedback

Simple feedback indicating whether each applied item is in an appropriate position.

## 4.5 Reset

The mannequin can be reset so the exercise can be repeated.`,
    voice: "Simple on-screen or spoken prompts to start, apply PPE and reset. No full safety-briefing voice script is included.",
    deliverables: [
      "A Meta Quest 3 demonstration of PPE application onto a digital mannequin.",
      "The core application interaction described in this SOW.",
      "Internal testing of placement and reset.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "A full PPE identification library.",
      "Task-before-work scenario trees.",
      "Formal compliance scoring and certification.",
      "Multiple mannequins, body types or job roles.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Environment & Mannequin", "Mannequin, PPE props and grab / place interaction."],
      ["Week 2 - Application & Feedback", "Placement sockets or zones and simple correct / incorrect feedback."],
      ["Week 3 - Testing & Refinement", "Reset, prompts and demonstration polish within the agreed scope."],
    ],
    acceptance: [
      "Learner entering the VR environment.",
      "Learner selecting PPE from a focused set.",
      "Learner applying PPE to the digital mannequin.",
      "Simple placement feedback being shown.",
      "Reset and repeat of the exercise.",
    ],
    future: [
      "PPE identification and selection.",
      "Application across multiple practical tasks.",
      "PPE compliance assessment.",
      "Guided exercises and scoring.",
    ],
  },
  {
    file: "tool-assembly-statement-of-work.md",
    platform: "Meta Quest 3",
    title: "Tool Component Identification — Proof of Concept",
    project: "Tool Component Identification Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating component identification of a single tool.

The learner will use an expand slider to reveal parts, then click or select a part to view a short description accompanied by voice-over.

The POC is intentionally limited in scope and should not be considered a complete assembly and disassembly training system.`,
    objectives: [
      "VR interaction using Meta Quest 3.",
      "One tool represented for identification.",
      "An expand slider that reveals parts.",
      "Selection of individual parts.",
      "A short written description per selected part.",
      "Accompanying voice-over for the selected part.",
    ],
    journey: [
      "Enter Training Environment",
      "Receive Instruction",
      "Expand the Tool with the Slider",
      "Select a Part",
      "Read Description and Hear Voice-Over",
      "Collapse / Repeat",
    ],
    scope: `## 4.1 Training Environment

A focused VR view of a single tool, sufficient for component identification.

## 4.2 Expand Slider

A slider control that expands the tool to reveal its parts and can collapse it again.

## 4.3 Part Selection

The learner can click or select an individual revealed part.

## 4.4 Description and Voice-Over

Each selectable part has a short written description and an accompanying voice-over.

## 4.5 Reset / Collapse

The tool can be returned to its assembled view.`,
    voice: "Part-level voice-over for selected components is included. A full instructional curriculum soundtrack is not included.",
    deliverables: [
      "A Meta Quest 3 demonstration of tool component identification.",
      "Expand-slider interaction with part selection, text and voice-over.",
      "Internal testing of the identify / collapse flow.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Full assembly sequences.",
      "Full disassembly procedures.",
      "Multiple tools.",
      "Torque, fasteners or timed assessments.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Tool & Slider", "Single tool model, explode / expand slider and camera framing."],
      ["Week 2 - Part Inspection", "Selectable parts, written descriptions and voice-over hooks."],
      ["Week 3 - Testing & Refinement", "Pacing, audio, collapse / reset and demonstration polish."],
    ],
    acceptance: [
      "Learner entering the VR environment.",
      "Learner expanding the tool with the slider.",
      "Learner selecting a part.",
      "A written description being shown.",
      "An accompanying voice-over playing.",
      "The tool collapsing back to an assembled view.",
    ],
    future: [
      "Assembly sequences.",
      "Disassembly procedures.",
      "Additional tools.",
      "Guided exercises and assessment.",
    ],
  },
  {
    file: "electrical-statement-of-work.md",
    platform: "Meta Quest 3",
    title: "Virtual Wiring — Proof of Concept",
    project: "Virtual Wiring Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating point-to-point virtual wiring.

The learner will pull a connection from one point to another. A successful connection will spawn a connected wire object between the two points.

The POC is intentionally limited in scope and should not be considered a complete circuit-assembly, fault-finding and electrical-safety training system.`,
    objectives: [
      "VR interaction using Meta Quest 3.",
      "Selectable connection start and end points.",
      "A pull-to-connect interaction.",
      "Spawning a wire object on a valid connection.",
      "Clear feedback for an invalid connection.",
      "Reset of the wiring exercise.",
    ],
    journey: [
      "Enter Training Environment",
      "Receive Instruction",
      "Select Start Point",
      "Pull Toward End Point",
      "Complete Valid Connection / See Wire Spawn",
      "Reset / Repeat",
    ],
    scope: `## 4.1 Training Environment

A focused VR panel or board with a small set of connection points.

## 4.2 Pull-to-Connect

The learner selects a start point and pulls a connection toward a second point.

## 4.3 Valid Connection

A successful pair spawns a connected wire object between the two points.

## 4.4 Invalid Connection

An invalid pair fails cleanly with simple feedback and does not spawn a wire.

## 4.5 Reset

The learner can clear wires and repeat the exercise.`,
    voice: "Simple on-screen or spoken prompts to start connecting and reset. No full electrical-safety briefing is included.",
    deliverables: [
      "A Meta Quest 3 demonstration of point-to-point virtual wiring.",
      "Wire spawn on valid connections and feedback on invalid connections.",
      "Internal testing of the connect / reset flow.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Full circuit assembly logic.",
      "Fault finding.",
      "Electrical safety modules.",
      "Live-circuit simulation or certification.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Board & Points", "Connection points and pull-to-connect prototype."],
      ["Week 2 - Wire Spawn", "Valid pair detection, spawned wire object and invalid-pair feedback."],
      ["Week 3 - Testing & Refinement", "Reset, prompts and demonstration polish."],
    ],
    acceptance: [
      "Learner entering the VR environment.",
      "Learner selecting a start point and pulling to an end point.",
      "A valid connection spawning a wire object.",
      "An invalid connection failing with simple feedback.",
      "Reset and repeat of the exercise.",
    ],
    future: [
      "Circuit assembly.",
      "Fault finding.",
      "Electrical safety.",
      "Guided exercises and assessment.",
    ],
  },
  {
    file: "solar-statement-of-work.md",
    platform: "Meta Quest 3",
    title: "Solar Generation — Proof of Concept",
    project: "Solar Generation Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating solar generation.

The learner will observe an animated conversion of solar energy into electrical energy, control the sun to represent different times of day, and switch between Sunny and Cloudy conditions to see the effect on generation.

The POC is intentionally limited in scope and should not be considered a complete solar systems, storage and configuration training module.`,
    objectives: [
      "VR interaction using Meta Quest 3.",
      "A simplified solar generation view.",
      "An animated solar-to-electrical conversion.",
      "Learner control of sun / time of day.",
      "Sunny and Cloudy conditions.",
      "A simple generation output that responds to those conditions.",
    ],
    journey: [
      "Enter Training Environment",
      "Receive Instruction",
      "Observe Generation Animation",
      "Control Sun / Time of Day",
      "Switch Sunny / Cloudy",
      "Review Output Change",
      "Reset / Repeat",
    ],
    scope: `## 4.1 Training Environment

A focused VR view of a simplified solar generation setup.

## 4.2 Generation Animation

An animated representation of solar energy converting into electrical energy.

## 4.3 Sun Control

The learner can control sun position / time of day and see generation respond.

## 4.4 Weather Conditions

Sunny and Cloudy conditions that affect generation.

## 4.5 Output Readout

A simple indication of generated output. Storage, inverters and full system configuration are not included.`,
    voice: "Simple on-screen or spoken prompts. No full systems-theory lecture is included.",
    deliverables: [
      "A Meta Quest 3 demonstration of solar generation under changing sun and weather conditions.",
      "The core generation interaction described in this SOW.",
      "Internal testing of sun / weather response.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Solar storage.",
      "Full system configuration.",
      "Grid-tie, inverters or detailed electrical design.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Environment & Sun", "Solar view, sun control and a simple generation readout."],
      ["Week 2 - Conditions & Animation", "Sunny / Cloudy states and conversion animation tied to output."],
      ["Week 3 - Testing & Refinement", "Pacing, prompts, reset and demonstration polish."],
    ],
    acceptance: [
      "Learner entering the VR environment.",
      "Learner observing the generation animation.",
      "Learner controlling the sun / time of day.",
      "Learner switching Sunny / Cloudy conditions.",
      "Generation output changing in response.",
    ],
    future: [
      "Solar systems.",
      "Storage.",
      "System configuration.",
      "Guided exercises and assessment.",
    ],
  },
  {
    file: "wind-turbine-statement-of-work.md",
    platform: "Meta Quest 3",
    title: "Wind Turbine Operating Conditions — Proof of Concept",
    project: "Wind Turbine Operating Conditions Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating wind-turbine operating conditions.

The learner will control wind speed and wind direction and see the effect on power generation, similar in intent to the solar generation POC.

The POC is intentionally limited in scope and should not be considered a complete turbine-component, maintenance and performance training system.`,
    objectives: [
      "VR interaction using Meta Quest 3.",
      "A simplified wind turbine generation view.",
      "Learner control of wind speed.",
      "Learner control of wind direction.",
      "A simple power-generation readout that responds to those conditions.",
      "Reset and repeat of the exercise.",
    ],
    journey: [
      "Enter Training Environment",
      "Receive Instruction",
      "Observe the Turbine",
      "Control Wind Speed",
      "Control Wind Direction",
      "Review Power Output",
      "Reset / Repeat",
    ],
    scope: `## 4.1 Training Environment

A focused VR view of a simplified wind turbine.

## 4.2 Wind Speed

The learner can change wind speed and see generation respond.

## 4.3 Wind Direction

The learner can change wind direction and see generation respond.

## 4.4 Output Readout

A simple indication of generated power.

## 4.5 Reset

Conditions can be reset and the exercise repeated.`,
    voice: "Simple on-screen or spoken prompts. No full turbine-maintenance briefing is included.",
    deliverables: [
      "A Meta Quest 3 demonstration of wind speed and direction affecting generation.",
      "The core operating-conditions interaction described in this SOW.",
      "Internal testing of wind / output response.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Full turbine component strip-down.",
      "Maintenance procedures.",
      "Detailed performance analysis or certification.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Turbine & Wind", "Simplified turbine and wind-speed control with a basic output readout."],
      ["Week 2 - Direction & Response", "Wind-direction control and clearer generation response."],
      ["Week 3 - Testing & Refinement", "Pacing, prompts, reset and demonstration polish."],
    ],
    acceptance: [
      "Learner entering the VR environment.",
      "Learner controlling wind speed.",
      "Learner controlling wind direction.",
      "Power generation responding to those conditions.",
      "Reset and repeat of the exercise.",
    ],
    future: [
      "Turbine components.",
      "Operating conditions in greater depth.",
      "Performance analysis.",
      "Guided exercises and assessment.",
    ],
  },
  {
    file: "ev-statement-of-work.md",
    platform: "Meta Quest 3",
    title: "EV Motor Component Identification — Proof of Concept",
    project: "EV Motor Component Identification Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating component identification of an electric motor system.

The learner will use an expand slider to reveal motor parts, then click or select a part to view a short description accompanied by voice-over. This follows the same interaction pattern as the tool-assembly identification POC.

The POC is intentionally limited in scope and should not be considered a complete EV battery, motor and safety training system.`,
    objectives: [
      "VR interaction using Meta Quest 3.",
      "One electric motor represented for identification.",
      "An expand slider that reveals parts.",
      "Selection of individual motor parts.",
      "A short written description per selected part.",
      "Accompanying voice-over for the selected part.",
    ],
    journey: [
      "Enter Training Environment",
      "Receive Instruction",
      "Expand the Motor with the Slider",
      "Select a Part",
      "Read Description and Hear Voice-Over",
      "Collapse / Repeat",
    ],
    scope: `## 4.1 Training Environment

A focused VR view of a single electric motor, sufficient for component identification.

## 4.2 Expand Slider

A slider control that expands the motor to reveal its parts and can collapse it again.

## 4.3 Part Selection

The learner can click or select an individual revealed part.

## 4.4 Description and Voice-Over

Each selectable part has a short written description and an accompanying voice-over.

## 4.5 Reset / Collapse

The motor can be returned to its assembled view.`,
    voice: "Part-level voice-over for selected motor components is included. HV safety certification content is not included.",
    deliverables: [
      "A Meta Quest 3 demonstration of EV motor component identification.",
      "Expand-slider interaction with part selection, text and voice-over.",
      "Internal testing of the identify / collapse flow.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Battery systems.",
      "High-voltage safety procedures.",
      "Full EV powertrain operation.",
      "Multiple motor types.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Motor & Slider", "Single motor model, explode / expand slider and framing."],
      ["Week 2 - Part Inspection", "Selectable parts, written descriptions and voice-over hooks."],
      ["Week 3 - Testing & Refinement", "Pacing, audio, collapse / reset and demonstration polish."],
    ],
    acceptance: [
      "Learner entering the VR environment.",
      "Learner expanding the motor with the slider.",
      "Learner selecting a part.",
      "A written description being shown.",
      "An accompanying voice-over playing.",
      "The motor collapsing back to an assembled view.",
    ],
    future: [
      "EV components.",
      "Battery systems.",
      "Motor systems in greater depth.",
      "Safety procedures.",
    ],
  },
  {
    file: "hydrogen-statement-of-work.md",
    platform: "Meta Quest 3",
    title: "Hydrogen Electrolyser — Proof of Concept",
    project: "Hydrogen Electrolyser Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating an animated electrolyser simulation.

The learner will observe how hydrogen is produced through electrolysis: electrical energy splits water into hydrogen and oxygen in a simplified training view.

The POC is intentionally limited in scope and should not be considered a complete hydrogen fuel-cell, plant-procedure or energy-production training system.`,
    objectives: [
      "VR interaction using Meta Quest 3.",
      "A simplified electrolyser representation.",
      "An animated hydrogen-production process.",
      "Start, pause and reset of the simulation.",
      "An optional simple input such as power on/off.",
      "A clearly educational, not industrial-plant, presentation of electrolysis.",
    ],
    journey: [
      "Enter Training Environment",
      "Receive Instruction",
      "Start the Electrolyser Simulation",
      "Observe Production Stages",
      "Optionally Toggle Power",
      "Pause / Reset / Repeat",
    ],
    scope: `## 4.1 Training Environment

A focused VR view of a simplified electrolyser.

## 4.2 Process Animation

An animated sequence showing water and electrical energy producing hydrogen (and oxygen) in a training-appropriate simplification.

## 4.3 Playback Control

The learner can start, pause and reset the simulation.

## 4.4 Simple Input

An optional control such as power on/off so the learner can see production respond.

## 4.5 Educational Limit

The simulation is conceptual. It is not a plant operating procedure, safety certification, or a fuel-cell energy-production module.`,
    voice: "Simple on-screen or spoken prompts describing the electrolysis stages. No full plant-safety briefing is included.",
    deliverables: [
      "A Meta Quest 3 demonstration of an electrolyser / hydrogen-production animation.",
      "Start, pause, reset and optional power input as described in this SOW.",
      "Internal testing of the simulation playback.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Hydrogen fuel-cell energy production (hydrogen in, electricity out).",
      "Industrial plant procedures.",
      "Safety certification.",
      "High-pressure storage systems.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Electrolyser View", "Simplified electrolyser representation and playback controls."],
      ["Week 2 - Process Animation", "Staged animation of electrolysis and optional power on/off."],
      ["Week 3 - Testing & Refinement", "Prompts, reset and demonstration polish."],
    ],
    acceptance: [
      "Learner entering the VR environment.",
      "Learner starting the electrolyser simulation.",
      "The animation showing a simplified hydrogen-production process.",
      "Learner pausing and resetting the simulation.",
      "Optional power input affecting the simulation where included.",
    ],
    future: [
      "Electrolysis / hydrogen production in greater depth.",
      "Hydrogen fuel-cell systems.",
      "Energy production.",
      "Guided exercises and assessment.",
    ],
  },
  {
    file: "tourism-statement-of-work.md",
    platform: "Web",
    title: "Tourism 3DGS Explore — Proof of Concept",
    project: "Tourism 3DGS Explore Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating a web-based virtual tourism experience using a 3D Gaussian splat (3DGS) capture.

The learner will explore a single captured environment in the browser, point at or select marked points of interest, and receive an information panel with accompanying voice-over.

The POC is intentionally limited in scope and should not be considered a complete multi-site tourism, guided-tour or assessment system.`,
    objectives: [
      "A browser-based 3DGS viewing experience on a standard computer.",
      "One captured environment.",
      "A focused set of points of interest.",
      "Point / select to inspect a hotspot.",
      "An information panel for the selected point.",
      "Accompanying voice-over describing that point.",
    ],
    journey: [
      "Open the Web Experience",
      "Receive Instruction",
      "Explore the Capture",
      "Point at or Select a Hotspot",
      "Read the Info Panel and Hear Voice-Over",
      "Continue Exploring",
    ],
    scope: `## 4.1 Web Viewer

A browser-based viewer for a single 3DGS capture, suitable for demonstration on a standard computer.

## 4.2 Capture

One environment. Additional sites are out of scope.

## 4.3 Hotspots

A focused set of marked points of interest that the learner can point at or select.

## 4.4 Information Panel

Selecting a hotspot opens a short information panel.

## 4.5 Voice-Over

Each included hotspot has an accompanying voice-over.`,
    voice: "Hotspot voice-over is included for the focused set of points. A full guided-tour narration for a whole destination is not included.",
    deliverables: [
      "A web demonstration of one 3DGS capture with inspectable hotspots.",
      "Info panels and voice-over for the included points of interest.",
      "Internal testing of explore / inspect flow in a desktop browser.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Multiple captured sites.",
      "Guided multi-stop tours.",
      "Assessment or booking workflows.",
      "Native Quest packaging unless later agreed.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Viewer & Capture", "Web 3DGS viewer and one capture loaded for exploration."],
      ["Week 2 - Hotspots", "Point / select hotspots, info panels and voice-over hooks."],
      ["Week 3 - Testing & Refinement", "Pacing, prompts and demonstration polish in the browser."],
    ],
    acceptance: [
      "Learner opening the web experience on a standard computer.",
      "Learner exploring the 3DGS capture.",
      "Learner pointing at or selecting a hotspot.",
      "An information panel appearing.",
      "An accompanying voice-over playing.",
    ],
    future: [
      "Additional virtual tourism experiences.",
      "Digital site tours.",
      "Further 3D / 360° experiences.",
      "Guided tours and assessment.",
    ],
  },
  {
    file: "administration-statement-of-work.md",
    platform: "Web",
    title: "Customer Service Calling — Proof of Concept",
    project: "Customer Service Calling Proof of Concept",
    overview: `Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating web-based AI voice-driven customer-service calling.

The learner will start a simulated call in the browser, speak with an AI-driven simulated customer, and follow one focused workplace conversation path.

The POC is intentionally limited in scope and should not be considered a complete multi-scenario customer-service, CRM or business-process training system.`,
    objectives: [
      "A browser-based calling exercise on a standard computer.",
      "One workplace customer-service scenario.",
      "AI voice-driven simulated customer interaction.",
      "A single conversation path sufficient to demonstrate the mechanic.",
      "Complete and reset of the call.",
    ],
    journey: [
      "Open the Web Experience",
      "Receive Instruction",
      "Start the Simulated Call",
      "Speak with the Simulated Customer",
      "Follow the Conversation Path",
      "Complete or Reset",
    ],
    scope: `## 4.1 Web Experience

A browser-based interface for starting, holding and ending a simulated call.

## 4.2 One Scenario

A single customer-service scenario. Additional scenarios are out of scope.

## 4.3 AI Voice Interaction

The learner speaks with an AI-driven simulated customer along one focused path.

## 4.4 Complete / Reset

The learner can complete the call or reset and try again.

## 4.5 Constraint

The POC demonstrates the calling mechanic. It is not a contact-centre platform, CRM, or assessed multi-module curriculum.`,
    voice: "AI voice for the simulated customer is included for the single scenario. Additional voices, languages and scenario libraries are not included.",
    deliverables: [
      "A web demonstration of one AI voice-driven customer-service call.",
      "Start, converse, complete and reset as described in this SOW.",
      "Internal testing of the calling flow in a desktop browser.",
      "A demonstration to College staff.",
    ],
    outOfScope: [
      "Multiple scenarios or branching curricula.",
      "CRM or ticketing integration.",
      "Formal assessment analytics.",
      "Workplace-interaction modules beyond this call.",
      "LMS integration.",
    ],
    weeks: [
      ["Week 1 - Call Shell", "Web call interface, start / end / reset."],
      ["Week 2 - AI Conversation", "One scenario path with AI voice-driven customer responses."],
      ["Week 3 - Testing & Refinement", "Pacing, prompts and demonstration polish in the browser."],
    ],
    acceptance: [
      "Learner opening the web experience on a standard computer.",
      "Learner starting a simulated call.",
      "Learner speaking with the AI-driven simulated customer.",
      "The focused conversation path being followable to completion.",
      "Reset and repeat of the exercise.",
    ],
    future: [
      "Additional workplace interactions.",
      "Further customer-service scenarios.",
      "Business-process simulations.",
      "Assessment and progress tracking.",
    ],
  },
];

function render(doc) {
  const journey = doc.journey.map((step, i) =>
    i === 0 ? `**${step}**` : `↓\n\n**${step}**`,
  ).join("\n\n");

  return `# Statement of Work

## ${doc.title}

**Client:** South Cape College
**Supplier:** Superimmersive
**Project:** ${doc.project}
**Target Platform:** ${doc.platform}
**Development Period:** 3 Weeks
**Project Fee:** R85,000

---

# 1. Project Overview

${doc.overview}

---

# 2. POC Objectives

The primary objectives of the Proof of Concept are to demonstrate:

${doc.objectives.map((item) => `- ${item}`).join("\n")}

---

# 3. User Journey

The proposed POC user journey is:

${journey}

---

# 4. Scope of Work

${doc.scope}

---

# 5. Voice / Instruction

${doc.voice}

---

# 6. Deliverables

${doc.deliverables.map((item) => `- ${item}`).join("\n")}

---

# 7. Out of Scope

The following are excluded from the POC unless separately agreed:

${doc.outOfScope.map((item) => `- ${item}`).join("\n")}

---

# 8. Development Timeline

The POC is planned as a focused **3-week** development period.

## ${doc.weeks[0][0]}

${doc.weeks[0][1]}

## ${doc.weeks[1][0]}

${doc.weeks[1][1]}

## ${doc.weeks[2][0]}

${doc.weeks[2][1]}

${legal(doc.platform)}
# 14. Acceptance Criteria

The POC will be considered successfully delivered when the agreed core functionality can be demonstrated on the target **${doc.platform}** platform.

The demonstration should include:

${doc.acceptance.map((item) => `- ${item}`).join("\n")}

The POC is intended to demonstrate technical feasibility and core interaction rather than final production quality.

---
${ipAndClose(doc.future)}
`;
}

for (const doc of docs) {
  fs.writeFileSync(path.join(dir, doc.file), render(doc), "utf8");
  console.log("wrote", doc.file);
}
