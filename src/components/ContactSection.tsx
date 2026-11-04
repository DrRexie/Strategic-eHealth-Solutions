import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { GHS_BRIEFS, GHS_BRIEFS_CHECKED } from "@/data/ghs-briefs";
import { useEffect, useState } from "react";
import { CONSULTATION_PREFILL_EVENT } from "@/lib/consultation-prefill";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, MapPin, Mail, Phone, Plus, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/track";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  organization: z.string().min(2, "Organization must be at least 2 characters").max(200),
  email: z.string().email("Please enter a valid email address").max(255),
  role: z.string().min(2, "Role must be at least 2 characters").max(100),
  engagement_type: z.string().min(1, "Please select an engagement type"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const engagementTypes = [
  { value: "consultation", label: "Book a Consultation" },
  { value: "demo", label: "Request a Demo" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "donor", label: "Donor/Investor Engagement" },
  { value: "other", label: "Other" },
];

// Inquiries go to the Site Console dashboard, which stores them and emails an alert.
const INQUIRY_ENDPOINT = "https://rex-console.vercel.app/api/inquiries";

// Map this form's engagement types onto the dashboard's audience groups.
const audienceFor = (engagement: string) =>
  engagement === "partnership" || engagement === "donor" ? "government" : "other";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      role: "",
      engagement_type: "",
      message: "",
    },
  });

  // AI capability panels can pre-select the engagement type and start the message.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const { engagement, message } = (e as CustomEvent<{ engagement?: string; message?: string }>).detail ?? {};
      if (engagement) form.setValue("engagement_type", engagement, { shouldValidate: false });
      if (message && !form.getValues("message")) form.setValue("message", message);
    };
    window.addEventListener(CONSULTATION_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(CONSULTATION_PREFILL_EVENT, onPrefill);
  }, [form]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const engagementLabel =
        engagementTypes.find((t) => t.value === data.engagement_type)?.label ?? data.engagement_type;
      const response = await fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          organization: data.organization,
          email: data.email,
          role: data.role,
          audience: audienceFor(data.engagement_type),
          service: engagementLabel,
          message: data.message,
          website: "", // honeypot field expected by the endpoint; always empty here
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Submission failed");
      }

      track("inquiry_submit");
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Request Submitted",
        description: "Thank you! We'll be in touch within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-healthcare-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Content */}
          <div>
            <span className="eyebrow eyebrow-dark mb-5">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.1]">
              Ready to Transform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Healthcare in Ghana?
              </span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Whether you're from Ghana Health Service, a development partner, donor, 
              or investor — we're ready to discuss how Strategic eHealth Solutions can 
              support your digital health objectives.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <a href="mailto:contact@strategicehealthsolutions.com" className="break-all hover:text-secondary transition-colors">contact@strategicehealthsolutions.com</a>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+233201365160" className="hover:text-secondary transition-colors">+233 (0) 20136 5160</a>
                  <a href="tel:+18484670341" className="hover:text-secondary transition-colors">+1 (848) 467-0341</a>
                </div>
              </div>
            </div>

            {/* GHS briefings — each tag opens a short, sourced summary */}
            <div className="flex flex-wrap gap-3">
              {GHS_BRIEFS.map((brief) => (
                <Popover key={brief.label}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="group inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 transition-all duration-200 hover:border-secondary/70 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary data-[state=open]:border-secondary data-[state=open]:bg-white/20 data-[state=open]:text-white"
                    >
                      {brief.label}
                      <Plus className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-45" aria-hidden="true" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    side="top"
                    align="start"
                    sideOffset={10}
                    collisionPadding={16}
                    className="w-[min(92vw,26rem)] max-h-[70vh] overflow-y-auto rounded-2xl p-5 shadow-xl"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">Ghana Health Service · {brief.label}</p>
                    <h4 className="mt-1 font-display text-base font-semibold text-foreground">{brief.heading}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brief.summary}</p>
                    <ul className="mt-3 space-y-2 border-t border-border pt-3">
                      {brief.points.map((point) => (
                        <li key={point} className="flex gap-2 text-[13px] leading-relaxed text-foreground/85">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-border pt-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Sources</p>
                      <ul className="mt-1.5 space-y-1">
                        {brief.sources.map((src) => (
                          <li key={src.url}>
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-start gap-1 text-xs text-primary hover:underline"
                            >
                              <ExternalLink className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                              {src.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-[11px] text-muted-foreground">Information as of {GHS_BRIEFS_CHECKED}.</p>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elevated ring-1 ring-white/10">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your request has been received. Our team will contact you within 24 hours.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Request a Consultation
                </h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input autoComplete="name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organization</FormLabel>
                            <FormControl>
                              <Input autoComplete="organization" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" autoComplete="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Role</FormLabel>
                            <FormControl>
                              <Input autoComplete="organization-title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="engagement_type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How Can We Help?</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select engagement type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {engagementTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your digital health objectives and how we can support you..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-12 bg-healthcare-navy hover:bg-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Request
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
