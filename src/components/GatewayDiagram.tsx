/**
 * Editorial visualisation of a self-hostable gateway: one endpoint in front of
 * model providers, with a fallback path. Built from the project's own content
 * (routing, single endpoint, provider fallback). It is a diagram, not a
 * screenshot and not a claim about a specific deployment.
 */

function Node({
  label,
  sub,
  accent = false,
}: {
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1.5 rounded-lg border px-3 py-5 text-center ${
        accent ? "border-accent bg-accent-wash" : "border-line bg-bg"
      }`}
    >
      <span
        className={`font-mono text-[13px] font-semibold tracking-[0.04em] uppercase ${
          accent ? "text-accent-ink" : "text-ink"
        }`}
      >
        {label}
      </span>
      <span className="font-mono text-[11px] tracking-[0.04em] text-muted uppercase">{sub}</span>
    </div>
  );
}

function ArrowHead() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 8 8"
      className="absolute -top-[3px] right-0 h-2 w-2 text-line"
      fill="currentColor"
    >
      <path d="M0 0 L8 4 L0 8 Z" />
    </svg>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <>
      <div className="flex items-center gap-2 sm:hidden">
        <span className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">{label}</span>
        <span className="relative h-px w-4 bg-line">
          <ArrowHead />
        </span>
      </div>
      <div className="hidden min-w-6 flex-1 items-center gap-2 sm:flex">
        <span className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">{label}</span>
        <span className="relative h-px flex-1 bg-line">
          <ArrowHead />
        </span>
      </div>
    </>
  );
}

export default function GatewayDiagram({ name }: { name: string }) {
  return (
    <div className="px-5 py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
        <Node label="AI tools" sub="coding clients" />
        <Connector label="route" />
        <Node label={name} sub="one endpoint" accent />
        <Connector label="complete" />
        <Node label="Providers" sub="models" />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-dashed border-line pt-4">
        <span className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
          Provider unavailable
        </span>
        <span aria-hidden className="hidden h-px flex-1 bg-line sm:block" />
        <span className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
          Backup model
        </span>
      </div>
    </div>
  );
}
