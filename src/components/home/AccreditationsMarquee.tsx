import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";

const GET_ACCREDITATIONS_QUERY = `
  *[_type == "accreditation"] | order(order asc) {
    _id,
    authority,
    title,
    "logoUrl": logo.asset->url
  }
`;

export default async function AccreditationsMarquee() {
  const accreditations = await client.fetch(GET_ACCREDITATIONS_QUERY);

  // If no accreditations in Sanity yet, don't show the section or just show empty
  if (!accreditations || accreditations.length === 0) {
    return null;
  }

  // Duplicate the array to create a seamless loop
  const marqueeItems = [...accreditations, ...accreditations];

  return (
    <section className="bg-slate-50 py-24 overflow-hidden border-b border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
          Global Quality Accreditations
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Our facility operates under strict international guidelines to ensure regulatory-ready data.
        </p>
      </div>

      <div className="relative flex w-full mt-10">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent sm:w-64" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent sm:w-64" />

        <div className="flex w-fit animate-marquee items-center space-x-6 sm:space-x-10 pl-6 sm:pl-10">
          {marqueeItems.map((item, index) => (
            <Link 
              href="/accreditations"
              key={index} 
              className="group flex h-[280px] w-[350px] shrink-0 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10"
            >
              <div className="relative flex h-40 w-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
                {item.logoUrl ? (
                  <Image
                    src={item.logoUrl}
                    alt={item.authority}
                    width={240}
                    height={160}
                    className="object-contain max-h-full"
                  />
                ) : (
                  <div className="text-xl font-bold text-slate-400">{item.authority}</div>
                )}
              </div>
              
              <div className="mt-4 w-full border-t border-slate-100 pt-5 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                  {item.authority}
                </p>
                <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
