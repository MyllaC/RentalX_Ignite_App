/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { parse as csvParse } from "csv-parse";
import fs from "fs"; // modo nativo do node = file system

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path); // essa função que permite a leitura do arquivo em parter

    const parseFile = csvParse();

    stream.pipe(parseFile); // o pipe pega oq esta sendo lido do stream e joga para o lugar q a gente determinar

    parseFile.on("data", async line => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
