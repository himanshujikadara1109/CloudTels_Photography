import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif mb-6">Page Not Found</h2>
        <p className="text-foreground/70 mb-10">
          We couldn't find the page you were looking for. This is either because:
        </p>
        <ul className="text-left list-disc pl-5 mb-10 text-foreground/70">
          <li className="mb-2">There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
          <li>The page you are looking for has been moved or deleted.</li>
        </ul>
        <div>
          <Link
            to="/"
            className="bg-accent text-white px-8 py-3 inline-block rounded-sm hover:bg-gold-500 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
