"use client";;
import * as React from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform, } from "motion/react";
import { cn } from "@/lib/utils";
const DEFAULT_GRADIENT = ["#22d3ee", "#818cf8", "#f472b6"];
function clampPercent(value) {
    if (Number.isNaN(value))
        return 0;
    return Math.min(100, Math.max(0, value));
}
export function CircularProgress({
    value,
    size = 160,
    strokeWidth = 12,
    color = DEFAULT_GRADIENT,
    trackColor,
    arc = 360,
    startAngle = -90,
    duration = 1.2,
    delay = 0,
    rounded = true,
    showValue = true,
    decimals = 0,
    suffix = "%",
    glow = false,
    children,
    className
}) {
    const reducedMotion = useReducedMotion();
    const gradientId = React.useId();
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const arcFraction = clampPercent((arc / 360) * 100) / 100;
    const target = clampPercent(value);
    const gradient = Array.isArray(color) ? color : null;
    const solidColor = Array.isArray(color) ? color[0] : color;
    const strokeColor = gradient ? `url(#${gradientId})` : solidColor;
    const progress = useMotionValue(0);
    const dashArray = useTransform(progress, (v) => `${arcFraction * (clampPercent(v) / 100)} 1`);
    const display = useTransform(progress, (v) => clampPercent(v).toFixed(decimals));
    React.useEffect(() => {
        if (reducedMotion) {
            progress.set(target);
            return;
        }
        const controls = animate(progress, target, {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
        });
        return () => controls.stop();
    }, [target, reducedMotion, duration, delay, progress]);
    return (<div className={cn("relative inline-flex items-center justify-center text-neutral-900 dark:text-neutral-100", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${target.toFixed(decimals)}${suffix}`}>
        {gradient && (<defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              {gradient.map((c, i) => (<stop key={i} offset={`${(i / Math.max(1, gradient.length - 1)) * 100}%`} stopColor={c}/>))}
            </linearGradient>
          </defs>)}

        <g transform={`rotate(${startAngle} ${center} ${center})`}>
          
          <circle cx={center} cy={center} r={radius} fill="none" stroke={trackColor ?? "currentColor"} strokeOpacity={trackColor ? 1 : 0.12} strokeWidth={strokeWidth} strokeLinecap={rounded ? "round" : "butt"} pathLength={1} strokeDasharray={`${arcFraction} 1`}/>
          
          <motion.circle cx={center} cy={center} r={radius} fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap={rounded ? "round" : "butt"} pathLength={1} style={{
            strokeDasharray: dashArray,
            filter: glow
                ? `drop-shadow(0 0 ${strokeWidth * 0.5}px ${solidColor})`
                : undefined,
        }}/>
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        {children ??
            (showValue && (<div className="flex items-baseline font-semibold tabular-nums">
              <motion.span style={{ fontSize: size * 0.2 }}>
                {display}
              </motion.span>
              {suffix && (<span className="ml-0.5 text-neutral-500 dark:text-neutral-400" style={{ fontSize: size * 0.11 }}>
                  {suffix}
                </span>)}
            </div>))}
      </div>
    </div>);
}
