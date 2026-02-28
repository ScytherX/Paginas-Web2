export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-muted-foreground">
          {"Hecho con dedicacion por "}
          <span className="text-foreground">Cesar Orozco</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {"2026"}
        </p>
      </div>
    </footer>
  );
}
