function NotConnected({ isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-50">
            <div className="bg-zinc-950 p-6 rounded-lg shadow-lg text-center text-zinc-50">
                <h2 className="text-xl font-semibold mb-4">
                    Please Connect Your Wallet
                </h2>
                <p className="mb-4">
                    To access all features, please connect your wallet.
                </p>
                <button
                    onClick={onClose}
                    className="bg-red-500 text-zinc-50 px-4 py-2 rounded hover:bg-opacity-90 hover:bg-red-600 transition"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default NotConnected
