export default function AirdropPage() {
  return (
    <div
      className="min-h-screen text-white pt-20"
      style={{
        background:
          "radial-gradient(circle at center, rgba(20, 84, 84, 0.8) -20%, rgba(13, 52, 52, 0.9) 5%, rgba(3, 11, 11, 1) 80%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 p-6">
            <h1 className="text-5xl font-bold mb-4">Airdrop</h1>
            <h2 className="text-3xl font-bold text-yellow-400">
              Your $100 Kickstart to Crypto Farming
            </h2>
            <p className="text-lg">
              We believe in empowering early adopters. That's why every new user
              who registers with Harvest BTC is eligible for a $100 Airdrop,
              absolutely free. It's our way of welcoming you to the HBTC
              ecosystem and helping you kickstart your crypto journey with real
              value.
            </p>
            <p className="text-lg">
              This unique airdrop feature sets HBTC apart, giving you continuous
              earnings while you stake, farm, and grow your assets.
            </p>
          </div>
          <div className="space-y-6 p-4">
            <div className="bg-gray-900 border border-gray-900 rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  Instant Airdrop
                </h3>
                <p className="text-lg">
                  Upon registering and farming just $50, you'll receive $100
                  worth of HBTC as an airdrop-right in your wallet.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-900 rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  Monthly Airdrop Claims
                </h3>
                <p className="text-lg">
                  You don't just get a one-time bonus. The airdrop can be
                  claimed monthly, with 5% of the remaining balance available to
                  withdraw, keeping the rewards flowing month after month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
