import { CheckCircle2, Building2, Share2, Brain, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    icon: Building2,
    category: "EMR Implementation",
    title: "Nationwide EMR Rollout for Public Hospitals",
    challenge: "Fragmented patient data across multiple GHS facilities leading to incomplete medical histories, duplicated tests, and care coordination challenges.",
    solution: "Deployed standardized EMR systems across 200+ public health facilities with customized workflows, offline capabilities, and centralized data management.",
    outcomes: [
      "85% reduction in duplicate patient records",
      "60% faster clinical documentation",
      "Standardized reporting to DHIMS2",
      "Improved medication tracking and alerts"
    ],
    impact: "Serving 3M+ patients annually",
    color: "primary"
  },
  {
    id: 2,
    icon: Share2,
    category: "Health Information Exchange",
    title: "Health Information Exchange for Continuity of Care",
    challenge: "Patients receiving care at multiple facilities had no unified view of their health history, leading to repeated diagnostics and fragmented treatment plans.",
    solution: "Established regional HIE infrastructure enabling secure, consent-based sharing of patient records across public and private healthcare providers.",
    outcomes: [
      "Real-time patient data sharing across regions",
      "40% reduction in redundant laboratory tests",
      "Streamlined referral management system",
      "Enhanced public health surveillance"
    ],
    impact: "Connecting 150+ facilities",
    color: "secondary"
  },
  {
    id: 3,
    icon: Brain,
    category: "AI Analytics",
    title: "AI-Driven Public Health Analytics",
    challenge: "Manual data analysis limiting GHS's ability to identify disease patterns, allocate resources effectively, and report to stakeholders in a timely manner.",
    solution: "Implemented AI-powered analytics platform processing health data from connected facilities to generate actionable insights and automated reports.",
    outcomes: [
      "Early warning system for disease outbreaks",
      "Automated donor and ministry reporting",
      "Predictive models for resource planning",
      "Real-time dashboards for decision-makers"
    ],
    impact: "Analyzing 10M+ health records",
    color: "accent"
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Proven Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Case Studies:{" "}
            <span className="text-gradient">Transforming Healthcare in Ghana</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world implementations demonstrating measurable improvements in healthcare 
            delivery, data management, and clinical outcomes.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-card rounded-3xl shadow-card border border-border overflow-hidden ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      study.color === 'primary' ? 'bg-primary/10' :
                      study.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
                    }`}>
                      <study.icon className={`w-5 h-5 ${
                        study.color === 'primary' ? 'text-primary' :
                        study.color === 'secondary' ? 'text-secondary' : 'text-accent'
                      }`} />
                    </div>
                    <span className={`text-sm font-semibold uppercase tracking-wider ${
                      study.color === 'primary' ? 'text-primary' :
                      study.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`}>
                      {study.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    {study.title}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive" />
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        study.color === 'primary' ? 'bg-primary' :
                        study.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                      }`} />
                      Our Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Outcomes Side */}
                <div className={`p-8 lg:p-12 ${
                  study.color === 'primary' ? 'bg-primary/5' :
                  study.color === 'secondary' ? 'bg-secondary/5' : 'bg-accent/5'
                }`}>
                  <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                    <TrendingUp className={`w-5 h-5 ${
                      study.color === 'primary' ? 'text-primary' :
                      study.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`} />
                    Key Outcomes
                  </h4>

                  <ul className="space-y-4 mb-8">
                    {study.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          study.color === 'primary' ? 'text-primary' :
                          study.color === 'secondary' ? 'text-secondary' : 'text-accent'
                        }`} />
                        <span className="text-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                    study.color === 'primary' ? 'bg-primary text-primary-foreground' :
                    study.color === 'secondary' ? 'bg-secondary text-secondary-foreground' : 'bg-accent text-accent-foreground'
                  }`}>
                    <span className="font-semibold">{study.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
