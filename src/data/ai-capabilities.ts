import { Activity, BarChart3, Bell, FileText, Stethoscope, TrendingUp, type LucideIcon } from "lucide-react";

/**
 * Detail behind each AI capability card in the AI-Powered Intelligence section.
 * Describes how the capability works and where it fits — no invented results or client claims.
 */
export interface AiCapability {
  icon: LucideIcon;
  title: string;
  description: string; // short line shown on the card
  overview: string;
  whatItDoes: string[];
  howItWorks: string[];
  connects: string[];
  safeguards: string[];
  forWhom: string;
}

export const AI_CAPABILITIES: AiCapability[] = [
  {
    icon: Stethoscope,
    title: "Clinical Decision Support",
    description: "AI-powered recommendations for diagnosis, treatment protocols, and care pathways.",
    overview:
      "Brings the right guideline, alert or suggestion to clinicians at the moment of care, using the patient's own record — so busy facilities apply national protocols consistently.",
    whatItDoes: [
      "Suggests likely diagnoses and next investigations from symptoms, vital signs and lab results",
      "Recommends treatment in line with Ghana's Standard Treatment Guidelines and care pathways",
      "Flags drug–drug interactions, allergies and dosing outside safe ranges",
      "Highlights missing steps in a pathway, such as an overdue antenatal test or follow-up",
    ],
    howItWorks: [
      "Reads structured EMR data (vitals, labs, medications) and clinical notes through natural language processing",
      "Retrieves guidance from approved clinical sources, so suggestions are grounded in evidence rather than the model's memory",
      "Shows each recommendation with its reason and source, inside the clinician's normal EMR workflow",
    ],
    connects: ["EMR systems", "Laboratory and pharmacy systems", "National treatment guidelines"],
    safeguards: [
      "Advisory only: the clinician always makes and records the decision",
      "Every suggestion is explainable and logged for clinical audit",
      "Content reviewed by local clinical leads before it goes live",
    ],
    forWhom: "Hospitals, polyclinics and health centres using an EMR",
  },
  {
    icon: Activity,
    title: "Early Warning Systems",
    description: "Real-time monitoring and alerts for disease outbreaks and patient deterioration.",
    overview:
      "Two kinds of early warning: spotting unusual disease patterns across facilities before they become outbreaks, and spotting patients on the ward who are getting worse.",
    whatItDoes: [
      "Detects unusual rises in priority conditions (for example malaria, cholera, measles or meningitis) by district and week",
      "Supports Integrated Disease Surveillance and Response (IDSR) with timely, threshold-based alerts",
      "Tracks inpatient vital signs and raises deterioration scores so teams can act sooner",
      "Sends alerts to the right person — district health officer, ward nurse or doctor on call",
    ],
    howItWorks: [
      "Pulls case and diagnosis data from connected EMRs and the Health Information Exchange as it is recorded",
      "Compares current counts with expected seasonal levels to separate real signals from normal variation",
      "Uses recognised early-warning scoring for vital signs on wards",
    ],
    connects: ["EMR systems", "HIE platform", "Disease surveillance (IDSR) and DHIMS2", "Analytics dashboard"],
    safeguards: [
      "Alert thresholds agreed with public health and clinical teams",
      "Alerts carry their underlying data so staff can verify them quickly",
      "Tuned over time to keep false alarms and alert fatigue low",
    ],
    forWhom: "District and regional health directorates, surveillance teams and hospital wards",
  },
  {
    icon: BarChart3,
    title: "Population Health Analytics",
    description: "Advanced analytics identifying health trends and resource optimization opportunities.",
    overview:
      "Turns data from many facilities into a clear picture of who is getting sick, where, and where services or resources are falling short.",
    whatItDoes: [
      "Maps disease burden, service coverage and outcomes by region, district and facility",
      "Identifies high-risk groups, such as mothers who miss antenatal visits or patients lost to HIV or TB follow-up",
      "Compares facility performance on key indicators to guide supervision and support",
      "Shows where staff, beds, medicines and equipment are stretched or under-used",
    ],
    howItWorks: [
      "Combines de-identified records from EMRs and the HIE with DHIMS2 aggregate data",
      "Cleans and links records so the same patient is not counted twice",
      "Presents results in role-based dashboards for national, regional and district managers",
    ],
    connects: ["EMR systems", "HIE platform", "DHIMS2", "Analytics dashboard"],
    safeguards: [
      "Analysis uses de-identified or aggregated data wherever possible",
      "Access is limited by role and level of the health system",
      "Handled in line with Ghana's Data Protection Act, 2012 (Act 843)",
    ],
    forWhom: "Ministry of Health, GHS divisions, regional and district health management teams",
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "Intelligent generation of DHIMS2 reports, donor reports, and compliance documentation.",
    overview:
      "Produces routine reports straight from facility data, so health workers spend less time on paperwork and reports arrive on time and consistent.",
    whatItDoes: [
      "Prepares monthly DHIMS2 returns directly from EMR records instead of manual tally sheets",
      "Generates donor and programme reports in each partner's required format",
      "Assembles compliance and audit documentation with a clear trail back to the source data",
      "Flags missing, late or inconsistent figures before a report is submitted",
    ],
    howItWorks: [
      "Maps EMR data elements to DHIMS2 indicators and to each partner's reporting template",
      "Runs validation rules to catch gaps and outliers ahead of submission",
      "Lets facility and district officers review and approve every report before it goes out",
    ],
    connects: ["EMR systems", "DHIMS2", "GHS and Ministry of Health reporting", "Donor reporting templates"],
    safeguards: [
      "Human review and sign-off before anything is submitted",
      "Each reported figure can be traced to its source records",
      "Version history kept for audits",
    ],
    forWhom: "Facility records and health information officers, programme managers and development partners",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Context-aware alerts for follow-ups, medication reminders, and care gaps.",
    overview:
      "Keeps patients in care by reminding them — and the staff looking after them — about the next step, at the right time and in the right channel.",
    whatItDoes: [
      "Sends reminders for appointments, immunisations, antenatal and postnatal visits",
      "Supports medication adherence for long-term conditions such as HIV, TB, hypertension and diabetes",
      "Alerts staff to care gaps, such as missed visits or overdue lab results",
      "Prioritises follow-up lists so community health workers reach the patients who need it most",
    ],
    howItWorks: [
      "Reads schedules and care plans from the EMR and triggers messages based on each patient's situation",
      "Delivers by SMS, voice or app, in the patient's preferred language where available",
      "Groups and ranks staff alerts so the most urgent ones stand out",
    ],
    connects: ["EMR systems", "HIE platform", "SMS and voice services", "Community health worker tools"],
    safeguards: [
      "Patients consent to messages and can opt out",
      "Messages avoid revealing sensitive diagnoses",
      "Alert volumes managed to prevent fatigue",
    ],
    forWhom: "Facilities, community health programmes and disease programmes focused on follow-up",
  },
  {
    icon: TrendingUp,
    title: "Predictive Modeling",
    description: "Forecast disease burden, resource needs, and health outcomes for planning.",
    overview:
      "Looks ahead so planners can act before shortages or surges happen — from seasonal disease peaks to medicine stock and staffing needs.",
    whatItDoes: [
      "Forecasts seasonal and emerging disease burden by region and district",
      "Projects demand for medicines, vaccines, beds and staff",
      "Estimates which patients are at higher risk of complications or readmission",
      "Tests 'what if' scenarios to support budgeting and policy decisions",
    ],
    howItWorks: [
      "Learns from historical service, surveillance and supply data, alongside factors such as season and population",
      "Uses established statistical and machine-learning models, validated against past results",
      "Shows forecasts with ranges of uncertainty, not single numbers",
    ],
    connects: ["Analytics dashboard", "DHIMS2", "EMR systems", "Supply chain data"],
    safeguards: [
      "Models validated locally and re-checked regularly for accuracy and bias",
      "Assumptions documented so planners understand the limits",
      "Forecasts inform decisions; people make them",
    ],
    forWhom: "Planners and managers at the Ministry of Health, GHS and regional and district levels",
  },
];
