import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { CourseService } from "../course/course.service";
@Module({
  controllers: [UserController],
  providers: [
    CourseService,
    {
      provide: "play",
      useClass: UserService,
    },
    {
      provide: "factory",
      inject: [CourseService],
      useFactory(courseService: CourseService) {
        console.log(courseService.findAll());
        return "factory provider";
      },
    },
  ],
})
export class UserModule {}
