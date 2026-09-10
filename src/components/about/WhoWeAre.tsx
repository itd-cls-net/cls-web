import Image from "next/image";
import { Pill, Package, Stethoscope } from "lucide-react";

const industries = [
  { name: "Pharmaceutical", icon: Pill },
  { name: "Pharmaceutical Packaging", icon: Package },
  { name: "Medical Devices", icon: Stethoscope },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — Image */}
          <div className="relative w-full overflow-hidden rounded-md shadow-lg shadow-slate-200/50 ring-1 ring-slate-100">
            <Image
              src="/facility-building.png"
              alt="CLS Laboratory at TICEL Bio Park"
              width={1000}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Right — Story */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Who We Are
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand-accent rounded-full" />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                <strong className="text-brand-dark">Cephas Life Sciences (CLS) Private Limited</strong> was
                established in July 2019 with a singular vision: to provide specialized analytical and research
                services for pharmaceuticals and medical device products.
              </p>
              <p>
                Our mission is to meet — and exceed — customer expectations in terms of quality, delivery, and
                cost. At CLS, we are committed to adding value by offering need-based pre and post-support
                services to help our customers meet their regulatory and research requirements.
              </p>
              <p>
                Our expertise lies in conducting both qualitative and quantitative studies, with deep
                specialization in the testing of extractables and leachables — one of the most critical areas
                of pharmaceutical safety.
              </p>
            </div>

            {/* Industries Callout */}
            <div className="mt-10 border-t border-brand-border pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Industries We Serve
              </p>
              <div className="flex flex-wrap gap-4">
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <div
                      key={industry.name}
                      className="flex items-center gap-2 rounded-full border border-brand-border bg-brand-grey px-4 py-2"
                    >
                      <Icon className="h-4 w-4 text-brand-primary" />
                      <span className="text-sm font-medium text-brand-dark">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
