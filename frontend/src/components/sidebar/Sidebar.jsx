import SearchInput from "./Searchinput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
    return ( 
        <div className="flex flex-col p-4 border-r border-slate-500">
            <SearchInput />
            <div className="px-3 divider"></div>
            <Conversations />
            <LogoutButton />
        </div>
     );
}
 
export default Sidebar;

// STARTER CODE FOR THIS FILE.

// import SearchInput from "./Searchinput.jsx";
// import Conversations from "./Conversations.jsx";
// import LogoutButton from "./LogoutButton.jsx";

// const Sidebar = () => {
//     return ( 
//         <div className="flex flex-col p-4 border-r border-slate-500">
//             <SearchInput />
//             <div className="px-3 divider"></div>
//             <Conversations />
//             <LogoutButton />
//         </div>
//      );
// }
 
// export default Sidebar;