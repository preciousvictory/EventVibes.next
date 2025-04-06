import "./App.css";
import { ConnectButton, useWallet, addressEllipsis } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css"; // don't forget to import default stylesheet

export default function App() {
  const wallet = useWallet();
  return (
    <div className="App">
      <h1 className="title gradient">Hello, Suiet Wallet Kit</h1>
      <ConnectButton />

      <section>
        <p>
          <span className="gradient">Wallet status:</span> {wallet.status}
        </p>
        {wallet.status === "connected" && (
          <>
            {wallet?.account && (
              <>
                <p>
                  <span className="gradient">Connected Account: </span>
                  {wallet.account.address}
                </p>
                <p>
                  <span className="gradient">
                    Connected Account (with ellipsis):{" "}
                  </span>
                  {addressEllipsis(wallet.account.address)}
                </p>
              </>
            )}
            <p>
              <span className="gradient">Current chain of wallet: </span>
              {wallet.chain?.name}
            </p>
          </>
        )}
      </section>
    </div>
  );
}
