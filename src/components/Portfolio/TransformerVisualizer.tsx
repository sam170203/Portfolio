import { lazy, Suspense, useEffect, useRef, useState } from "react";

const TransformerScene = lazy(() => import("./TransformerScene"));

const stages = [
  { name: "Token stream", detail: "tokens → vectors", signal: "01" },
  { name: "Attention topology", detail: "queries ↔ keys ↔ values", signal: "08 heads" },
  { name: "Residual refinement", detail: "normalize → transform → add", signal: "12 blocks" },
  { name: "Probability field", detail: "logits → sampled token", signal: "softmax" },
];

const supportsWebGL = () => typeof WebGLRenderingContext !== "undefined";

const TransformerVisualizer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px 0px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const showScene = isNearViewport && !reducedMotion && supportsWebGL();

  return (
    <div ref={containerRef} className="transformer-visualizer">
      <div className="transformer-kicker"><span /> Reverse-engineering the model</div>
      <div className="transformer-stage" aria-hidden="true">
        {showScene && (
          <Suspense fallback={null}>
            <TransformerScene />
          </Suspense>
        )}
        <div className="transformer-stage-glow" />
        <div className="transformer-hud">
          <span>DECODER / TRACE 01</span>
          <span>CONTEXT WINDOW → ACTIVE</span>
        </div>
      </div>
      <div className="transformer-diagram" role="img" aria-label="Transformer reverse-engineering diagram">
        {stages.map((stage, index) => (
          <div className="transformer-node" key={stage.name}>
            <span className="transformer-node-index">{stage.signal}</span>
            <strong>{stage.name}</strong>
            <small>{stage.detail}</small>
          </div>
        ))}
      </div>
      <p className="transformer-caption">A decoder-only Transformer rebuilt layer by layer: token vectors enter, attention routes context, residual blocks refine the signal, and a probability field resolves the next token.</p>
    </div>
  );
};

export default TransformerVisualizer;
