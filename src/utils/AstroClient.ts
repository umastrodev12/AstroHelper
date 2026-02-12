// utils/AstroClient.ts
// @ts-ignore
import chalk from "chalk";

export default class AstroClient {
  readonly name: string = "AstroHelper";
  private version: string = "1.0.0";

  constructor(public astro: string) {}

  boot() {
    console.log(`🚀 ${chalk.gray("Iniciando")} ${chalk.bold(this.name)}...`);
    console.log(`💻 ${chalk.blue("Versão:")} ${this.version}`);
  }

  status() {
    console.log(`${chalk.green("✅")} ${this.name} ${chalk.green("online!")}`);
  }

  async setup() {
    console.log(chalk.cyan("🛠️  Iniciando configuração de sistemas..."));

    
    const key = prompt("🔑 Digite sua Gemini API Key:");

    if (key) {
      await Bun.write(".env", `GEMINI_API_KEY=${key}\n`);
      console.log(chalk.green("✅ Configuração salva com sucesso!\n"));
    } else {
      console.log(chalk.red("❌ Setup cancelado.\n"));
    }
  }
}
