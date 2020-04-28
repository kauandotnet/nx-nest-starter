import { Resolver } from '@nestjs/graphql'
import { createBaseResolver } from './create-base-resolver'
import { CreatePostInput } from './create-post.input'
import { Post } from './post'
import { PostService } from './post.service'
import { UpdatePostInput } from './update-post-input'

// @ts-ignore
const PostBaseResolver = createBaseResolver<Post>('post', Post, CreatePostInput, UpdatePostInput)

@Resolver(() => Post)
export class PostResolver extends PostBaseResolver {
  constructor(private readonly service: PostService) {
    super()
  }
}
