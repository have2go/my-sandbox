export default function Api() {
    return (
        <div className="max-w-[1200px] w-full mx-auto">
            <div className="w-full grid grid-cols-4 grid-rows-4 h-[700px] gap-4">
                <div className="row-span-4 col-span-2 bg-[#232820] rounded-3xl"></div>
                <div className="row-span-2 col-span-2 bg-[#232820] rounded-3xl"></div>
                <div className="row-start-3 col-start-3  bg-[#232820] rounded-3xl"></div>
                <div className="row-start-4 col-start-3 bg-[#232820] rounded-3xl"></div>
                <div className="row-start-3 row-span-2 col-start-4 bg-[#232820] rounded-3xl"></div>
            </div>
        </div>
    );
}
