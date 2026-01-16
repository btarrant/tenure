import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      {/* Section 1: HERO */}
      <section className="relative min-h-[90vh] bg-black overflow-hidden px-6 flex flex-col items-center justify-center">

        {/* TEXT */}
        <div className="relative z-20 max-w-3xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white">
            Your career shouldn’t be reactive.
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Tenure keeps you continuously market-ready — without job searching.
          </p>

          <div className="mt-10">
            <a
              href="#waitlist"
              className="inline-block rounded-md bg-white px-6 py-3 text-black text-sm font-medium hover:bg-gray-200 transition"
            >
              Get Covered
            </a>
          </div>
        </div>

        {/* VISUAL CANVAS */}
        <div className="relative mt-20 h-[520px] w-full max-w-6xl rounded-2xl bg-zinc-900/80 border border-white/10 overflow-hidden">

          {/* Coverage aura */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-3xl" />
          </div>

          {/* Central person */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src="/hero/person1.png"
              alt="Professional protected by Tenure"
              width={620}
              height={420}
              priority
              className="object-contain scale-[1.6]"
            />
          </div>

          {/* Floating system cards */}
          <div className="absolute inset-0 z-20 pointer-events-none">

            {/* Card: Interview Ready */}
            <div className="absolute left-8 top-[35%] w-[220px] rounded-xl bg-neutral-900/90 backdrop-blur border border-white/10 p-4 shadow-xl">
              <p className="text-xs text-emerald-400 font-medium">
                Interview Ready
              </p>
              <p className="mt-1 text-sm text-white">
                AI interview questions updated
              </p>
              <p className="mt-2 text-xs text-gray-400">
                Role: Project Manager
              </p>
            </div>

            {/* Card: Resume Active */}
            <div className="absolute right-4 top-[20%] w-[220px] rounded-xl bg-neutral-900/90 backdrop-blur border border-white/10 p-4 shadow-xl">
              <p className="text-xs text-blue-400 font-medium">
                Resume Active
              </p>
              <p className="mt-1 text-sm text-white">
                Resume optimized for current market
              </p>
              <p className="mt-2 text-xs text-gray-400">
                Last updated 3 days ago
              </p>
            </div>

            {/* Card: Hiring Pipeline */}
            <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[260px] rounded-xl bg-neutral-900/90 backdrop-blur border border-white/10 p-4 shadow-xl">
              <p className="text-xs text-purple-400 font-medium">
                Hiring Pipeline
              </p>
              <p className="mt-1 text-sm text-white">
                Included in 4 active candidate pools
              </p>
              <p className="mt-2 text-xs text-gray-400">
                Roles matched automatically
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: HOW IT WORKS */}
      <section className="bg-black px-6 py-32">
        <div className="mx-auto max-w-6xl">
          
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Career insurance, built for how hiring actually works.
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              Tenure keeps you quietly prepared and continuously visible —
              so opportunities come to you before you ever need them.
            </p>
          </div>

          {/* PILLAR 1 */}
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur">
              <p className="text-sm font-medium text-emerald-400">
                Always-on visibility
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                Stay in hiring pools without applying
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Tenure automatically keeps your profile active and discoverable
                for relevant roles — even when you’re not looking.
              </p>
            </div>

          {/* PILLAR 2 */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur">
            <p className="text-sm font-medium text-blue-400">
              Interview readiness
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              Stay sharp without cramming
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Personalized AI interview questions and role-specific prompts
              keep you prepared — quietly, consistently, and on your schedule.
            </p>
          </div>

          {/* PILLAR 3 */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur">
            <p className="text-sm font-medium text-purple-400">
              Automatic matching
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              Opportunities come to you
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              When roles align with your background, Tenure places you into
              candidate pools automatically — no searching required.
            </p>
          </div>

          </div>
        </div>
      </section>

      {/* Section 3: TRUST & POSITIONING */}
      <section className="bg-neutral-950 px-6 py-32">

        <div className="mx-auto max-w-6xl text-center">
          
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Designed to work quietly — while you focus on your job.
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-gray-400">
            Tenure runs in the background, keeping you prepared and visible
            without notifying your employer or disrupting your career.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3 text-left">

          {/* CARD 1 */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">
              Private by default
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Your activity is never visible to your employer. Tenure operates
              independently and discreetly.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">
              You stay in control
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Adjust roles, pause visibility, or change preferences at any time —
              no commitments required.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">
              Not a job board
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Tenure isn’t about searching. It’s about staying ready before you
              ever need to.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: PRICING */}
      <section className="bg-black px-6 py-32">
        <div className="mx-auto max-w-6xl">
          
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Simple pricing. Continuous protection.
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              Tenure costs less than reacting to unemployment —
              and less than most professionals already spend staying visible.
            </p>
          </div>

          <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-neutral-900/60 p-10 backdrop-blur">

          <p className="text-sm font-medium text-emerald-400">
            Tenure Membership
          </p>

          <div className="mt-4 flex items-end gap-2">
            <span className="text-5xl font-semibold text-white">$29</span>
            <span className="text-gray-400 mb-1">/ month</span>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Comparable to professional networking tools —
            designed for continuous readiness instead.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-gray-300">
            <li>• Always-on hiring pool visibility</li>
            <li>• AI-generated interview readiness prompts</li>
            <li>• Automatic role matching</li>
            <li>• Private, independent operation</li>
          </ul>

          <div className="mt-10">
            <a
              href="#waitlist"
              className="block w-full rounded-md bg-white px-6 py-3 text-center text-sm font-medium text-black hover:bg-gray-200 transition"
            >
              Get Covered
            </a>

            <p className="mt-3 text-xs text-gray-500 text-center">
              Cancel anytime. No contracts.
            </p>
          </div>

        </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-neutral-950 px-6 py-40">
        <div className="mx-auto max-w-4xl text-center">
              
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Be ready — without reacting.
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Tenure works quietly in the background, so when change happens,
            you’re already prepared.
          </p>

          <div className="mt-12">
            <a
              href="#waitlist"
              className="inline-block rounded-md bg-white px-8 py-4 text-sm font-medium text-black hover:bg-gray-200 transition"
            >
              Get Covered
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            No commitment. Cancel anytime.
          </p>

         </div>
      </section>

    </main>
  );
}