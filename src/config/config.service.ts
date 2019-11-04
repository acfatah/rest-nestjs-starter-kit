import { config, parse } from 'dotenv'
import { readFileSync } from 'fs'

export class ConfigService {
  private readonly envConfig: { [key: string]: string }

  constructor(filePath: string = '.env') {
    config({ path: filePath })
    this.envConfig = parse(readFileSync(filePath))
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}
