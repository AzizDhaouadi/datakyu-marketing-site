import FuzzyText from "@/components/Bits/FuzzyText";
export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <FuzzyText
        fontSize={"8rem"}
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        404 - Not Found
      </FuzzyText>
    </main>
  );
}
