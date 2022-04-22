import { ConnectWallet } from "@3rdweb/react";
import { useWeb3 } from "@3rdweb/hooks";
import './Home.scss';



export const Home = () => {
    const { address, chainId, provider, connectWallet, disconnectWallet} = useWeb3();

    return(
        <>
            <div className="container">
                    <h1 className="main-heading">
                        Connect your <span className="wallet-word">WALLET</span> 
                    </h1>
                    <h2>Start your journey with Web 3.0</h2>
                    {/* <ConnectWallet className="flat-btn" /> */}
                    {address && (
                        <button type="primary" onClick={disconnectWallet} className="primary">
                            Wallet Connected
                        </button>
                    )}
                    {!address && (
                        <button type="primary" onClick={() =>connectWallet('injected')}>
                            Connect Wallet
                        </button>
                    )}
                    <div className="wallet-info">
                        <h1>Connect to know your wallet info</h1>
                        <div className="address-id" >
                            <h3>Address: <b>{address}</b> </h3>
                            <h3>ChainId: <b>{chainId}</b>  </h3>
                        </div>
                    </div>
            </div>
        </>
    )
}