/**
 * Short, sourced briefings behind the "GHS Leadership", "Development Partners" and
 * "Donors & Investors" tags in the contact section.
 * Facts checked against the linked sources in November 2026 — re-check when leadership or funding changes.
 */
export interface GhsBrief {
  label: string;
  heading: string;
  summary: string;
  points: string[];
  sources: { name: string; url: string }[];
}

export const GHS_BRIEFS_CHECKED = "November 2026";

export const GHS_BRIEFS: GhsBrief[] = [
  {
    label: "GHS Leadership",
    heading: "Who leads the Ghana Health Service",
    summary:
      "The Ghana Health Service (GHS) delivers public healthcare and implements national health policy under the Ministry of Health.",
    points: [
      "Director-General: Prof. Samuel Kaba Akoriyea, a neurosurgeon appointed by President John Dramani Mahama in January 2025, succeeding Dr. Patrick Kuma-Aboagye.",
      "GHS Council Chair: Prof. Fred Newton Binka.",
      "Minister for Health: Hon. Kwabena Mintah Akandoh.",
      "Current priority: the Free Primary Healthcare programme, launched in April 2026 to provide free basic care at primary health facilities.",
    ],
    sources: [
      { name: "GHS — Council Chair and Director-General on Free Primary Healthcare (Jul 2026)", url: "https://ghs.gov.gh/news-and-events/ghs-council-chair-prof-binka-and-director-general-dr-kaba-akoriyea-rally-health-workers-behind-free-primary-healthcare" },
      { name: "Rainbow Radio — Prof. Kaba Akoriyea appointed Director-General (Jan 2025)", url: "https://rainbowradioonline.com/2025/01/29/prof-samuel-kaba-akoriyea-appointed-new-director-general-for-ghs/" },
      { name: "MyJoyOnline — Free Primary Healthcare programme update (Sep 2026)", url: "https://myjoyonline.com/health-minister-to-brief-media-on-free-primary-healthcare-programme-on-monday" },
    ],
  },
  {
    label: "Development Partners",
    heading: "How GHS works with development partners",
    summary:
      "GHS is asking partners to align their technical and financial support with national priorities, under Ministry of Health and Government of Ghana leadership.",
    points: [
      "November 2025: GHS held its first Strategic Coordination Meeting with development partners, to improve collaboration, reduce duplication and strengthen accountability.",
      "The Director-General warned that funding shifting into separate, fragmented projects weakens national ownership, and urged partners to harmonise their support.",
      "GHS runs a Development-Partner Mapping platform where partners register their work, so support reaches every region without duplication.",
      "Partners include WHO (Country Representative Dr. Fiona Braka), the World Bank, Gavi, the Global Fund and bilateral partners such as Japan, supporting immunisation, malaria, HIV, maternal and child health and emergency preparedness.",
    ],
    sources: [
      { name: "GNA — GHS urges partners to align support with national priorities (Nov 2025)", url: "https://gna.org.gh/2025/11/ghs-urges-health-partners-to-align-support-with-national-priorities/" },
      { name: "Ghanaian Times — GHS and partners meet to strengthen coordination (Nov 2025)", url: "https://ghanaiantimes.com.gh/ghana-health-service-partners-meet-to-strengthen-coordination-in-health-sector" },
      { name: "GHS Development-Partner Mapping platform", url: "https://dpms.ghs.gov.gh/" },
      { name: "Citi Newsroom — Ebola preparedness with WHO Country Representative (May 2026)", url: "https://www.citinewsroom.com/2026/05/ghana-activates-emergency-health-protocols-over-possible-ebola-threat/" },
    ],
  },
  {
    label: "Donors & Investors",
    heading: "Health financing in Ghana today",
    summary:
      "Ghana is moving from donor dependence toward health financing it plans and controls itself, while external partners remain important.",
    points: [
      "2026 budget: about GH¢34.2 billion allocated to the health sector, a 23% nominal rise on 2025 (CHPDA analysis).",
      "Ghana is on track to exit Gavi vaccine funding by 2030 and, from January 2030, plans to fully finance vaccines and critical medicines as Global Fund support declines.",
      "World Bank: Ghana is preparing a government-led health Country Compact (announced May 2026), and the Bank is preparing a new six-year country partnership framework with the government.",
      "April 2026: Ghana declined a proposed five-year, US$109 million US health agreement over terms requiring the sharing of sensitive health data.",
    ],
    sources: [
      { name: "MyJoyOnline — Ghana's 2026 health budget (CHPDA)", url: "https://www.myjoyonline.com/ghanas-2026-health-budget-rises-but-falls-short-of-global-benchmarks-chpda/" },
      { name: "MyJoyOnline — On track to exit Gavi funding by 2030 (May 2026)", url: "https://www.myjoyonline.com/ghana-on-track-to-exit-gavi-vaccine-funding-by-2030-mahama-announces-at-world-health-assembly/" },
      { name: "Ministry of Finance — Fully financing vaccines and critical medicines from 2030", url: "https://mofep.gov.gh/node/2209" },
      { name: "News Ghana — Health financing Country Compact with the World Bank (May 2026)", url: "https://www.newsghana.com.gh/ghana-to-lead-own-health-financing-compact-with-world-bank/" },
      { name: "MyJoyOnline — World Bank health strategy launch in Accra (May 2026)", url: "https://www.myjoyonline.com/world-bank-launches-strategy-to-transform-west-central-africas-health-systems/" },
      { name: "Graphic — Why Ghana rejected the US health aid deal (Apr 2026)", url: "https://www.graphic.com.gh/news/health/ghana-rejects-us-health-aid-deal.html" },
    ],
  },
];
