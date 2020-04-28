import { Module } from '@nestjs/common'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'

@Module({
  controllers: [],
  providers: [PostResolver, PostService],
  exports: [],
})
export class DataModule {}
