export default function Navbar(){
    return(
        <div className="flex w-">
            <div>logo</div>
            <div className="flex justify-between">
                <div>
                    <h2>Home</h2>
                </div>
                <div>
                    <h2>Questions</h2>
                </div>
                <div>
                    <h2>Contest</h2>
                </div>
                <div>
                    <h2>Discussion</h2>
                </div>
            </div>
            <div>
                <div>User</div>
                <div>arrowdown</div>
            </div>
        </div>
    )
}