# stoCLI

I check stock prices every morning and thought it would be fun to build a simple command line tool that displays stock information. StoCLI uses the [Alpha Vantage API](https://www.alphavantage.co/documentation/) which provides realtime and historical equity data in 4 different categories: intraday, daily, weekly, and monthly.

When you first run stoCLI, it will prompt you to type in a specific stock symbol. Depending on the information you are looking for, type either intra, daily, weekly, or monthly. These options will all show the last seven data points (including today's information). For the intraday option, you must enter the interval length. Type 1 if you want to see stock information 1 minute apart, type 5 if you want to see stock information 5 minutes apart, and type 15 if you want to see stock information 15 minutes apart.

<br />
<p align="center">
  <img src="https://github.com/dorcheng/stocli/blob/master/stocli-img.png?raw=true">
</p>
<p align="center">MSFT's stock information</p>
<br />
