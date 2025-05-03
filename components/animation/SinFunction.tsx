'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

export default function DualSineWaves() {
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);

  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);
  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);

  const width = 600;
  const height = 200;
  const amplitude = 40;
  const frequency = 2;
  const points = 100;
  const phaseShift = Math.PI / 2; // φ = π/2 = 90 degrees phase shift

  // Generate sine wave path
  const generatePath = (phase = 0) => {
    const step = width / points;
    let d = '';
    for (let i = 0; i <= points; i++) {
      const x = i * step;
      const y = height / 2 + amplitude * Math.sin((frequency * x * 2 * Math.PI) / width + phase);
      d += `${i === 0 ? 'M' : 'L'}${x},${y} `;
    }
    return d.trim();
  };

  const pathD1 = generatePath(0); // sin(x)
  const pathD2 = generatePath(phaseShift); // sin(x + φ)

  useAnimationFrame((t) => {
    const pct = ((t % 3000) / 3000) % 1; // loop over 3 seconds

    if (pathRef1.current && pathRef2.current) {
      const len1 = pathRef1.current.getTotalLength();
      const point1 = pathRef1.current.getPointAtLength(pct * len1);
      x1.set(point1.x);
      y1.set(point1.y);

      const len2 = pathRef2.current.getTotalLength();
      const point2 = pathRef2.current.getPointAtLength(pct * len2);
      x2.set(point2.x);
      y2.set(point2.y);
    }
  });

  return (
    <div style={{ padding: '2rem' }}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="200">
        {/* First wave */}
        <path
          ref={pathRef1}
          d={pathD1}
          fill="none"
          stroke="teal"
          strokeWidth={2}
          strokeDasharray="4 4"
        />

        {/* Second wave (phase shifted) */}
        <path
          ref={pathRef2}
          d={pathD2}
          fill="none"
          stroke="purple"
          strokeWidth={2}
          strokeDasharray="4 4"
        />

        {/* Moving dot 1 */}
        <motion.circle
          r={8}
          fill="teal"
          style={{
            translateX: x1,
            translateY: y1,
          }}
        />

        {/* Moving dot 2 (φ shifted) */}
        <motion.circle
          r={8}
          fill="purple"
          style={{
            translateX: x2,
            translateY: y2,
          }}
        />
      </svg>
    </div>
  );
}
