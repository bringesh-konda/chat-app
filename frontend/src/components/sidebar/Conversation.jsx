import useConversation from '../../zustand/useConversation.js';

const Conversation = ({conversation, lastIndx, emoji}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  const isSelected = selectedConversation?._id === conversation._id;
  
  return (
    <>
        <div className={`flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500
            ${isSelected ? "bg-sky-500" : "" }
        `}
        onClick={() => setSelectedConversation(conversation)}
        >
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img 
                        src={conversation.profilePic}
                        alt="user avatar"  
                    />
                </div>
            </div>
        
            <div className="flex flex-col flex-1">
                <div className="flex justify-between gap-3">
                    <p className="font-bold text-gray-200">{ conversation.fullName }</p>
                    <span className="text-xl">{ emoji }</span>
                </div>
            </div>
        </div>

        { !lastIndx && <div className="h-1 py-0 my-0 divider" />}
    </>
  )
}

export default Conversation;


// STARTER CODE SNIPPET.

// export const Conversation = () => {
//     return (
//       <>
//           <div className="flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500">
//               <div className="avatar online">
//                   <div className="w-12 rounded-full">
//                       <img 
//                           src="https://imgs.search.brave.com/qM4YQm3AiPh4ELqDJ8QTq2_w1VG2hVIIzEpW9u7QdhI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9SYW5kb20t/aW1hZ2UtZ2VuZXJh/dG9yXzUuanBn"
//                           alt="user avatar"  
//                       />
//                   </div>
//               </div>
          
//               <div className="flex flex-col flex-1">
//                   <div className="flex justify-between gap-3">
//                       <p className="font-bold text-gray-200">John Doe</p>
//                       <span className="text-xl">{`: )`}</span>
//                   </div>
//               </div>
//           </div>
  
//           <div className="h-1 py-0 my-0 divider" />
//       </>
//     )
//   }
  