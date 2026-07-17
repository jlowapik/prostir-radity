import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Distinctness } from "@/components/distinctness";
import { Schedule } from "@/components/schedule";
import { Team } from "@/components/team";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Philosophy />
        <Distinctness />
        <Schedule />
        <Team />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
