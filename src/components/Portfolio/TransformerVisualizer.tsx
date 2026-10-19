import { lazy, Suspense, useEffect, useRef, useState } from "react";

const TransformerScene = lazy(() => import("./TransformerScene"));

const stages = [
  { name: "Input tokens", detail: "tokens → embeddings" },
  { name: "Multi-head attention", detail: "context → relationships" },
  { name: "Feed-forward network", detail: "features → refinement" },
  { name: "Next-token output", detail: "logits → probability" },
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
      </div>
      <div className="transformer-diagram" role="img" aria-label="Transformer reverse-engineering diagram">
        {stages.map((stage, index) => (
          <div className="transformer-node" key={stage.name}>
            <span className="transformer-node-index">0{index + 1}</span>
            <strong>{stage.name}</strong>
            <small>{stage.detail}</small>
          </div>
        ))}
      </div>
      <p className="transformer-caption">A decoder-only Transformer rebuilt layer by layer: from tokenization and masked attention to training, checkpoints, and controlled sampling.</p>
    </div>
  );
};

export default TransformerVisualizer;
