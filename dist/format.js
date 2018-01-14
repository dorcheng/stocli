import Table from 'cli-table2';
import chalk from 'chalk';

export const getInfo = (error, res, body, type, interval) => {
  if (error) console.log('error:', error);
  console.log('statusCode:', res && res.statusCode);
  const intra = `Time Series (${interval}min)`;
  const daily = 'Time Series (Daily)';
  const weekly = 'Weekly Time Series';
  const monthly = 'Monthly Time Series';
  const stockObject = JSON.parse(body);
  const description = stockObject['Meta Data'];
  const infoKey = type === 'intra' ? intra : type === 'daily' ? daily : type === 'weekly' ? weekly : monthly;
  const info = stockObject[infoKey];

  console.log(chalk.cyan(`NASDAQ: ${description['2. Symbol']} - ${description['3. Last Refreshed']}`));

  const cells = [];
  const keys = Object.keys(info).slice(0, 7);
  for (let i = 0; i < 7; i++) {
    cells.push(info[keys[i]]);
  }
  const table = new Table({
    head: [''].concat(keys),
  });

  table.push({
    open: [cells[0]['1. open'], cells[1]['1. open'], cells[2]['1. open'], cells[3]['1. open'], cells[4]['1. open'], cells[5]['1. open'], cells[6]['1. open']]
  }, {
    high: [cells[0]['2. high'], cells[1]['2. high'], cells[2]['2. high'], cells[3]['2. high'], cells[4]['2. high'], cells[5]['2. high'], cells[6]['2. high']]
  }, {
    low: [cells[0]['3. low'], cells[1]['3. low'], cells[2]['3. low'], cells[3]['3. low'], cells[4]['3. low'], cells[5]['3. low'], cells[6]['3. low']]
  }, {
    close: [cells[0]['4. close'], cells[1]['4. close'], cells[2]['4. close'], cells[3]['4. close'], cells[4]['4. close'], cells[5]['4. close'], cells[6]['4. close']]
  }, {
    volume: [cells[0]['5. volume'], cells[1]['5. volume'], cells[2]['5. volume'], cells[3]['5. volume'], cells[4]['5. volume'], cells[5]['5. volume'], cells[6]['5. volume']]
  });

  console.log(table.toString());
};
