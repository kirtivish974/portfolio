const words = ["Retrieval-Augmented Generation", "LLMs", "Embeddings", "Vector Databases", "Machine Learning", "XGBoost", "LangChain", "Python", "Model Deployment"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden py-6" aria-hidden="true">
      <div className="theme-flare -mx-4 -rotate-1 border-y-2 border-foreground py-4">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {row.map((w, i) => (
            <span key={i} className="font-display flex items-center gap-8 text-2xl font-extrabold uppercase sm:text-4xl">
              {w}
              <span className="text-highlight">✺</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
