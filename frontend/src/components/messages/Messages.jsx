import Message from './Message.jsx';
import useGetMessages from '../../hooks/useGetMessages.js';
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';
import { useEffect, useRef } from 'react';

const Messages = () => {

  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }, [messages])
  
  return (
    <div className='flex-1 px-4 overflow-auto'>
    
      { !loading && 
      messages.length > 0 && 
      (
        messages.map((message) =>(
          <div key={message._id}
            ref={lastMessageRef}
          >
            <Message message={message} />
          </div>
        ))
      )}
      
      {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages;

// STARTER CODE SNIPPET.

// import Message from './Message.jsx';

// const Messages = () => {
//   return (
//     <div className='flex-1 px-4 overflow-auto'>
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages;