import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		console.log(process.env.SECRET_KEY);
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.SECRET_KEY
		});
	}

	async validate(payload: any) {
		return { userId: payload.userId, userName: payload.userName };
	}
}
