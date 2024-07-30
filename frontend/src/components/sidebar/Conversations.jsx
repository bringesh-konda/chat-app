import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversations.js"; 
import { getRandomEmoji } from "../../utils/emojis.js";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    console.log("CONVERSATIONS: ", conversations);
    return ( 
        <div className="flex flex-col py-2 overflow-auto">
            {
                conversations.map((conversation, idx) => (
                    <Conversation 
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                        lastIndx={idx === conversations.length - 1}
                    />
                ))
            }
            { loading ? <span className="mx-auto loading loading-spinner"></span> : null}
        </div>
     );
}
 
export default Conversations;

// STARTER CODE SNIPPET.

// import { Conversation } from "./Conversation";
// const Conversations = () => {
//     return ( 
//         <div className="flex flex-col py-2 overflow-auto">
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//         </div>
//      );
// }
 
// export default Conversations;