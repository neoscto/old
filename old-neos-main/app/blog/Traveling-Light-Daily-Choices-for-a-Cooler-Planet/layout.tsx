export const metadata = {
  title: "Neos | Traveling Light: Daily Choices for a Cooler Planet",
  description:
    "Travel is an integral part of our lives, whether it's the daily commute, business trips, or dream vacations. However, the way we travel has a profound impact on the environment and contributes significantly to global climate change. Fortunately, by making thoughtful choices and adopting sustainable practices, we can minimize our carbon footprint, even while on the go.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
