// GithubComments.tsx (versión final robusta y lista para producción)

import { useEffect, useState } from "react";

export type GithubCommentsProps = {
  repo: string;
  issueTerm: "pathname" | "url" | "title" | "og:title" | string;
  theme?: string;
  label?: string;
  titleText?: string;
  loadingText?: string;
  className?: string;
};

const GithubComments = ({
  repo,
  issueTerm,
  theme = "github-light",
  label,
  titleText = "Comentarios",
  loadingText = "Cargando comentarios...",
  className = "",
}: GithubCommentsProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timeout = setTimeout(() => {
      const scriptParent = document.getElementById("utterances-thread");
      if (!scriptParent) return;

      scriptParent.innerHTML = "";

      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", repo);
      script.setAttribute("issue-term", issueTerm);
      script.setAttribute("theme", theme);
      script.setAttribute("crossorigin", "anonymous");
      script.async = true;
      if (label) script.setAttribute("label", label);

      script.onload = () => setLoading(false);
      script.onerror = () => {
        setLoading(false);
        console.error("Error loading Utterances script");
      };

      scriptParent.appendChild(script);
    }, 0);

    return () => clearTimeout(timeout);
  }, [repo, issueTerm, theme, label]);

  return (
    <section className={className}>
      <h3 style={{ textAlign: "center" }}>{titleText}</h3>
      {loading && <p style={{ textAlign: "center" }}>{loadingText}</p>}
      <div id="utterances-thread" />
    </section>
  );
};

export default GithubComments;
