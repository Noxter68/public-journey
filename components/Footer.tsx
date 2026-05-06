export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-gray-950 flex items-center justify-center">
            <span className="text-white text-xs font-bold">J</span>
          </div>
          <span className="text-sm font-semibold text-gray-500">Public Journey</span>
        </div>
        <p className="text-xs text-gray-400">
          Built for indie makers, SaaS founders and builders sharing their journey online.
        </p>
      </div>
    </footer>
  );
}
