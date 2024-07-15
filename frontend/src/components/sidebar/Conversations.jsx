import Conversation from "./Conversation.jsx";

const Conversations = () => {
    return ( 
        <div className="flex flex-col py-2 overflow-auto">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
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