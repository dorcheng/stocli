#!/usr/bin/env node

import { ALPHA_ADVANTAGE_API_KEY } from '../config';
import inquirer from 'inquirer';
import request from 'request';
import chalk from 'chalk';
import figlet from 'figlet';

// print out title & intro when you run command
console.log(
  chalk.green(
    figlet.textSync('stoCLI', { horizontalLayout: 'full' })
  )
);

console.log(
  chalk.gray('Welcome to stoCLI, a command line tool for all your stock needs!')
);

inquirer.prompt([{message: 'Enter stock index', name: 'index'}]).then(index => {
  request(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${index.index}&interval=1min&apikey=${ALPHA_ADVANTAGE_API_KEY}`, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
});
