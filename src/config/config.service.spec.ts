import { Test, TestingModule } from '@nestjs/testing'
import { ConfigService } from './config.service'
import { existsSync } from 'fs'
describe('ConfigService', () => {
  let provider: ConfigService

  beforeEach(async () => {
    if (!(await existsSync('.env'))) {
      // stop the test if '.env file is not defined'
      process.exit(1)
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile()

    provider = module.get<ConfigService>(ConfigService)
  })

  it('should be defined', () => {
    expect(provider).toBeDefined()
  })
})
