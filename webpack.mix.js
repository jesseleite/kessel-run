const mix = require('laravel-mix');
require('dotenv').config();

// In an .env file, define the path to the addon folder you want to copy from.
// eg. ADDON_FOLDER_PATH=/users/bob/miracle-grow/addons/MiracleGrow
const addonFolder = process.env.ADDON_FOLDER_PATH;

// And define the path to the Statamic site you want to test your addon in.
// eg. STATAMIC_PATH=/users/bob/hairclub-for-men
const statamic = process.env.STATAMIC_PATH;

const addonFolderName = addonFolder.substr(addonFolder.lastIndexOf('/') + 1);

mix.copyDirectory(`${addonFolder}`, `${statamic}/site/addons/${addonFolderName}`);
