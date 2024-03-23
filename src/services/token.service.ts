export class TokenService {
	constructor(
		private readonly _accessTokenName = "app:token:access",
		private _accessToken: string = "",
	) {
		if (typeof window !== "undefined") this._accessToken = localStorage.getItem(this._accessTokenName) || "";
	}

	get accessToken() {
		return this._accessToken;
	}

	set accessToken(token: string) {
		this._accessToken = token;
		if (typeof window !== "undefined") localStorage.setItem(this._accessTokenName, token);
	}
}

export default new TokenService() as TokenService;
