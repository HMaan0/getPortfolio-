"use client";

import { cn } from "../../../lib/utils";
import { GridPattern } from "./GridBackgorund";

export function GridPatternLinearGradient() {
  return (
    <div className="absolute h-96 flex -z-50 size-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl">
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
