const mix = require('laravel-mix');
require('dotenv').config();

// In an .env file, define the path to the addon folder you want to copy from.
// eg. ADDON_PATH=/users/bob/miracle-grow/addons/MiracleGrow
const addon = process.env.ADDON_PATH.replace(/\/$/, '');

// And define the path to the Statamic site you want to test your addon in.
// eg. STATAMIC_PATH=/users/bob/hairclub-for-men
const statamic = process.env.STATAMIC_PATH;

const addonName = addon.substr(addon.lastIndexOf('/') + 1);

mix.copyDirectory(`${addon}`, `${statamic}/site/addons/${addonName}`);
