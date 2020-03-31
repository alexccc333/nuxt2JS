const posts = [
    { title: 'Post', date: new Date(), views: 22, comments: [1, 2], _id: '_id1' },
    { title: 'Post', date: new Date(), views: 22, comments: [1, 2], _id: '_id2' },

]


export const actions = {
    async fetchAdmin({ }) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts)
            }, 1000);
        })
    },
    async remove({ }, id) {

    },

    async fetchAdminById({},id){
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts.find(p=>p._id === id))
            }, 1000);
        })
    },
    async update({ }, {id,text}) {

    },
}