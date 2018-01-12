#!/usr/bin/env node

import { ALPHA_ADVANTAGE_API_KEY } from '../config';
import inquirer from 'inquirer';
import request from 'request';
import chalk from 'chalk';
import figlet from 'figlet';
import { getInfo } from './format';

const stockURL = 'https://www.alphavantage.co/query?function=';

// print out title & intro when you run command
console.log(
  chalk.green(
    figlet.textSync('stoCLI', {
      horizontalLayout: 'full'
    })
  )
);

console.log(
  chalk.gray('Welcome to stoCLI, a command line tool for all your stock needs!')
);

inquirer.prompt([{
    message: 'Enter stock index',
    name: 'index'
  }, {
    message: 'Enter intra, daily, weekly, or monthly',
    name: 'type'
  }, {
    message: 'Enter 1, 5, or 15 for interval length',
    name: 'interval'
  }])
  .then(response => {
    const {
      index,
      type,
      interval
    } = response;
    if (type === 'intra') {
      request(`${stockURL}TIME_SERIES_INTRADAY&symbol=${index}&interval=${interval}min&apikey=${ALPHA_ADVANTAGE_API_KEY}`, (error, res, body) => getInfo(error, res, body, type, interval));
    } else if (type === 'daily') {
      request(`${stockURL}TIME_SERIES_DAILY&symbol=${index}&apikey=${ALPHA_ADVANTAGE_API_KEY}`, (error, res, body) => getInfo(error, res, body, type));
    } else if (type === 'weekly') {
      request(`${stockURL}TIME_SERIES_WEEKLY&symbol=${index}&apikey=${ALPHA_ADVANTAGE_API_KEY}`, (error, res, body) => getInfo(error, res, body, type));
    } else if (type === 'monthly') {
      request(`${stockURL}TIME_SERIES_MONTHLY&symbol=${index}&apikey=${ALPHA_ADVANTAGE_API_KEY}`, (error, res, body) => getInfo(error, res, body, type));
    } else {
      console.log('Enter a valid input');
    }
  });
