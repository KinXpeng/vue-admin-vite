interface IAccount {
	username: string
	password: string
}

interface IUserInfo {
	avatar: string
}

type IState = IAccount & { userInfo: IUserInfo }

export const useTabsStore = defineStore('North-user', {
	state: (): IState => {
		return {
			username: '',
			password: '',
			userInfo: {
				avatar: ''
			}
		}
	}
})
