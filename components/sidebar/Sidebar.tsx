import UserPreview from 'components/userPeview/UserPreview'

const Sidebar = () => {
    const renderDevider = () => <div className="border-primary border-t-2" />
    return (
        <div className="border-primary flex h-full w-full flex-col overflow-y-scroll border-r-2 py-4 text-white">
            <h2 className="text-md text-primary mb-2 px-4 font-bold">Chat</h2>
            {renderDevider()}
            <UserPreview username="UserName" message="Text message..." active />
            {renderDevider()}
            <UserPreview
                username="Another User"
                message="Another text message..."
            />
        </div>
    )
}

export default Sidebar
