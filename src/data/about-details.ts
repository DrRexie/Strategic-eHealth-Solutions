import type { DetailContent } from "@/components/DetailDialog";
import { Award, Building2, Globe, Target } from "lucide-react";

/**
 * Detail behind the four About-section cards' "Learn More" links, keyed by card title.
 * Describes approach and commitments — no invented engagements, figures or client names.
 */
export const ABOUT_DETAILS: Record<string, Omit<DetailContent, "title">> = {
  "Government Partnership": {
    kicker: "Why work with us",
    icon: Building2,
    overview:
      "We work alongside Ghana Health Service and the Ministry of Health as a partner to national programmes — supporting government priorities, not running parallel projects.",
    itemsHeading: "What this means",
    items: [
      {
        name: "Aligned with national priorities",
        detail:
          "Our work supports the Health Sector Medium-Term Development Plan 2026–2029, Ghana's path to Universal Health Coverage and the national digital health agenda.",
      },
      {
        name: "Government-led, not donor-led",
        detail:
          "We follow GHS and Ministry of Health leadership on what gets built and where, in line with GHS's call for partners to align with national priorities and avoid fragmented projects.",
      },
      {
        name: "Working at every level",
        detail:
          "We engage national divisions, regional and district health directorates and facilities, so systems fit how the health service is actually organised and managed.",
      },
      {
        name: "Building national ownership",
        detail:
          "Systems, data and know-how stay with Ghana's health institutions, with hand-over and training planned from the start.",
      },
    ],
    steps: [
      "Start from the government's stated priorities and plans",
      "Agree scope, roles and success measures with GHS and the Ministry",
      "Deliver through national structures, from headquarters to facilities",
      "Report progress openly to government counterparts",
    ],
    tags: ["Health Sector MTDP 2026–2029", "Universal Health Coverage", "Free Primary Healthcare", "National eHealth agenda"],
    focus: "Digital health that strengthens Ghana's own health system.",
    cta: { label: "Discuss a partnership", engagement: "partnership", message: "I'd like to discuss a government partnership." },
  },
  "Global Best Practices": {
    kicker: "Why work with us",
    icon: Globe,
    overview:
      "We apply international health data standards and proven methods, adapted to Ghana's realities — from connectivity and staffing to national forms and reporting.",
    itemsHeading: "What this means",
    items: [
      {
        name: "HL7 & FHIR standards",
        detail:
          "Systems exchange data using HL7 and FHIR, the international standards for health data, so they can connect with each other and with future systems without costly rebuilds.",
      },
      {
        name: "Shared clinical vocabularies",
        detail:
          "Using ICD-10 and, where needed, LOINC and SNOMED CT keeps diagnoses, tests and terms consistent across facilities and comparable internationally.",
      },
      {
        name: "Adapted for local context",
        detail:
          "Designs account for intermittent power and internet, local workflows and GHS forms, and integrate with national systems such as DHIMS2.",
      },
      {
        name: "Proven methodologies",
        detail:
          "Recognised approaches to requirements, testing, data quality, change management and monitoring and evaluation reduce risk and keep projects on track.",
      },
    ],
    steps: [
      "Review relevant international standards and what has worked elsewhere",
      "Adapt them to Ghana's policies, systems and settings",
      "Pilot, measure and refine before scaling",
      "Document decisions so they can be reused and audited",
    ],
    tags: ["HL7 v2 & FHIR", "ICD-10", "LOINC & SNOMED CT", "DHIMS2 (DHIS2-based)"],
    focus: "World-class standards that work in Ghanaian facilities.",
    cta: { label: "Discuss your requirements", engagement: "consultation", message: "I'd like to discuss applying international health data standards." },
  },
  "Implementation Excellence": {
    kicker: "Why work with us",
    icon: Target,
    overview:
      "We stay with a programme from first strategy to long-term support, so systems are not just installed but adopted and sustained.",
    itemsHeading: "What this means",
    items: [
      {
        name: "Strategy and planning",
        detail:
          "Clear goals, scope, budgets and timelines agreed up front, with risks identified early.",
      },
      {
        name: "Design and deployment",
        detail:
          "Systems configured with frontline staff, piloted in selected facilities and rolled out in phases with on-site support.",
      },
      {
        name: "Training and change management",
        detail:
          "Role-based training and support for staff through the change, so new tools become part of everyday work.",
      },
      {
        name: "Sustained support",
        detail:
          "Help-desk support, maintenance, upgrades and data-quality monitoring after go-live, with skills transferred to local teams.",
      },
    ],
    steps: [
      "Assess readiness at each site",
      "Pilot, learn and refine",
      "Scale in phases with support on the ground",
      "Monitor performance and keep improving",
    ],
    tags: ["Phased rollout", "Change management", "Help-desk support", "Skills transfer"],
    focus: "Systems that are used every day and keep working.",
    cta: { label: "Plan an implementation", engagement: "consultation", message: "I'd like to discuss an implementation." },
  },
  "Donor & Partner Ready": {
    kicker: "Why work with us",
    icon: Award,
    overview:
      "We run programmes the way donors and development partners need them run: transparent, measurable and well governed.",
    itemsHeading: "What this means",
    items: [
      {
        name: "Transparent reporting",
        detail:
          "Regular progress and financial reports in each partner's required format, with every figure traceable to its source data.",
      },
      {
        name: "M&E frameworks",
        detail:
          "Clear indicators, baselines and targets agreed at the start, with routine data collection to show results over time.",
      },
      {
        name: "Strong governance",
        detail:
          "Defined roles, decision-making and risk management, with data protection in line with Ghana's Data Protection Act, 2012 (Act 843) and ethical AI principles.",
      },
      {
        name: "Aligned with national plans",
        detail:
          "Programmes fit the Ministry of Health's priorities and coordination mechanisms, so partner funding strengthens the national system rather than duplicating it.",
      },
    ],
    steps: [
      "Agree results framework and reporting schedule",
      "Set up data collection and quality checks",
      "Report progress and lessons openly",
      "Plan for sustainability and hand-over",
    ],
    tags: ["Results frameworks", "Act 843 data protection", "Ethical AI", "SDG 3 & UHC"],
    focus: "Measurable, accountable impact for partners' investments.",
    cta: { label: "Engage as a partner", engagement: "donor", message: "I'd like to discuss engaging as a donor or development partner." },
  },
};
