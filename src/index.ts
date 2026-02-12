import chalk from "chalk";
import AstroClient from "./utils/AstroClient.ts";
import { showDashboard } from "./utils/showPanel.ts";
import { Command } from "commander";
import os from "node:os";

const CLI = new Command();
const user = os.userInfo().username || "Recruta";
const astro = new AstroClient(user);

const rocket = chalk.gray("🚀");

CLI.name("AstroHelper")
  .description("Uma CLI(Command-Line-Interface) criada por apenas Diversão :D")
  .version("1.0.0")
  .option("-s, --setup", "Inicia o painel de inicialização do AstroHelper");

CLI.parse(process.argv);

const options = CLI.opts();

async function main() {
  if (options.setup) {
    console.log(`\n${rocket} Iniciando configuração...`);
    await astro.setup();
    showDashboard({ userName: user, cliName: "AstroHelper" });
  } else {
    showDashboard({ userName: user, cliName: "AstroHelper" });
  }
}

main();
