
export default{
  state(){
    return{
      users: []
    }
  },
  mutations: {
    INIT_USER(state, payload){
      state.users = payload
    },
    ADD_USER(state, payload){
      state.users.push(payload)
    },
    SET_USER(state,payload){
      const index = state.users.findIndex(item => item.id === payload.id)
      if (index !== -1){
          state.users[index] = payload
      }
    },
    REMOVED_USER(state, payload){
      const index = state.users.findIndex(item => item.id === payload.id)
      if(index !== -1){
          state.users.splice(index,1)
      }
    }
  },
  actions: {
    initUsers({ commit }){
      const userRef = this.$fire.firestore.collection('users')
      userRef
      .get()
      .then(res =>{
        res.forEach((doc) => {
          console.log("いにっと")
          console.log(doc.data())
          commit('ADD_USER',doc.data())
        })
      })
    },
    fetchUsers({ commit }) {
      const userRef = this.$fire.firestore.collection('users')
      userRef
      .onSnapshot(
        res => {
          res.docChanges().forEach(change =>{
            if(change.type === 'added'){
              commit('ADD_USER', change.doc.data())
            }else if(change.type === 'modified'){
              commit('SET_USER', change.doc.data())
            }else if(change.type === 'removed'){
              commit('REMOVED_USER',change.doc.data())
            }
          })
          
        }
      )
    },
    addUser({commit}, user){
      const userRef = this.$fire.firestore.collection('users')
      const ref = userRef.doc()
      userRef
      .doc(ref.id)
      .set({
        id: ref.id,
        profile: {
          age: ref.age,
          breed: ref.breed,
          description: ref.description,
          name: ref.name,
          sex: ref.sex
        },
        territory: ref.territory
      })
      .catch(function(error){
        console.error("えらー　あでぃんぐ　どきゅめんと: ", error)
      })
    },
    deleteUser({commit}, {id,index}){
      const userRef = this.$fire.firestore.collection('users')
      userRef.doc(id).delete()
      .then(
        // commit('deleteuser',index)
      )
      .catch(function(error){
        console.error("えらー　りむーぶ　どきゅめんと：", error)
      })
    }
  },
  getters: {
    getUsers(state){
      return state.users
    }
  }
}
