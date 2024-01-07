import Image from "next/image";
import Link from "next/link";

export default function WhatsNew() {
    return (
        <div className="max-w-[1200px] w-full mx-auto py-20 flex flex-col gap-6">
            <h2 className="text-5xl font-semibold w-11/12 mx-auto">
                Что нового?
            </h2>
            <div className="w-full grid grid-cols-3 gap-2 ">
                <Link
                    href="/chapters/api"
                    className="w-full rounded-3xl  bg-[#28292a] cursor-pointer hover:bg-[#004a77] transition-all"
                >
                    <div className="relative h-56">
                        <Image
                            src="/rock1.jpg"
                            fill={true}
                            alt="3drock"
                            className="w-full rounded-3xl object-cover object-top"
                        />
                    </div>
                    <div className="m-6 flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">API</h3>
                        <p className="">
                            Практикуюсь во взаимодействии с различными API
                        </p>
                    </div>
                </Link>
                <div className="w-full rounded-3xl  bg-[#28292a] cursor-pointer hover:bg-[#004a77] transition-all ">
                    <div className="relative h-56">
                        <Image
                            src="/rock2.jpg"
                            fill={true}
                            alt="3drock"
                            className="w-full rounded-3xl object-cover object-top"
                        />
                    </div>
                    <div className="m-6 flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Здесь текст</h3>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="w-full rounded-3xl  bg-[#28292a] cursor-pointer hover:bg-[#004a77] transition-all ">
                    <div className="relative h-56">
                        <Image
                            src="/rock3.jpg"
                            fill={true}
                            alt="3drock"
                            className="w-full rounded-3xl object-cover object-top"
                        />
                    </div>
                    <div className="m-6 flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Здесь текст</h3>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
