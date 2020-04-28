import { Module } from '@nestjs/common'
import { CoreModule } from '@nx-nest-starter/core'
import { DataModule } from '@nx-nest-starter/data'

@Module({
  imports: [CoreModule, DataModule],
})
export class AppModule {}
