# Statement of Work

## Welding VR Training — Proof of Concept

**Client:** South Cape College  
**Supplier:** Superimmersive  
**Project:** Welding VR Training Proof of Concept  
**Target Platform:** Meta Quest 3  
**Development Period:** 3 Weeks  
**Project Fee:** R85,000

---

# 1. Project Overview

Superimmersive will develop a **3-week Proof of Concept (POC)** demonstrating the core interaction and technical feasibility of a virtual reality welding training exercise.

The POC will focus on a simplified welding scenario in which a learner interacts with a virtual welding tool, makes contact with a virtual workpiece, receives simulated welding feedback, and has their welding path recorded and visualised.

The purpose of the POC is to demonstrate the potential of immersive technology as a supplementary training tool and establish a technical foundation that can be expanded into a more comprehensive welding training application in a subsequent development phase.

The POC is intentionally limited in scope and should not be considered a complete production-ready welding training system.

---

# 2. POC Objectives

The primary objectives of the Proof of Concept are to demonstrate:

- VR interaction using Meta Quest 3.
- Hand and/or controller interaction with a virtual welding tool.
- Welding rod contact detection against a virtual workpiece.
- Basic simulated welding feedback.
- Progressive welding rod wear.
- Recording of the learner's welding contact path.
- Conversion of recorded contact data into a 2D representation of the welding path.

---

# 3. User Journey

The proposed POC user journey is:

**Enter Training Environment**  
↓  
**Receive Instruction**  
↓  
**Pick Up Welding Tool**  
↓  
**Position Welding Rod**  
↓  
**Make Contact with Workpiece**  
↓  
**Welding Interaction & Feedback**  
↓  
**Move Along Surface**  
↓  
**Rod Wear / Warning**  
↓  
**Complete Exercise**  
↓  
**View Recorded Welding Path**

---

# 4. Scope of Work

## 4.1 VR Training Environment

Superimmersive will create a simplified virtual welding environment suitable for demonstrating the POC functionality.

The environment will include:

- Basic virtual welding workspace.
- Virtual workpiece.
- Virtual welding tool.
- Appropriate interaction points required for the exercise.
- Basic user instruction/feedback elements.

The environment will be designed specifically for the POC and will not represent a complete production-ready welding workshop.

---

## 4.2 Welding Tool Interaction

The learner will be able to interact with the virtual welding tool using Meta Quest 3 hand tracking and/or VR controllers.

Functionality will include:

- Picking up the virtual welding tool.
- Holding and positioning the tool.
- Positioning the welding rod relative to the workpiece.
- Detecting the position of the welding rod tip.

---

## 4.3 Welding Contact Interaction

When the welding rod makes contact with the virtual workpiece, the system will provide basic simulated welding feedback.

This will include:

- Welding sound effect.
- Sparks and light effects at the contact point.
- Simulated weld deposit appearing along the contact area.
- Basic contact-state detection.

The simulated welding behaviour is intended to demonstrate the interaction rather than replicate the complete physical or metallurgical behaviour of real welding.

---

## 4.4 Welding Rod Wear

The virtual welding rod will progressively wear down while the learner is welding.

The POC will include:

- Progressive reduction of the usable welding rod.
- Detection of the rod reaching a defined limit.
- Visual warning to the learner.
- Instruction to reset or replace the virtual rod.

The rod-wear behaviour will be a simplified representation for demonstration purposes.

---

## 4.5 Welding Path Tracking

A key objective of the POC is to demonstrate the ability to record the learner's welding path.

The system will:

- Detect when the welding rod is in contact with the workpiece.
- Record the position of the rod tip while contact is maintained.
- Map contact positions to the surface of the virtual workpiece.
- Store the resulting contact-path data.

UV-coordinate mapping will be investigated as the primary technical approach for mapping the rod-tip contact position to the workpiece surface.

The exact technical implementation may be adjusted during development if an alternative approach proves more suitable.

---

## 4.6 2D Welding Path Visualisation

The recorded welding contact data will be converted into a simplified 2D representation of the learner's welding path.

The visualisation will demonstrate:

- The path followed by the welding rod.
- The location of recorded contact points.
- The overall shape and direction of the learner's movement.

This functionality is intended to demonstrate the foundation for future welding assessment and performance analysis.

Advanced scoring and automated assessment are outside the scope of this POC.

---

# 5. Voice / Instruction

The POC may include basic instructional voice-over and/or on-screen instructions.

Example:

> "Welcome to this welding training simulation. Use your hands or controllers to interact with the welding equipment."

The learner will then be instructed to position the welding rod over the workpiece and make contact.

Voice-over will be limited to the instructions required for the POC demonstration.

---

# 6. Deliverables

At completion of the POC, Superimmersive will provide:

1. A functional VR welding Proof of Concept.
2. Simplified virtual welding environment.
3. Interactive virtual welding tool.
4. Welding rod contact detection.
5. Basic simulated welding effects.
6. Simulated welding rod wear.
7. Rod-wear warning behaviour.
8. Welding contact-path recording.
9. Surface/UV-based contact mapping investigation and implementation where appropriate.
10. 2D representation of the recorded welding path.
11. Demonstration build for Meta Quest 3.
12. POC demonstration/review session.

---

# 7. Out of Scope

The following items are specifically excluded from this Proof of Concept unless separately agreed:

- Full welding curriculum.
- Production-ready commercial training application.
- Multiple welding processes.
- MIG/GMAW training.
- TIG/GTAW training.
- FCAW training.
- Advanced welding physics.
- Realistic metallurgical simulation.
- Welding machine configuration training.
- Welding equipment setup procedures.
- Full PPE training.
- Multiple welding exercises.
- Advanced learner scoring.
- Automated competency assessment.
- Instructor dashboard.
- Learner management system.
- Cloud backend.
- Database development.
- LMS integration.
- Multiplayer functionality.
- User accounts and authentication.
- Analytics platform.
- Mobile application.
- Web application.
- Full 3D workshop environment.
- Photorealistic production assets.
- Hardware procurement.
- Specialist capture equipment.
- Production deployment.

These items may be considered as part of a subsequent development phase.

---

# 8. Development Timeline

The POC will be developed over approximately **3 weeks**.

## Week 1 — Environment & Core Interaction

Focus:

- Project setup.
- Meta Quest 3 configuration.
- Simplified welding environment.
- Virtual workpiece.
- Welding tool.
- Hand/controller interaction.
- Grab and manipulation.
- Welding rod positioning.
- Initial contact detection.

**Milestone:**  
Functional VR environment with the learner able to pick up and position the welding tool.

---

## Week 2 — Welding Interaction & Tracking

Focus:

- Welding contact behaviour.
- Welding sound.
- Sparks and light effects.
- Simulated weld deposit.
- Welding rod wear.
- Rod-wear warning.
- Contact recording.
- Surface contact mapping.
- UV-coordinate tracking investigation and implementation.

**Milestone:**  
Functional welding interaction with contact data being recorded.

---

## Week 3 — Visualisation, Testing & Refinement

Focus:

- Welding path reconstruction.
- 2D welding-path visualisation.
- Interaction refinement.
- Bug fixing.
- Performance optimisation.
- Meta Quest 3 testing.
- Final POC preparation.
- Demonstration.

**Milestone:**  
Functional POC demonstrating the complete agreed user journey.

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

Meta Quest 3 hardware and any specialist equipment required for development, physical capture, testing or demonstration will be assessed separately where required.

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

# 14. Acceptance Criteria

The POC will be considered successfully delivered when the agreed core functionality can be demonstrated on the target Meta Quest 3 platform.

The demonstration should include:

- Learner entering the VR environment.
- Learner receiving basic instructions.
- Learner picking up the virtual welding tool.
- Learner positioning the welding rod.
- Welding rod making contact with the workpiece.
- Simulated welding feedback being generated.
- Welding rod wear being demonstrated.
- Rod-wear warning being displayed.
- Welding contact path being recorded.
- Recorded contact data being used to generate a 2D representation of the learner's welding path.

The POC is intended to demonstrate technical feasibility and core interaction rather than final production quality.

---

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

The POC provides a technical foundation that may be expanded into a more comprehensive welding training system.

Potential future development could include:

- Multiple welding processes.
- Beginner and intermediate exercises.
- Welding equipment setup.
- PPE training.
- Guided welding exercises.
- Target welding paths.
- Advanced performance scoring.
- Automated assessment.
- Instructor dashboards.
- Learner progress tracking.
- Curriculum integration.
- Additional training environments.
- Web and mobile learning components.

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