import { create } from 'zustand'
import { useAuth0 } from 'react-native-auth0'

interface Credentials {
    accessToken: string
    idToken: string
    refreshToken?: string
    expiresIn?: number
}

interface AuthState {
    user: any
    error: Error | null
    isLoading: boolean
    loggedIn: boolean
    credentials: Credentials | null
    login: () => Promise<void>
    logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => {
    const { authorize, clearSession, user, error, isLoading, getCredentials } = useAuth0()

    return {
        user: user,
        error: error,
        isLoading: isLoading,
        loggedIn: user !== undefined && user !== null,
        credentials: null,

        login: async () => {
            try {
                await authorize()
                const credentials = await getCredentials()
                set((state) => ({
                    ...state,
                    user: useAuth0().user,
                    loggedIn: true,
                    credentials: credentials as Credentials,
                }))
            } catch (e) {
                console.log(e)
                set((state) => ({ ...state, error: e as Error }))
            }
        },

        logout: async () => {
            try {
                await clearSession()
                set({ user: null, loggedIn: false, credentials: null })
            } catch (e) {
                console.log('Log out cancelled')
            }
        },

    }
})

