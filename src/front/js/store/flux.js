const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: null,
			user: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			handleLogin: async (email, password) => {
				let response = await fetch(process.env.BACKEND_URL + "/login", {
					headers: { "Content-Type": "application/json" }, body: JSON.stringify({email: email, password: password}), method: "POST"
				}) 
				let data = await response.json()
				if (response.ok){
				setStore({token: data, user: email})
				}
			},

			getUser: async () => {
				let store = getStore()
				let response = await fetch(process.env.BACKEND_URL + "/private", {
					headers: { "Content-Type": "application/json", Authorization: "Bearer " + store.token }, method: "GET"
				})
				let data = await response.json()
				setStore({user: data})
				// still need to add the auto navigate to /private
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			handleSignout: async () => {
				
					setStore({user: null, token: null})
					localStorage.removeItem('token')
					actions.getUser()
				
			}
		}
	};
};

export default getState;
