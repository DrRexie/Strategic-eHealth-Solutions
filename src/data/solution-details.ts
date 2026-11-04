/**
 * Detail behind each Core Solutions card's "Learn More" link, keyed by the card title.
 * Each listed feature on the card gets its own explanation. Describes scope and approach —
 * no invented results or client claims (those live in the Case Studies section).
 */
export interface SolutionDetail {
  overview: string;
  features: { name: string; detail: string }[]; // same order and names as the card's bullet list
  approach: string[];
  standards: string[];
  outcomeFocus: string;
}

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
  "National EMR/EHR Systems": {
    overview:
      "Electronic medical and health record systems that replace paper folders with one secure record per patient — sized for a single clinic, a hospital network or a national rollout across Ghana Health Service facilities.",
    features: [
      {
        name: "Customized for GHS workflows",
        detail:
          "Registration, OPD, inpatient, maternity, child health, laboratory and pharmacy screens follow the way GHS facilities already work, with national forms, terminology and reporting built in rather than bolted on.",
      },
      {
        name: "Offline/online hybrid support",
        detail:
          "Facilities keep working when power or internet drops. Records are saved locally and synchronise securely when the connection returns, so care is never held up by connectivity.",
      },
      {
        name: "NHIS integration ready",
        detail:
          "Captures National Health Insurance Scheme membership, services and diagnoses at the point of care, so claims to the National Health Insurance Authority can be prepared from the record itself with fewer errors and rejections.",
      },
      {
        name: "Multi-facility management",
        detail:
          "One system for many sites: central configuration, user and role management, and district and regional views of activity, while each facility keeps control of its own day-to-day work.",
      },
    ],
    approach: [
      "Assess current workflows, infrastructure and readiness at each facility",
      "Configure and pilot in selected facilities, refining with frontline staff",
      "Train users and run a phased rollout with on-site support",
      "Provide ongoing maintenance, upgrades and help-desk support",
    ],
    standards: ["HL7 & FHIR", "ICD-10", "DHIMS2 reporting", "Role-based access & audit trails"],
    outcomeFocus: "Complete patient histories, fewer duplicate records and faster, standardised documentation.",
  },
  "Health Information Exchange (HIE)": {
    overview:
      "The secure network that lets patient information follow the patient — between public and private facilities, laboratories and programmes — with consent and clear rules about who can see what.",
    features: [
      {
        name: "Continuity of care",
        detail:
          "When a patient visits a new facility, authorised clinicians can see key history — diagnoses, medications, allergies, recent results — so they avoid repeating tests and make safer decisions.",
      },
      {
        name: "Referral management",
        detail:
          "Electronic referrals carry the patient's summary to the receiving facility, track whether the patient arrived, and send feedback to the referring clinician, closing the loop that paper referrals often leave open.",
      },
      {
        name: "Public health surveillance",
        detail:
          "Notifiable conditions and key indicators flow from facilities to district, regional and national surveillance teams as care is recorded, supporting faster outbreak detection and response.",
      },
      {
        name: "Real-time reporting",
        detail:
          "Managers see up-to-date service and disease data across connected facilities instead of waiting for month-end summaries, so they can act on problems sooner.",
      },
    ],
    approach: [
      "Agree governance, consent and data-sharing rules with stakeholders",
      "Set up a master patient index so each person is matched across facilities",
      "Connect EMRs, laboratories and programme systems through standard interfaces",
      "Monitor data quality, security and usage once live",
    ],
    standards: ["HL7 FHIR", "Master patient index", "Consent management", "Ghana Data Protection Act, 2012 (Act 843)"],
    outcomeFocus: "Care that continues across facilities, fewer redundant tests and timely public health data.",
  },
  "AI Agents for Healthcare": {
    overview:
      "AI agents that take on repetitive, data-heavy work and support clinical and management decisions — always with people in control of the final call.",
    features: [
      {
        name: "Clinical decision support",
        detail:
          "Suggests diagnoses, investigations and treatment in line with national guidelines, and flags drug interactions and missed steps, inside the clinician's normal workflow.",
      },
      {
        name: "Automated reporting",
        detail:
          "Prepares DHIMS2 returns, programme and donor reports directly from facility data, checks them for gaps and inconsistencies, and routes them for human sign-off.",
      },
      {
        name: "Claims processing",
        detail:
          "Checks health insurance claims for completeness, coding and eligibility before submission, highlighting likely rejections so they can be fixed early.",
      },
      {
        name: "Population health analytics",
        detail:
          "Finds trends, high-risk groups and service gaps across regions and districts, and forecasts demand for medicines, staff and beds to support planning.",
      },
    ],
    approach: [
      "Identify high-value, well-defined tasks with clinical and management leads",
      "Prepare and govern the data the agents will use",
      "Pilot with human review of every output, then measure accuracy and benefit",
      "Scale gradually with monitoring for accuracy, bias and safety",
    ],
    standards: ["Human-in-the-loop review", "Explainable outputs", "Audit logging", "Ethical AI principles"],
    outcomeFocus: "Less paperwork, faster and more accurate decisions, and better use of scarce resources.",
  },
  "Interoperability & Standards": {
    overview:
      "Integration work that lets different health systems talk to each other — and to national infrastructure — using recognised standards rather than one-off connections.",
    features: [
      {
        name: "HL7 & FHIR compliance",
        detail:
          "Systems exchange data using HL7 and FHIR, the international standards for health data, so new applications can connect without custom rebuilds and data keeps its meaning between systems.",
      },
      {
        name: "DHIMS2 integration",
        detail:
          "Facility data maps automatically to DHIMS2 indicators, so aggregate reports reach the national health information system without manual re-entry.",
      },
      {
        name: "Insurance system APIs",
        detail:
          "Secure interfaces connect facility systems to health insurance processes for membership checks and claims, reducing manual handling and errors.",
      },
      {
        name: "Lab & pharmacy links",
        detail:
          "Laboratory orders and results, and prescriptions and dispensing, move electronically between clinicians, laboratories and pharmacies, cutting transcription errors and delays.",
      },
    ],
    approach: [
      "Map existing systems, data flows and gaps",
      "Agree data standards, terminology and code sets",
      "Build, test and certify each interface",
      "Document and hand over, with monitoring of live data exchange",
    ],
    standards: ["HL7 v2 & FHIR", "ICD-10", "LOINC & SNOMED CT", "DHIMS2 (DHIS2-based)"],
    outcomeFocus: "Connected systems, less duplicate data entry and data that can be trusted across the health system.",
  },
  "Digital Health Strategy & Capacity Building": {
    overview:
      "Advisory and training that help health organisations plan, govern and sustain digital health — so investments keep delivering after go-live.",
    features: [
      {
        name: "eHealth architecture",
        detail:
          "A blueprint for how EMRs, the HIE, registries, reporting and analytics fit together, aligned with Ghana's national eHealth direction, so systems are chosen and built to connect.",
      },
      {
        name: "Governance frameworks",
        detail:
          "Policies, roles and processes for data ownership, privacy, security, data quality and ethical AI, in line with Ghana's Data Protection Act, 2012 (Act 843).",
      },
      {
        name: "Clinical training",
        detail:
          "Practical, role-based training that helps doctors, nurses, midwives and records staff use digital tools confidently in daily care.",
      },
      {
        name: "IT team development",
        detail:
          "Skills transfer for in-house IT and health information teams — system administration, support, data management and analytics — so facilities can run and improve systems themselves.",
      },
    ],
    approach: [
      "Assess digital maturity, skills and priorities",
      "Co-develop a roadmap and governance with leadership",
      "Deliver training and mentoring on the job",
      "Review progress and adjust the plan over time",
    ],
    standards: ["National eHealth strategy alignment", "Act 843 data protection", "M&E frameworks", "Change management"],
    outcomeFocus: "Sustainable, locally owned digital health capability.",
  },
};
