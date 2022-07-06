import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePartyInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  details?: string;
}
