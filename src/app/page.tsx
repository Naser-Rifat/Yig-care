import Image from "next/image";

/**
 * YIG.CARE landing — aligned with Figma node 2812:13171.
 * Tokens: spacing-5=12px, spacing-9=24px, spacing-10=32px, spacing-11=40px;
 * type 7xl=44px, 5xl=32px, 2xl=20px, xl=18px, lg=16px; radius-3xl=24px.
 * Fluid clamp() used so all content fits in glass card with no scroll.
 */
export default function Home() {
  return (
    <div className="relative min-h-svh w-full min-w-0 overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 -z-10">
        <video
          className="h-full w-full object-cover blur-[2px]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/yig-care.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 hidden motion-reduce:block">
          <div className="h-full w-full bg-black/30" />
        </div>
      </div>
      <div className="fixed inset-0 -z-10 bg-black/20" />

      <main className="safe-area-pad flex min-h-svh flex-col items-center justify-center px-3 py-6 sm:px-5 sm:py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
        {/* Glass card: content-driven height, max-w 1128px — Figma 2812:13172 */}
        <div className="w-full max-w-[1128px] min-w-0 rounded-2xl bg-[rgba(0,0,0,0.12)] shadow-2xl backdrop-blur-[5px] sm:rounded-3xl">
          <div className="flex flex-col items-center gap-[clamp(0.5rem,2svh,var(--spacing-9))] px-[clamp(0.75rem,2.5vw,var(--spacing-11))] py-[clamp(0.75rem,3svh,var(--spacing-11))]">
            {/* Logo — Figma 2812:13173–13175: 110px, then 175×50 */}
            <div className="flex shrink-0 flex-col items-center gap-0">
              <div className="relative h-[clamp(48px,10svh,110px)] w-[clamp(48px,10svh,110px)]">
                <Image src="/images/yig-face-logo-white.png" alt="YIG Face logo" width={110} height={110} className="h-full w-full object-cover" priority />
              </div>
              <div className="relative h-[clamp(28px,4.5svh,50px)] w-[clamp(100px,16vw,175px)]">
                <Image src="/images/yig-care-logo-white.png" alt="YIG.CARE" width={175} height={50} className="h-full w-full object-cover object-left" priority />
              </div>
            </div>

            {/* Gap spacing-9 = 24px Figma */}
            <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-[clamp(0.25rem,1.2svh,var(--spacing-5))]" style={{ marginTop: "clamp(0.375rem, 1.5svh, var(--spacing-9))" }}>
              {/* RESET — BALANCE — RADIATE: 44px Light, lh 1.2, uppercase — Figma 2812:13179 */}
              <p className="w-full max-w-full text-center font-light uppercase leading-[1.2] text-(--color-white-500)" style={{ fontSize: "clamp(1.15rem, 3.4svh, 52.8px)" }}>
                RESET — BALANCE — RADIATE
              </p>
              {/* A NEW ARA... 32px Thin; body 18px Light lh 1.6; pb 32px — Figma 2812:13180–13182 */}
              <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-[clamp(0.125rem,0.8svh,var(--spacing-5))] text-center" style={{ paddingBottom: "clamp(0.5rem, 1.5svh, var(--spacing-10))" }}>
                <p className="w-full max-w-full font-extralight capitalize leading-[1.2] text-white" style={{ fontSize: "clamp(0.95rem, 2.6svh, 38.4px)" }}>
                  A NEW ARA OF FREQUENCY-WELLNESS IS ALMOST HERE
                </p>
                <div className="w-full max-w-full whitespace-pre-wrap text-center font-light leading-[1.6] text-(--color-white-600)" style={{ fontSize: "clamp(0.775rem, 1.6svh, 21.6px)" }}>
                  <p className="mb-0">Discover serene frequency healing sessions and daily remote energy recharging — powered by YIG.CARE technology. </p>
                  <p>Your journey to inner peace begins very soon.</p>
                </div>
              </div>
            </div>

            {/* More Info: divider 0.5px, gap 12px, 20px Medium Italic, tracking 1.6px — Figma 2812:13183–13186 */}
            <div className="flex w-full min-w-0 items-center justify-center gap-3" style={{ marginTop: "clamp(0.25rem, 1.2svh, var(--spacing-5))" }}>
              <div className="h-[0.5px] min-h-px min-w-px flex-1 bg-(--color-border-strong)" />
              <p className="shrink-0 whitespace-nowrap text-center font-medium italic leading-[1.6] text-(--color-brand)" style={{ fontSize: "clamp(0.8rem, 1.8svh, 24px)", letterSpacing: "1.6px" }}>
                More Info
              </p>
              <div className="h-[0.5px] min-h-px min-w-px flex-1 bg-(--color-border-strong)" />
            </div>

            {/* Want more information... 20px / 18px Light, gap 12px — Figma 2812:13187–13189 */}
            <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-1 text-center font-light leading-[1.6]" style={{ marginTop: "clamp(0.25rem, 1.2svh, var(--spacing-5))" }}>
              <p className="w-full max-w-full whitespace-pre-wrap text-(--color-white-500)" style={{ fontSize: "clamp(0.8rem, 1.8svh, 24px)" }}>
                Want more information  before you decide?
              </p>
              <p className="w-full max-w-full text-(--color-white-600)" style={{ fontSize: "clamp(0.75rem, 1.6svh, 21.6px)" }}>
                Send us a short email — and you&apos;ll automatically receive a concise letter on YIG.CARE and what&apos;s coming next.
              </p>
            </div>

            {/* Get the YIG.CARE Brief + arrow (gap 2px) + button px32 py12 gap8 — Figma 2812:13190–13196 */}
            <div className="flex flex-col items-center gap-[clamp(0.125rem,0.8svh,var(--spacing-5))]" style={{ marginTop: "clamp(0.25rem, 1.2svh, var(--spacing-5))" }}>
              <div className="flex flex-col items-center justify-center gap-0.5">
                <p className="text-center font-medium leading-[1.6] text-(--color-brand)" style={{ fontSize: "clamp(0.8rem, 1.8svh, 24px)" }}>
                  Get the YIG.CARE Brief
                </p>
                <div className="flex size-4 shrink-0 items-center justify-center animate-[arrow-bounce_1.2s_ease-in-out_infinite]" aria-hidden>
                  <Image
                    src="/images/arrow-right.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-4 rotate-90 object-contain"
                  />
                </div>
              </div>
              <a
                href="mailto:earlybird@yig.care"
                className="flex min-h-[44px] min-w-0 items-center justify-center gap-(--spacing-4) rounded-full bg-(--color-brand) px-[clamp(1rem,3vw,var(--spacing-10))] py-[clamp(0.5rem,1.2svh,var(--spacing-5))] font-medium leading-[1.6] text-(--color-brand-dark) transition-opacity hover:opacity-95 active:opacity-90"
                style={{ fontSize: "clamp(0.8rem, 1.8svh, 24px)" }}
              >
                <Image src="/images/icon-email.svg" alt="" width={24} height={24} className="size-4 shrink-0 object-contain" />
                <span className="break-all">earlybird@yig.care</span>
              </a>
            </div>

            {/* Footer: 20px white, 16px white-700, gap 12px — Figma 2812:13197–13199 */}
            <div className="flex w-full min-w-0 max-w-full shrink-0 flex-col items-center gap-0 text-center font-light leading-[1.6]" style={{ marginTop: "clamp(0.375rem, 1.5svh, var(--spacing-9))" }}>
              <p className="w-full max-w-full text-(--color-white-500)" style={{ fontSize: "clamp(0.7rem, 1.7svh, 24px)" }}>
                YIG.CARE is a product of GOTT WALD Holding LLC.
              </p>
              <p className="w-full max-w-full text-(--color-white-600)" style={{ fontSize: "clamp(0.625rem, 1.3svh, 19.2px)" }}>
                GOTT WALD Holding LLC owns and controls all rights related to YIG.CARE, including brand, content, and IP.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
