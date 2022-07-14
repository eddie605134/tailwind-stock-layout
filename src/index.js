import './index.css';

new TradingView.MediumWidget({
  symbols: [
    ['Apple', 'AAPL|1D'],
    ['Google', 'GOOGL|1D'],
    ['Microsoft', 'MSFT|1D'],
  ],
  chartOnly: false,
  width: '100%',
  height: '100%',
  locale: 'en',
  colorTheme: 'dark',
  isTransparent: true,
  autosize: true,
  showVolume: false,
  hideDateRanges: false,
  scalePosition: 'right',
  scaleMode: 'Normal',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
  noTimeScale: false,
  valuesTracking: '1',
  chartType: 'line',
  fontColor: '#787b86',
  gridLineColor: 'rgba(240, 243, 250, 0.06)',
  container_id: 'tradingview_09f0d',
});
