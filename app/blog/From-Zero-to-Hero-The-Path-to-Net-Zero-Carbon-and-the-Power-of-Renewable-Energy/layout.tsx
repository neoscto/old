export const metadata = {
  title:
    "Neos | From Zero to Hero: The Path to Net-Zero Carbon and the Power of Renewable Energy",
  description:
    "Climate change, without a shadow of doubt, remains one of the most pressing challenges of our time. Its impact permeates every facet of our society, from the environment we inhabit to the economy we're part of. The idea of transitioning to a net-zero carbon future is not only an environmental imperative but a societal one. The cornerstone of this transition? Renewable energy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
