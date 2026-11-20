"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="error-state"><p className="eyebrow">A wave knocked us off course</p><h1>Something went wrong.</h1><p>Our crew has been notified. Try loading this page again.</p><button type="button" onClick={() => reset()}>Try again</button></main>;
}
