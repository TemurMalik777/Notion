import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class JwtSelfGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const currentUserId = req.user?.id;
    const targetUserId = +req.params.id; // Number ga o'tkazish

    if (currentUserId !== targetUserId) {
      throw new ForbiddenException({
        message: "Siz faqat o'z ma'lumotlaringizga kira olasiz",
      });
    }

    return true;
  }
}
