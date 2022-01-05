import React, { useEffect, useRef } from "react";

const TradeView = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `new window.TradingView.widget({
      autosize: true,
      width: 980,
      height: 610,
      "symbol": "BINANCE:ALGOUSDT",
      interval: "1",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_ea2f6"
    })`;

    chartRef.current.appendChild(script);
  }, []);

  return (
    <div>
      <div className="tradingview-widget-container">
        <div id="tradingview_ea2f6" style={{ height: "500px" }}></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/symbols/ALGOUSDT/?exchange=EXMO"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="blue-text">ALGOUSDT Chart</span>
          </a>
        </div>
        <div ref={chartRef}></div>
      </div>
    </div>
  );
};

export { TradeView };
