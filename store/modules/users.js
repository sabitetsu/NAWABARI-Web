import firebase from '~/plugins/firebase'
const db = firebase.firestore();

const userRef = db.collection('users')

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
    fetchUsers({ commit }) {
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
      const ref = userRef.doc()
      userRef
      .doc(ref.id)
      .set({
        id: ref.id,
        task: user.task,
        isFinished: user.check
      })
      .catch(function(error){
        console.error("えらー　あでぃんぐ　どきゅめんと: ", error)
      })
    },
    deleteUser({commit}, {id,index}){
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
    getusers(state){
      return state.users
    }
  }
}
