import { Fragment } from "react";

/** Splits text into masked words that rise in, staggered, when a [data-reveal] parent becomes visible. */
export function Words({ text, start = 0 }: { text: string; start?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="w"><span style={{ "--w": start + i } as React.CSSProperties}>{w}</span></span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}
