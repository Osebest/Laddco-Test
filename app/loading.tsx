export default function Loading() {
  return (
    <div className="flex-1 min-h-100 flex items-center justify-center py-24">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent-red" />
        <p className="text-sm font-mono uppercase tracking-widest text-text-secondary">
          Loading
        </p>
      </div>
    </div>
  );
}
