export default function MenuBar() {
    return (
        <div className="py-20 max-w-[900px] w-full mx-auto">
           <div className="w-full h-20 rounded-full bg-[#232820] grid grid-cols-3">
            <div className="rounded-full bg-[#3e4a36] flex justify-center items-center cursor-pointer">
                <p className="text-xl">API</p>
            </div>
            <div className="rounded-full"></div>
            <div className="rounded-full"></div>
           </div>
        </div>
    );
}
