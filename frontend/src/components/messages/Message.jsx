const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img 
                    src={"https://imgs.search.brave.com/qM4YQm3AiPh4ELqDJ8QTq2_w1VG2hVIIzEpW9u7QdhI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9SYW5kb20t/aW1hZ2UtZ2VuZXJh/dG9yXzUuanBn"}
                    alt="Tailwind CSS chat bubble component" 
                />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is up?</div>
        <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">12:42</div>
    </div>
  )
}

export default Message