import Bubble from './bubble/Bubble'

const Chat = () => {
    return (
        <div className="grid w-full grid-rows-[1fr_200px]">
            <div className="grid grid-rows-[50px_1fr]">
                <div className="bg-secondary border-primary flex items-center border-b-2 px-4 font-bold text-white">
                    Username
                </div>
                <div className="flex h-full w-full flex-col items-start gap-4 overflow-y-scroll p-4">
                    <Bubble
                        message="Hello, how are you?"
                        time="11:00 AM"
                        type="received"
                    />
                    <Bubble
                        message="I'm good, thank you! How about you?"
                        time="11:02 AM"
                        type="sent"
                    />
                    <Bubble
                        message="I'm doing well, thanks for asking!"
                        time="11:05 AM"
                        type="received"
                    />
                </div>
            </div>
            <div className="mx-4 flex flex-col items-end justify-center gap-2">
                <textarea
                    className="border-primary w-full resize-none rounded-2xl border-2 p-4 focus:outline-none"
                    placeholder=" Write Message..."
                    wrap="soft"
                    rows={3}
                ></textarea>
                <button className="bg-primary rounded-2xl px-10 py-3 text-white">
                    Send
                </button>
            </div>
        </div>
    )
}

export default Chat
