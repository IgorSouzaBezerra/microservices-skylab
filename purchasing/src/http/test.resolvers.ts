import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizarionGuard } from './auth/authorizarion.guard';

@Resolver('test')
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizarionGuard)
  async hello() {
    return 'Hello World';
  }
}
