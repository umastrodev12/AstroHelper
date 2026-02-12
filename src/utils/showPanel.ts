// utils/showPanel.ts
import chalk from "chalk";
import os from "node:os";

interface DashboardData {
  userName: string;
  cliName: string;
}

export function showDashboard({ userName, cliName }: DashboardData) {
  const memoriaLivre = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
  const totalMemoria = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const plataforma = os.platform(); // 'darwin', 'win32', etc.
  const uptimeHoras = (os.uptime() / 3600).toFixed(1); // tempo que o pc está ligado

  console.log(
    chalk.cyan(`
     _______  _______  _______  ______    _______ 
    |   _   ||       ||       ||    _ |  |       |
    |  |_|  ||  _____||_     _||   | ||  |   _   |
    |       || |_____   |   |  |   |_||_ |  | |  |
    |       ||_____  |  |   |  |    __  ||  |_|  |
    |   _   | _____| |  |   |  |   |  | ||       |
    |__| |__||_______|  |___|  |___|  |_||_______|
    `),
  );

  console.log(chalk.bold.magenta(`--- ${cliName} DASHBOARD ---`));
  console.log(chalk.gray(`💻 Plataforma: ${plataforma}`));
  console.log(chalk.gray(`🧠 Memória: ${memoriaLivre}GB / ${totalMemoria}GB`));
  console.log(chalk.gray(`⏱️  PC ligado há: ${uptimeHoras} horas`));
  console.log(chalk.gray(`👤 Operador: ${userName}`));
  console.log(chalk.gray("----------------------------\n"));
}
