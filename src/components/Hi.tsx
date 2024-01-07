import Image from "next/image";

export default function Hi() {
    return (
        <div className="max-w-[1760px] w-full min-h-[544px] mx-auto px-[90px] rounded-3xl flex flex-col justify-center text-[#443A31] gap-10 relative">
            <Image
                src="/bg.jpg"
                fill={true}
                quality={100}
                alt="Sand dune on Mars"
                className="absolute top-0 right-0 -z-50 rounded-3xl object-cover object-right"
            />
            <h1 className="text-8xl font-bold text-main-text">Привет</h1>
            <p className="text-4xl font-bold max-w-[50%]">
                Меня зовут <span className="text-main-text">Алексей</span>, и
                это мой сайт-песочница
            </p>
        </div>
    );
}
