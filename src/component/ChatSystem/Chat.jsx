// import { axios } from 'axios'
// import Cookies from 'js-cookie'
// import React, { useEffect, useState } from 'react'


// function Chat() {
//   // const [chatDetail, setChatDetail] = useState([]) // every chat with a person is a chatId, NOT MESSAGE ID
//   // const [messageId, setMessageId] = useState([])
//   // const [friendId, setFriendId] = useState([])
//   // const [friendDetail, setFriendDetail] = useState([])
//   // let _id = Cookies.get('_id')

//   // useEffect(() => {
//   //   let isCancelled = false
//   //   axios
//   //     .get(`http://localhost:3005/chat/${_id}`)
//   //     .then(x => {
//   //       // console.log(x.data[0])
//   //       if (!isCancelled) {
//   //         let clone = [...friendId]
//   //         for (let chatInfo of x.data) {
//   //           for (let friend of chatInfo.participant) {
//   //             if (friend !== _id) {
//   //               clone.push(friend)
//   //             }
//   //           }
//   //         }
//   //         setChatDetail(x.data)
//   //         setFriendId(clone)
//   //       }
//   //     })
//   //     .catch(err => console.log(err.response.data))
//   //   return () => {
//   //     isCancelled = true
//   //   }
//   // }, [])
//   // useEffect(() => {
//   //   let isCancelled = false
//   //   if (friendId.length !== 0) {
//   //     let criteria = {
//   //       _id: {
//   //         $in: friendId
//   //       }
//   //     }
//   //     axios.post('http://localhost:3005/person/criteria', criteria).then(x => {
//   //       if (!isCancelled) setFriendDetail(x.data)
//   //     })
//   //   }
//   //   return () => {
//   //     isCancelled = true
//   //   }
//   // }, [friendId]) // Load imageUrl from Api
//   return (
//     <div>Chat</div>
//   )
// }

// export default Chat

import React from 'react'

function Chat() {
  return (
    <div>Chat</div>
  )
}

export default Chat