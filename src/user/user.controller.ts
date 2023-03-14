import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Inject,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(
    @Inject("play") private readonly play: UserService,
    @Inject("factory") private readonly factory: string
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.play.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.factory;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.play.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.play.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.play.remove(+id);
  }
}
